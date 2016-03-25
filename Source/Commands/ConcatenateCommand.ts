/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for concatenating strings.
     */
    export class ConcatenateCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (string, string[, string, ...])
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLengthMinimum(parameters, 2);

            let result = parameters[1];

            for (let i: number = 2; i < parameters.length; i += 1) {
                result += this.language.properties.strings.concatenate + parameters[i];
            }

            return [new CommandResult(result, 0)];
        }
    }
}
