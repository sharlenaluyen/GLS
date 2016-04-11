/// <reference path="Parameter.ts" />
/// <reference path="SingleParameter.ts" />

namespace GLS.Commands.Parameters {
    "use strict";

    /**
     * Some number of repeating parameters.
     */
    export class RepeatingParameters extends Parameter {
        /**
         * Parameters contained inside.
         */
        public parameters: Parameter[];
    }
}
