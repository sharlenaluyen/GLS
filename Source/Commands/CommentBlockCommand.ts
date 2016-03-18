/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for printing a comment block line.
     */
    export class CommentBlockCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): CommandResult[] {
            let result: string = "";

            result += this.language.properties.comments.blockLineLeft;
            result += parameters.slice(1).join(" ");
            result += this.language.properties.comments.blockLineRight;

            return [new CommandResult(result, 0)];
        }
    }
}
