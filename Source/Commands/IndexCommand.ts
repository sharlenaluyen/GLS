/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for an indexed [] lookup.
     */
    export class IndexCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, index).
         */
        public render(parameters: string[]): LineResults {
            this.requireParametersLength(parameters, 2);

            return LineResults.newSingleLine(parameters[1] + "[" + parameters[2] + "]", false);
        }
    }
}
