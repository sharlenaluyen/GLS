/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for declaring a variable inline (without a preceding "var ").
     */
    export class VariableInlineCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type[, value]).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLengthRange(parameters, 2, 3);

            let name: string = parameters[1];
            let typeName: string = this.context.convertType(parameters[2]);
            let output: string = "";

            if (this.language.properties.variables.explicitTypes) {
                if (this.language.properties.variables.typesAfterName) {
                    output += name + this.language.properties.variables.typeLeft;
                    output += typeName;
                } else {
                    output += typeName + " " + name;
                }
            } else {
                output += name;
            }

            if (parameters.length > 3) {
                output += " " + this.renderVariableValue(parameters[3]);
            }

            return [new CommandResult(output, 0)];
        }

        /**
         * Renders the "= value" part of a command.
         * 
         * @param valueRaw   The raw value of a variable.
         * @returns   The "= value" part of a command. 
         */
        private renderVariableValue(valueRaw: string): string {
           let operator = this.context.convert(["operator : equals"])[0];
           let value = this.context.convert(["value : " + valueRaw])[0];

           return operator + " " + value;
        }
    }
}
