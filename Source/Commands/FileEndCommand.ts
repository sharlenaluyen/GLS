/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for ending a file.
     */
    export class FileEndCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (fileName).
         */
        public render(parameters: string[]): LineResults {
            this.requireParametersLength(parameters, 1);

            let output: CommandResult[] = [],
                source: string[] = this.language.properties.style.fileEndLines;

            for (let i: number = 0; i < source.length; i += 1) {
                output.push(new CommandResult(source[i].replace("{0}", parameters[1]), 0));
            }

            if (output.length !== 0) {
                output[0].indentation = -this.language.properties.style.fileIndentation;
            }

            return new LineResults(output, false);
        }
    }
}
