/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing an operator.
     */
    export class OperatorCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (operator).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 1);

            return [new CommandResult(this.convertOperator(parameters[1]), 0)];
        }

        /**
         * Converts a raw operator into the language's equivalent.
         * 
         * @param typeNameRaw   A raw operator to convert.
         * @returns The equivalent converted operator.
         */
        private convertOperator(operatorRaw: string): string {
            if (!this.language.properties.operators.aliases.hasOwnProperty(operatorRaw)) {
                return operatorRaw;
            }

            return this.language.properties.operators.aliases[operatorRaw];
        }
    }
}
