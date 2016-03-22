/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing a logical inverse.
     */
    export class OperationCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value, operator, value[, operator, value, ...]).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLengthMinimum(parameters, 3);
            this.requireParametersLengthOdd(parameters);

            let result = this.context.convertCommon("value", parameters[1]);

            for (let i: number = 2; i < parameters.length; i += 2) {
                result += " " + this.context.convertCommon("operator", parameters[i]);
                result += " " + this.context.convertCommon("value", parameters[i + 1]);
            }

            return [new CommandResult(result, 0)];
        }
    }
}
