/// <reference path="Parameter.ts" />
/// <reference path="SingleParameter.ts" />

namespace GLS.Commands.Parameters {
    "use strict";

    /**
     * Summary of parameter restrictions for a command.
     */
    export class Restrictions {
        /**
         * 
         */
        private minimum: number = 0;

        /**
         * 
         */
        private maximum: number = 0;

        /**
         * 
         */
        private intervals: number[] = [];

        /**
         * Initializes a new instance of the Parameter class.
         * 
         * @param descriptor   A plain-text description of the parameter.
         */
        constructor(parameters: Parameter[]) {
            for (let i: number = 0; i < parameters.length; i += 1) {
                let parameter: Parameter = parameters[i];

                if (parameter instanceof SingleParameter) {
                    this.addSingleParameter(parameter);
                    continue;
                }
                
                if (parameter instanceof RepeatingParameters) {
                    this.addRepeatingParameters(parameter);
                    continue;
                }
            }
        }

        /**
         * 
         * 
         * @remarks Having multiple intervals results in none being checked.
         * @todo Implement checking multiple intervals.
         */
        public checkValidity(inputs: string[]): void {
            let inputsLength: number = inputs.length - 1;

            if (inputsLength < this.minimum) {
                throw new Error(`Not enough parameters: expected ${this.minimum} but got ${inputs.length}.`);
            }

            if (inputsLength > this.maximum) {
                throw new Error(`Too many parameters: expected ${this.minimum} but got ${inputs.length}.`);
            }

            if (this.intervals.length !== 1) {
                return;
            }

            let remaining: number = inputsLength - this.minimum;
            if (remaining % this.intervals.length !== 0) {
                throw new Error(`Expected extra parameters to be a multiple of ${this.intervals[0]}, not ${inputs.length}.`);
            }
        }

        /**
         * 
         */
        private addSingleParameter(parameter: SingleParameter): void {
            if (parameter.required) {
                this.minimum += 1;
            }

            this.maximum += 1;
        }

        /**
         * 
         */
        private addRepeatingParameters(parameter: RepeatingParameters): void {
            this.intervals.push(parameter.parameters.length);
            this.maximum = Infinity;
        }
    }
}
