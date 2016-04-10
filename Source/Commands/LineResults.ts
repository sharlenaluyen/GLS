/// <reference path="CommandResult.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A cluster of code converted from a line of GLS syntax.
     */
    export class LineResults {
        /**
         * Text contents of the result.
         */
        public commandResults: CommandResult[];

        /**
         * Whether this should have a semicolon appended.
         */
        public addSemicolon: boolean;

        /**
         * Initializes a new instance of the LineResults class.
         * 
         * @param commandResults   Lines of code converted fromthe GLS syntax.
         * @param addsSemicolon   Whether this should end with a semicolon.
         */
        constructor(commandResults: CommandResult[], addSemicolon: boolean) {
            this.commandResults = commandResults;
            this.addSemicolon = addSemicolon;
        }
    }
}
