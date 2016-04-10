/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a searching for a substring in a string.
     */
    export class StringIndexCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, value).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 2);

            let result: string = "";

            result += parameters[1] + ".";
            result += this.language.properties.strings.index;
            result += "(";
            result += parameters[2];
            result += ")";

            return [new CommandResult(result, 0)];
        }
    }
}
