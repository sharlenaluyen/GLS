/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a list push statement.
     */
    export class ListPushCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (array, item).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 2);

            let result: string = parameters[1] + ".";
            result += this.language.properties.lists.push;
            result += "(" + parameters[2] + ")";
            result += this.language.properties.style.semicolon;

            return [new CommandResult(result, 0)];
        }
    }
}
