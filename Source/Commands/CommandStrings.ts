/// <reference path="../Languages/Language.ts" />
/// <reference path="CommandResult.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * Constants used for creating commands.
     */
    export class CommandStrings {
        /**
         * Raw name of the ArrayInitialize command.
         */
        public static /* readonly */ ArrayInitializeCommandName: string = "array initialize";

        /**
         * Raw name of the Literal command.
         */
        public static /* readonly */ LiteralCommandName: string = "literal";

        /**
         * Raw name of the Type command.
         */
        public static /* readonly */ TypeCommandName: string = "type";

        /**
         * Generates a raw string of GLS syntax for a command and parameters.
         * 
         * @param inputs   A command name followed by any number of parameters.
         * @returns A raw string of GLS syntax for the command and parameters.
         */
        public static generateRawCommand(inputs: string[]): string {
            if (inputs.length === 0) {
                throw new Error("At least one parameter is required.");
            }

            if (inputs.length === 1) {
                return inputs[0];
            }

            return inputs[0] + " : " + inputs.slice(1).join(" ");
        }
    }
}
