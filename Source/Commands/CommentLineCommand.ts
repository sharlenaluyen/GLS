/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing a comment line.
     */
    export class CommentLineCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): CommandResult[] {
            let language: Languages.Language = this.language,
                result: string = "";

            result += language.properties.comments.lineLeft;
            result += parameters.slice(1).join(" ");
            result += language.properties.comments.lineRight;

            return [new CommandResult(result, 0)];
        }
    }
}
