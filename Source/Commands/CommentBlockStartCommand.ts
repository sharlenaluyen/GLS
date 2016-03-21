/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for starting a comment block.
     */
    export class CommentBlockStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        public render(parameters: string[]): CommandResult[] {
            return [new CommandResult(this.language.properties.comments.blockStart, 0)];
        }
    }
}
