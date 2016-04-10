namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's Strings.
     */
    export class StringProperties {
        /**
         * The name of the string class.
         */
        public className: string;

        /**
         * The name of the concatenation operator.
         */
        public concatenate: string;

        /**
         * The keyword used for finding the index of a substring.
         */
        public index: string;

        /**
         * The keyword used for retrieving string length.
         */
        public length: string;

        /**
         * Whether length is a function, rather then a member variable.
         */
        public lengthAsFunction: boolean;

        /**
         * Whether length is a static function, rather then a member variable.
         */
        public lengthAsStatic: boolean;
    }
}
