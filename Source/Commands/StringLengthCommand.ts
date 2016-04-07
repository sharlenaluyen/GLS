/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a retrieving the length of an string.
     */
    export class StringLengthCommand extends Command {
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

            if (this.language.properties.strings.lengthAsStatic) {
                result = this.language.properties.strings.length;
                result += "(";
                result += parameters[1];
                result += ")";
            } else {
                result += parameters[1] + ".";
                result += this.language.properties.strings.length;

                if (this.language.properties.strings.lengthAsFunction) {
                    result += "()";
                }
            }

            return [new CommandResult(result, 0)];
        }
    }
}
