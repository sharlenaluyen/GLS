/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for ending a documentation block.
     */
    export class CommentDocEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): CommandResult[] {
            return [new CommandResult(this.language.properties.comments.docEnd, 0)];
        }
    }
}
