var mocks = require("../mocks.js"),
    filePromises = require("../filePromises.js"),
    GLS = require("../../Distribution/GLS.js"),
    expect = require("chai").expect,
    fs = require("fs"),
    commandsPath = "Tests/Integration/Commands",
    languagesByName = {
        "C#": new GLS.Languages.CSharp(),
        "Python": new GLS.Languages.Python(),
        "Ruby": new GLS.Languages.Ruby(),
        "TypeScript": new GLS.Languages.TypeScript()
    },
    languages = Object.keys(languagesByName).map(key => languagesByName[key]),
    languagesByExtension = {
        ".cs": languagesByName["C#"],
        ".py": languagesByName["Python"],
        ".rb": languagesByName["Ruby"],
        ".ts": languagesByName["TypeScript"]
    },
    languageExtensions = Object.keys(languagesByExtension),
    // TODO: Read these in using fs.
    commands = {
        "ArrayInitialize": ["no values", "one value", "two values", "three values"],
        "Break": ["break"],
        "CommentBlock": ["empty line", "multiple words", "single word"],
        "CommentBlockEnd": ["comment block end"],
        "CommentBlockStart": ["comment block start"],
        "CommentDocEnd": ["comment doc end"],
        "CommentDocStart": ["comment doc start"],
        "CommentDocTag": ["giant parameter", "giant summary", "long parameter", "long summary", "parameter", "summary"],
        "CommentLine": ["empty line", "multiple words", "single word"],
        "Concatenate": ["two strings", "three strings"],
        "Continue": ["continue"],
        "ElseStart": ["else start"],
        "ElseIfStart": ["else if start"],
        "ForEachEnd": ["for each end"],
        "ForEachKeyStart": ["for each key start"],
        "ForEachPairStart": ["for each pair start"],
        "ForNumbersEnd": ["for numbers end"],
        "ForNumbersStart": ["int", "number"],
        "FunctionStart": ["no parameters return void", "no parameters return int", "one parameter return void", "one parameter return int", "two parameters return void", "two parameters return int", "three parameters return void", "three parameters return int"],
        "IfEnd": ["if end"],
        "IfStart": ["if start"],
        "Index": ["index"],
        "ListInitialize": ["no values", "one value", "two values", "three values"],
        "ListPush": ["list push"],
        "Literal": ["no parameters", "single parameter", "two parameters"],
        "Not": ["not"],
        "Operation": ["one operation", "two operations", "three operations"],
        "Operator": ["equal to", "increase by", "not equal to", "plus"],
        "Return": ["no value", "value"],
        "This": ["this"],
        "Type": ["array", "no alias", "with alias"],
        "Value": ["false", "infinity", "true"],
        "Variable": ["int", "int value", "number", "number value", "string", "string value"],
        "VariableInline": ["int", "int value", "number", "number value", "string", "string value"],
        "WhileEnd": ["while end"],
        "WhileStart": ["while start"]
    };
    
(() => {
    "use strict";

    /**
     * 
     */
    function testCommandOption(commandName, option, done) {
        let path = `${commandsPath}/${commandName}`,
            filePathPrefix = `${path}/${option}`,
            sourceFilePath = filePathPrefix + ".gls",
            outputPaths = languageExtensions.map(extension => filePathPrefix + extension);
            
        filePromises
            .cacheFiles(outputPaths.concat(sourceFilePath))
            .then(() => {
                let sourceContents = filePromises.getCached(sourceFilePath).trim();
                
                outputPaths
                    .map(outputPath => filePromises.getCached(outputPath))
                    .forEach((outputContents, i) => {
                        let language = languages[i],
                            generalProperties = language.properties.general,
                            descriptor = `${generalProperties.name} > ${commandName} > ${option}${generalProperties.extension}`;
                        
                        testCommandOptionFile(descriptor, sourceContents, outputContents, language);
                    });
                
                done();
            });
    }

    /**
     * Ensures a .gls source file's output matches its corresponding files.
     * 
     * @param descriptor   A description of what this is testing.
     * @param sourceContents   The 
     */
    function testCommandOptionFile(descriptor, sourceContents, outputContents, language) {
        let context = new GLS.ConversionContext(language),
            sourceLines = sourceContents.split("\r\n"),
            validLines = outputContents.split("\r\n"),
            resultLines;

        validLines.pop();

        try {
            resultLines = context.convert(sourceLines);
            expect(validLines).to.be.deep.equal(resultLines);
        } catch (error) {
            if (!resultLines) {
                console.log(`Could not convert ${descriptor}:`);
                console.log("    " + error.toString());
                return;            
            }

            console.log(`${descriptor}`);
            console.log("Expected:");
            validLines.forEach(line => console.log(`    |${line}|`));
            console.log("Actual:");
            resultLines.forEach(line => console.log(`    |${line}|`));
        }
    }

    /**
     * Removes a substring from the end of a string.
     * 
     * @param text   The container string to trim.
     * @param ending   A substring to trim.
     * @returns The original text, trimmed.
     */
    function trimRight(text, ending) {
        while (text.length >= ending.length && text.lastIndexOf(ending) === text.length - ending.length) {
            text = text.substring(0, text.length - ending.length);
        }
        
        return text;
    }

    describe("commands", () => {
        for (let commandName in commands) {
            if (!commands.hasOwnProperty(commandName)) {
                continue;
            }
            
            let options = commands[commandName];
            
            describe(commandName, () => {
                for (let i = 0; i < options.length; i += 1) {
                    it(options[i], done => {
                        testCommandOption(commandName, options[i], done);
                    });
                }
            });
        }
    });
})();