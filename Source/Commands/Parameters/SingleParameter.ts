/// <reference path="Parameter.ts" />
/// <reference path="RepeatingParameters.ts" />

namespace GLS.Commands.Parameters {
    "use strict";

    /**
     * A single named parameter.
     */
    export class SingleParameter extends Parameter {
        /**
         * The name of this parameter.
         */
        public name: string;

        /**
         * Whether this must be provided.
         */
        public required: boolean;
    }
}
