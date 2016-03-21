/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing a value.
     */
    export class ValueCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (value).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 1);

            return [new CommandResult(this.convertValue(parameters[1]), 0)];
        }

        /**
         * Converts a raw value into the language's equivalent.
         * 
         * @param typeNameRaw   A raw value to convert.
         * @returns The equivalent converted value.
         */
        private convertValue(valueRaw: string): string {
            if (!this.language.properties.variables.aliases.hasOwnProperty(valueRaw)) {
                return valueRaw;
            }

            return this.language.properties.variables.aliases[valueRaw];
        }
    }
}
