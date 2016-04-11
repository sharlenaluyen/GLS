/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

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
        public render(parameters: string[]): LineResults {
            this.requireParametersLengthRange(parameters, 2, 3);

            if (parameters.length === 3 && !this.language.properties.variables.declarationRequired) {
                return LineResults.newSingleLine("\0", false);
            }

            let starter: string = this.language.properties.variables.declaration;
            let newParameters: string[] = parameters.slice();
            newParameters[0] = "variable inline";

            let ender: string = this.context.convertParsed(newParameters).commandResults[0].text;

            return LineResults.newSingleLine(starter + ender, true);
        }
    }
}
