/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a retrieving the length of a list.
     */
    export class ListLengthCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (list).
         */
        public render(parameters: string[]): CommandResult[] {
            if (this.language.properties.lists.asArray) {
                parameters[0] = "array length";
                return this.context.convertParsed(parameters);
            }

            this.requireParametersLength(parameters, 1);

            let result: string = "";

            return [new CommandResult(result, 0)];
        }
    }
}
