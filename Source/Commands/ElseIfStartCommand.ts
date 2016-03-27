/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of an elif statement.
     */
    export class ElseIfStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (conditional).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 1);

            let lines = [new CommandResult("", -1)],
                indentation: number,
                line: CommandResult;

            if (this.language.properties.style.separateBraceLines) {
                indentation = 0;
            } else {
                indentation = 1;
            }

            this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, indentation);

            line = lines[lines.length - 1];
            line.text += this.language.properties.conditionals.elif;
            line.text += this.language.properties.conditionals.startLeft;
            line.text += parameters[1];

            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);

            return lines;
        }
    }
}
