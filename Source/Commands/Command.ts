/// <reference path="../Languages/Language.ts" />
/// <reference path="../ConversionContext.ts" />

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
        public abstract render(parameters: string[]): CommandResult[];

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
         * Throws an error if not enough parameters are passed.
         * 
         * @param parameters   Parameters passed to a command.
         * @param minimum   The minimum allowed number of parameters.
         */
        protected requireParametersLengthMinimum(parameters: string[], minimum: number): void {
            if (parameters.length - 1 < minimum) {
                throw new Error(`Not enough arguments: expected at least ${minimum} but got ${parameters.length - 1}.`);
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
