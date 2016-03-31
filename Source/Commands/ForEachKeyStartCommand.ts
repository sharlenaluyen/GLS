/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of a foreach loop over a container's keys.
     */
    export class ForEachKeyStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 3);

            if (this.language.properties.loops.forEachAsMethod) {
                return this.renderForEachAsMethod(parameters);
            } else {
                return this.renderForEachAsLoop(parameters);
            }
        }

        /**
         * Renders a Ruby-style method iteration.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        public renderForEachAsMethod(parameters: string[]): CommandResult[] {
            let output: string = parameters[1];
            output += this.language.properties.loops.forEachGetKeys;
            output += parameters[2];
            output += this.language.properties.loops.forEachRight;

            return [new CommandResult(output, 1)];
        }

        /**
         * Renders a traditional foreach loop.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (container, keyName, keyType).
         */
        public renderForEachAsLoop(parameters: string[]): CommandResult[] {
            let line: string = this.language.properties.loops.foreach,
                output: CommandResult[];

            line += this.language.properties.conditionals.startLeft;

            if (this.language.properties.variables.declarationRequired) {
                line += this.language.properties.variables.declaration;
                line += this.context.convertParsed(["variable inline", parameters[2], parameters[3]])[0].text;
            } else {
                line += parameters[2];
            }

            line += this.language.properties.loops.forEachMiddle;
            line += parameters[1];
            line += this.language.properties.loops.forEachGetKeys;
            line += this.language.properties.loops.forEachRight;

            output = [new CommandResult(line, 0)];
            this.addLineEnder(output, this.language.properties.conditionals.startRight, 1);

            return output;
        }
    }
}
