/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing.
     */
    export class PrintCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents).
         */
        public render(parameters: string[]): LineResults {
            this.requireParametersLength(parameters, 1);

            let result: string = "";

            result += this.language.properties.style.printStart;
            result += parameters[1];
            result += this.language.properties.style.printEnd;

            return LineResults.newSingleLine(result, true);
        }
    }
}
