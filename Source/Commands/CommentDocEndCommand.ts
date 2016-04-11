/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

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
         * @remarks Usage: ().
         */
        public render(parameters: string[]): LineResults {
            return LineResults.newSingleLine(this.language.properties.comments.docEnd, false);
        }
    }
}
