/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the end of an if statement.
     */
    export class IfEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 0);

            let ender: string = this.language.properties.conditionals.end;

            if (ender === "\0") {
                return [];
            }

            return [new CommandResult(ender, -1)];
        }
    }
}
