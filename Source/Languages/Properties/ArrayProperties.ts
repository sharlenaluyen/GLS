namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's arrays.
     */
    export class ArrayProperties {
        /**
         * The name of the array class.
         */
        public className: string;

        /**
         * Whether arrays are initialized as class instances using "new".
         */
        public initializeAsNew: boolean;

        /**
         * Whether initializing a new array requires specifying its type.
         */
        public initializeByType: boolean;

        /**
         * Whether initialization is done as a static method of the array class.
         */
        public initializeViaStatic: boolean;

        /**
         * The kwyword used for retrieving string length.
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
