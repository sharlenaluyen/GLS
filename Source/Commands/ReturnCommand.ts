/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for returning in a function.
     */
    export class ReturnCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ([value]).
         */
        public render(parameters: string[]): LineResults {
            let output: string = "return";

            if (parameters.length > 1) {
                output += " " + parameters[1];
            }

            return LineResults.newSingleLine(output, true);
        }
    }
}
