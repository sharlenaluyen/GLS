/// <reference path="Commands/Command.ts" />
/// <reference path="Commands/CommandResult.ts" />
/// <reference path="Commands/CommandStrings.ts" />
/// <reference path="Languages/Language.ts" />
/// <reference path="GlsParser.ts" />

namespace GLS {
    "use strict";

    /**
     * Driving context to use a GlsParser with a language to produce code. 
     */
    export class ConversionContext {
        /**
         * The language this context is converting GLS code into.
         */
        private language: Languages.Language;

        /**
         * A converter for transforming raw GLS syntax into language code.
         */
        private parser: GlsParser;

        /**
         * Initializes a new instance of the ConversionContext class.
         * 
         * @param language   
         */
        constructor(language: Languages.Language) {
            this.language = language;
            this.parser = new GlsParser(this);
        }

        /**
         * @returns The language this context is converting GLS code into.
         */
        /* readonly */ getLanguage(): Languages.Language {
            return this.language;
        }

        /**
         * Converts raw GLS syntax to the context language. 
         * 
         * @param lines   Lines of raw GLS syntax.
         * @returns Equivalent lines of code in the context language.
         */
        convert(lines: string[]): string[] {
            let indentation: number = 0,
                output: string[] = [];

            for (let i: number = 0; i < lines.length; i += 1) {
                let lineParsed: Commands.CommandResult[] = this.parser.parseCommand(lines[i]);

                for (let j: number = 0; j < lineParsed.length; j += 1) {
                    let result: Commands.CommandResult = lineParsed[j];

                    if (result.indentation < 0) {
                        indentation += result.indentation;
                    }

                    if (result.text !== "\0") {
                        output.push(this.generateTabs(indentation) + result.text);
                    }

                    if (result.indentation > 0) {
                        indentation += result.indentation;
                    }
                }
            }

            return output;
        }

        /**
         * Converts a command with a single argument.
         * 
         * @param command   The name of the command.
         * @param argumentRaw   A raw argument for the command.
         * @returns An equivalent line of code in the context language. 
         */
        convertCommon(command: string, argumentRaw: string): string {
            return this.parser.renderParsedCommand([command, argumentRaw])[0].text;
        }
        
        /**
         * Converts a command with pre-parsed arguments.
         * 
         * @param lineParsed   A parsed line from raw GLS syntax.
         * @returns The equivalent lines of code in the language.
         */
        convertParsed(parameters: string[]): string {
            return this.parser.renderParsedCommand(parameters)[0].text;
        }

        /**
         * Generates spaces equivalent to 4-space code tabbing.
         * 
         * @param amount   How many tabs should be added.
         * @returns An all-spaces String of length = amount * 4.
         */
        private generateTabs(amount: number): string {
            let output: string = "";

            for (let i: number = 0; i < amount; i += 1) {
                output += "    ";
            }

            return output;
        }
    }
}
