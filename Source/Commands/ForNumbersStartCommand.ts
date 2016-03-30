/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of a for loop over numbers.
     */
    export class ForNumbersStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 4);

            let starter: string;

            if (this.language.properties.loops.rangedForLoops) {
                starter = this.renderStartRanged(parameters);
            } else {
                starter = this.renderStartLoop(parameters);
            }

            let lines: CommandResult[] = [new CommandResult(starter, 0)];
            this.addLineEnder(lines, this.language.properties.conditionals.startRight, 1);

            return lines;
        }

        /**
         * Renders a Pythonic ranged loop.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        public renderStartRanged(parameters: string[]): string {
            let output: string = this.language.properties.loops.for;

            output += this.language.properties.conditionals.startLeft;
            output += parameters[1];
            output += this.language.properties.loops.rangedForLoopsLeft;
            output += parameters[3];
            output += this.language.properties.loops.rangedForLoopsMiddle;
            output += parameters[4];
            output += this.language.properties.loops.rangedForLoopsRight;

            return output;
        }

        /**
         * Renders a traditional loop.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, type, start, end).
         */
        public renderStartLoop(parameters: string[]): string {
            let output: string = this.language.properties.loops.for;

            output += this.language.properties.conditionals.startLeft;
            output += this.context.convertParsed(["variable inline", parameters[1], parameters[2], parameters[3]])[0].text;
            output += this.language.properties.style.semicolon + " ";
            output += this.context.convertParsed(["operation", parameters[1], "less than", parameters[4]])[0].text;
            output += this.language.properties.style.semicolon + " ";
            output += this.context.convertParsed(["operation", parameters[1], "increase by", "1"])[0].text;

            return output;
        }
    }
}
