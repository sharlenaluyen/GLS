/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a retrieving the length of an array.
     */
    export class ArrayLengthCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (array).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 1);

            let result: string = "";

            if (this.language.properties.arrays.lengthAsStatic) {
                result = this.language.properties.arrays.length;
                result += "(";
                result += parameters[1];
                result += ")";
            } else {
                result += parameters[1] + ".";
                result += this.language.properties.arrays.length;

                if (this.language.properties.arrays.lengthAsFunction) {
                    result += "()";
                }
            }

            return [new CommandResult(result, 0)];
        }
    }
}
