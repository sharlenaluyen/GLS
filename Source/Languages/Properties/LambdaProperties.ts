namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's lambdas.
     */
    export class LambdaProperties {
        /**
         * How to start a lambda.
         */
        startLeft: string;

        /**
         * A string between the lambda arguments and body.
         */
        startMiddle: string;

        /**
         * How to end a lambda.
         */
        startRight: string;

        /**
         * Whether type declarations should be in interface form.
         */
        typeAsInterface: boolean;

        /**
         * Whether lambda interfaces must be declared before usage.
         */
        typeRequired: boolean;

        /**
         * How to start the first line of a type declaration.
         */
        typeStartLeft: string;

        /**
         * How to end the first line of a type declaration.
         */
        typeStartRight: string;

        /**
         * How to start the middle line of a type declaration.
         */
        typeMiddleLeft: string;

        /**
         * How to end the middle line of a type declaration.
         */
        typeMiddleRight: string;

        /**
         * How to start the last line of a type declaration.
         */
        typeEndLeft: string;

        /**
         * How to end the last line of a type declaration.
         */
        typeEndRight: string;
    }
}
