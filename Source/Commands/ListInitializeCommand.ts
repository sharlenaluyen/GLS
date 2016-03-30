/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for initializing a new list.
     */
    export class ListInitializeCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any number of
         *                     items to initialize in the Array.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type[, item, ...]).
         */
        public render(parameters: string[]): CommandResult[] {
            if (this.language.properties.lists.asArray) {
                parameters[0] = "array initialize";
                return this.context.convertParsed(parameters);
            }

            this.requireParametersLengthMinimum(parameters, 1);

            let typeNameRaw: string = "list<" + parameters[1] + ">",
                typeName: string = this.context.convertCommon("type", typeNameRaw),
                output: string = "new " + typeName;

            if (parameters.length > 2) {
                output += " { ";
                output += parameters.slice(2).join(", ");
                output += " }";
            } else {
                output += "()";
            }

            return [new CommandResult(output, 0)];
        }
    }
}
