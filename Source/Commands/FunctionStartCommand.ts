/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for the beginning of a function.
     */
    export class FunctionStartCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (name, returnType[, parameterName, parameterType, ...]).
         */
        public render(parameters: string[]): CommandResult[] {
            this.requireParametersLengthMinimum(parameters, 2);
            this.requireParametersLengthEven(parameters);

            let returnType: string = this.context.convertCommon("type", parameters[2]),
                declaration: string = "",
                output: CommandResult[];

            if (this.language.properties.functions.explicitReturns && !this.language.properties.functions.returnTypeAfterName) {
                declaration += returnType;
            }

            declaration += this.language.properties.functions.defineStartLeft;
            declaration += parameters[1] + "(";

            if (parameters.length > 3) {
                declaration += this.generateParameterVariable(parameters, 3);

                for (let i: number = 5; i < parameters.length; i += 2) {
                    declaration += ", ";
                    declaration += this.generateParameterVariable(parameters, i);
                }
            }

            declaration += ")";

            if (this.language.properties.functions.explicitReturns && this.language.properties.functions.returnTypeAfterName) {
                declaration += this.language.properties.functions.returnTypeMarker;
                declaration += returnType;
            }

            output = [new CommandResult(declaration, 0)];
            this.addLineEnder(output, this.language.properties.functions.defineStartRight, 1);

            return output;
        }

        /**
         * Generates a string for a parameter.
         * 
         * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
         * @param i   An index in the parameters of a parameterName.
         * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
         */
        private generateParameterVariable(parameters: string[], i: number): string {
            if (!this.language.properties.variables.declarationRequired) {
                return parameters[i];
            }

            let parameterName: string = parameters[i];
            let parameterType: string = this.context.convertCommon("type", parameters[i + 1]);

            return this.context.convertParsed(["variable inline", parameterName, parameterType])[0].text;
        }
    }
}
