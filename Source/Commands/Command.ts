/// <reference path="../Languages/Language.ts" />
/// <reference path="../ConversionContext.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * Abstract base class for commands that may be rendered into language code.
     */
    export abstract class Command {
        /**
         * The driving context for converting the command.
         */
        protected context: ConversionContext;

        /**
         * A language to convert raw code into.
         */
        protected language: Languages.Language;

        /**
         * Whether this command'slines should end with a semicolon.
         */
        protected addsSemicolon: boolean;

        /**
         * Initializes a new instance of the Command class.
         * 
         * @param context   The driving context for converting the command.
         */
        constructor(context: ConversionContext) {
            this.context = context;
            this.language = context.getLanguage();
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public abstract render(parameters: string[]): LineResults;

        /**
         * @returns Whether this command's lines should end with a semicolon.
         */
        public getAddsSemicolon(): boolean {
            return this.addsSemicolon;
        }

        /**
         * Adds a portion of raw syntax that may contain endlines.
         * 
         * @param lines   In-progress line(s) of code in the rendering language.
         * @param extra   Raw syntax to add to the lines.
         * @param indentation   How much indentation the last line should be.
         */
        protected addLineEnder(lines: CommandResult[], extra: string, indentation): void {
            let currentLine: CommandResult = lines[lines.length - 1];
            let endlineIndex: number = extra.indexOf("\n");

            if (endlineIndex === -1) {
                currentLine.text += extra;
                currentLine.indentation = indentation;
                return;
            }

            let currentIndex: number = 0;

            while (endlineIndex !== -1) {
                let component: string = extra.substring(currentIndex, endlineIndex);

                currentLine.text += component;
                currentIndex = endlineIndex;

                currentLine = new CommandResult("", 0);
                lines.push(currentLine);

                endlineIndex = extra.indexOf("\n", currentIndex + 1);
            }

            if (currentIndex !== -1) {
                currentLine.text = extra.substring(currentIndex + 1);
            }

            lines[lines.length - 1].indentation = indentation;
        }

        /**
         * Throws an error if an incorrect number of parameters are passed.
         * 
         * @param parameters   Parameters passed to a command.
         * @param minimum   The allowed number of parameters.
         */
        protected requireParametersLength(parameters: string[], amount: number): void {
            if (parameters.length - 1 !== amount) {
                throw new Error(`Not the right amount of parameters: expected ${amount} but got ${parameters.length - 1}.`);
            }
        }

        /**
         * Throws an error if too many parameters are passed.
         * 
         * @param parameters   Parameters passed to a command.
         * @param minimum   The minimum allowed number of parameters.
         */
        protected requireParametersLengthMinimum(parameters: string[], minimum: number): void {
            if (parameters.length - 1 < minimum) {
                throw new Error(`Too many arguments: expected at least ${minimum} but got ${parameters.length - 1}.`);
            }
        }

        /**
         * Throws an error if too many parameters are passed.
         * 
         * @param parameters   Parameters passed to a command.
         * @param minimum   The minimum allowed number of parameters.
         */
        protected requireParametersLengthMaximum(parameters: string[], maximum: number): void {
            if (parameters.length - 1 > maximum) {
                throw new Error(`Not enough arguments: expected fewer than ${maximum} but got ${parameters.length - 1}.`);
            }
        }

        /**
         * Throws an error if not enough or too many parameters are passed.
         * 
         * @param parameters   Parameters passed to a command.
         * @param maximum   The maximum allowed number of parameters.
         * @param minimum   The minimum allowed number of parameters.
         */
        protected requireParametersLengthRange(parameters: string[], minimum: number, maximum: number): void {
            this.requireParametersLengthMinimum(parameters, minimum);
            this.requireParametersLengthMaximum(parameters, maximum);
        }

        /**
         * Throws an error if an odd number of parameters are passed.
         * 
         * @param parameters   Parameters passed to a command.
         */
        protected requireParametersLengthEven(parameters: string[]): void {
            if ((parameters.length % 2 - 1) !== 0) {
                throw new Error(`Expected parameters to be even, but got ${parameters.length - 1}.`);
            }
        }

        /**
         * Throws an error if an even number of parameters are passed.
         * 
         * @param parameters   Parameters passed to a command.
         */
        protected requireParametersLengthOdd(parameters: string[]): void {
            if ((parameters.length - 1) % 2 === 0) {
                throw new Error(`Expected parameters to be odd, but got ${parameters.length - 1}.`);
            }
        }
    }
}
