namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's functions.
     */
    export class FunctionProperties {
        /**
         * A prefix before defining a function, such as "def ".
         */
        defineStartLeft: string;

        /**
         * A suffix after defining a function, such as ") {".
         */
        defineStartRight: string;

        /**
         * A line for after a function's definition.
         */
        defineEnd: string;

        /**
         * Whether return types should be explicitly stated.
         */
        explicitReturns: boolean;

        /**
         * Whether return types should be after the name, rather than before.
         */
        returnTypeAfterName: boolean;

        /**
         * A label between function name and its type, if type is after the name.
         */
        returnTypeMarker: string;
    }
}
