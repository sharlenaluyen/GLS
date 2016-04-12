/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for wrapping with parenthesis.
     */
    export class ParenthesisCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.RepeatingParameters(
                "Contents within the parenthesis.",
                [
                    new Parameters.SingleParameter("contents", "Contents within the parenthesis.", false)
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ParenthesisCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (contents, ...).
         */
        public render(parameters: string[]): LineResults {
            let result: string = "";

            result += "(";
            result += parameters.slice(1).join(" ");
            result += ")";

            return LineResults.newSingleLine(result, false);
        }
    }
}
