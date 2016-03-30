/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing the "continue" keyword.
     */
    export class ContinueCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 0);

            let output: string = this.language.properties.loops.continue;
            output += this.language.properties.style.semicolon;

            return [new CommandResult(output, 0)];
        }
    }
}
