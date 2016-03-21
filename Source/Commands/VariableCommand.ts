/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for declaring a variable.
     */
    export class VariableCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type[, value]).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLengthRange(parameters, 2, 3);

            let starter: string = this.language.properties.variables.declaration;

            // I don't know if this will work... :)
            let ender: string = this.context.convert(["variable inline : " + parameters.slice(1).join(" ")])[0];
            ender += this.language.properties.style.semicolon;

            return [new CommandResult(starter + ender, 0)];
        }
    }
}
