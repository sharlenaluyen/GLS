/// <reference path="CLikeLanguage.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for the TypeScript language.
     */
    export class TypeScript extends CLikeLanguage {
        /**
         * @returns Metadata on arrays.
         */
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void {
            arrays.className = "Array";
        }

        /**
         * @returns Metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void {
            booleans.className = "boolean";
        }

        /**
         * @returns Metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void {
            super.generateClassProperties(classes);

            classes.aliases = {
                "dictionary": "object",
                "int": "number"
            };
            classes.constructorName = "constructor";
            classes.defineInheritanceLeft = " extends ";
        }

        /**
         * @returns Metadata on class members.
         */
        protected generateClassMemberProperties(members: Properties.ClassMemberProperties): void {
            super.generateClassMemberProperties(members);

            members.functionGetBound = true;
            members.functionGetLeft = ".bind(";
            members.functionGetRight = ")";
        }

        /**
         * Generates metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void {
            super.generateCommentProperties(comments);

            comments.docEnd = " */";
            comments.docLineEnd = "";
            comments.docLineStart = " * ";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "summary": "\0",
                "parameter": ""
            };
            comments.docTagEnd = " ";
            comments.docTagStart = "@";
            comments.docStart = "/**";
        }

        /**
         * @returns Metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void {
            dictionaries.className = "Object";
            dictionaries.initializeStart = "{";
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairLeft = "\"";
            dictionaries.initializePairMiddle = "\": ";
            dictionaries.initializePairRight = "";
            dictionaries.keyChecker = "hasOwnProperty";
        }

        /**
         * @returns Metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void {
            super.generateExceptionProperties(exceptions);

            exceptions.className = "Error";
        }

        /**
         * @returns Metadata on functions.
         */
        protected generateFunctionProperties(functions: Properties.FunctionProperties): void {
            super.generateFunctionProperties(functions);

            functions.defineStartLeft = "function ";
            functions.returnTypeAfterName = true;
            functions.returnTypeMarker = ": ";
        }

        /**
         * @returns Metadata on general 
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void {
            general.extension = ".ts";
            general.name = "TypeScript";
        }

        /**
         * @returns Metadata on loops.
         */
        protected generateLoopProperties(): Properties.LoopProperties {
            let loops: Properties.LoopProperties = new Properties.LoopProperties();

            loops.forEachLeft = "for (";
            loops.forEachMiddle = " in ";
            loops.forEachRight = ") {";

            return loops;
        }

        /**
         * @returns Metadata on numbers.
         */
        protected generateNumberProperties(): Properties.NumberProperties {
            let numbers: Properties.NumberProperties = new Properties.NumberProperties();

            numbers.className = "Number";

            return numbers;
        }

        /**
         * @returns Metadata on operators.
         */
        protected generateOperatorProperties(operators: Properties.OperatorProperties): void {
            super.generateOperatorProperties(operators);

            operators.equalTo = "===";
            operators.notEqualTo = "!==";
        }

        /**
         * @returns Metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void {
            strings.className = "String";
        }

        /**
         * @returns Metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void {
            super.generateVariableProperties(variables);

            variables.aliases = {
                "infinity": "Infinity"
            };
            variables.castLeft = "<";
            variables.castRight = ">";
            variables.declaration = "let ";
            variables.explicitTypes = true;
            variables.null = "undefined";
            variables.typesAfterName = true;
            variables.typeLeft = ": ";
        }
    }
}
