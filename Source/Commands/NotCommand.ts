/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing a logical inverse.
     */
    export class NotCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 1);

            let not = this.language.properties.operators.not;

            return [new CommandResult(not + parameters[1], 0)];
        }
    }
}
