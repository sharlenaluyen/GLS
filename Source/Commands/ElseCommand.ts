/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of an else statement.
     */
    export class ElseCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: ().
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 0);

            let lines = [new CommandResult("", -1)],
                indentation: number;

            if (this.language.properties.style.separateBraceLines) {
                indentation = 0;
            } else {
                indentation = 1;
            }

            this.addLineEnder(lines, this.language.properties.conditionals.continueLeft, indentation);
            lines[lines.length - 1].text += this.language.properties.conditionals.else;

            if (this.language.properties.style.separateBraceLines) {
                lines.push(new CommandResult("", 1));
            }

            lines[lines.length - 1].text += this.language.properties.conditionals.continueRight;

            return lines;
        }
    }
}
