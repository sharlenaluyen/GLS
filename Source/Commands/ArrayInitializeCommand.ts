/// <reference path="../Languages/Language.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for initializing a new array.
     */
    export class ArrayInitializeCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type[, item, ...]).
         */
        public render(parameters: string[]): LineResults {
            this.requireParametersLengthMinimum(parameters, 1);

            let typeName: string = this.context.convertCommon("type", parameters[1]),
                output: string = "";

            if (this.language.properties.arrays.initializeAsNew) {
                output += "new ";
            }

            if (this.language.properties.arrays.initializeByType) {
                if (parameters.length === 2) {
                    output += typeName + "[0]";
                    return LineResults.newSingleLine(output, false);
                }

                output += this.context.convertCommon("type", typeName + "[]");
            }

            if (this.language.properties.arrays.initializeByType) {
                output += " { ";
            } else {
                output += "[";
            }

            output += parameters.slice(2).join(", ");

            if (this.language.properties.arrays.initializeByType) {
                output += " }";
            } else {
                output += "]";
            }

            return LineResults.newSingleLine(output, false);
        }
    }
}
