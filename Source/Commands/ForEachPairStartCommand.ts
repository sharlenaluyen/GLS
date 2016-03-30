/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of a for loop over a container's pairs.
     */
    export class ForEachPairStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType, valueName, valueType).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 5);

            let container: string = parameters[1],
                keyName: string = parameters[2],
                keyType: string = this.context.convertCommon("type", parameters[3]),
                valueName: string = parameters[4],
                valueType: string = this.context.convertCommon("type", parameters[5]);

            return undefined;
        }

    }
}
