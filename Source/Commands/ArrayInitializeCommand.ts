/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for initializing a new Array.
     */
    export class ArrayInitializeCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLengthMinimum(parameters, 1);

            let typeName: string = this.context.convertType(parameters[1]),
                output: string = "";

            if (this.language.properties.arrays.initializeAsNew) {
                output += "new ";

                if (this.language.properties.arrays.initializeByType) {
                    output += this.context.convertType(typeName + "[]");
                }
            }

            if (this.language.properties.arrays.initializeByType) {
                if (parameters.length > 2) {
                    output += " { ";
                } else {
                    output += "(";
                }
            } else {
                output += "[";
            }

            output += parameters.slice(2).join(", ");

            if (this.language.properties.arrays.initializeByType) {
                if (parameters.length > 2) {
                    output += " }";
                } else {
                    output += ")";
                }
            } else {
                output += "]";
            }

            return [new CommandResult(output, 0)];
        }
    }
}
