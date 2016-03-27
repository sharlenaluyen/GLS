/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of an if statement.
     */
    export class IfStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, index).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 1);

            let line: string = this.language.properties.conditionals.if;
            line += this.language.properties.conditionals.startLeft;
            line += parameters[1];

            let lines: CommandResult[] = [new CommandResult(line, 0)];
            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);

            return lines;
        }
    }
}
