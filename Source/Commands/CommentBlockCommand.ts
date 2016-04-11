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
         * @remarks Usage: (contents, ...).
         */
        public render(parameters: string[]): LineResults {
            let output: string = "";

            output += this.language.properties.comments.blockLineLeft;
            output += parameters.slice(1).join(" ");
            output += this.language.properties.comments.blockLineRight;

            return LineResults.newSingleLine(output, false);
        }
    }
}
