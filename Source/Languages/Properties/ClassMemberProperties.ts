namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's class members.
     */
    export class ClassMemberProperties {
        /**
         * Whether member functions need to be scope-bound to their callers.
         */
        functionGetBound: boolean;

        /**
         * How to start getting a member function, if bound.
         */
        functionGetLeft: string;

        /**
         * How to end getting a member function if bound, such as ".bind".
         */
        functionGetRight: string;

        /**
         * How to start declaring a member function.
         */
        functionStart: string;

        /**
         * Whether member functions explicitly take in a "this"/"self".
         */
        functionsTakeThis: boolean;

        /**
         * Whether the class supports privacy (public/protected/private).
         */
        privacy: boolean;

        /**
         * The keyword to declare a member private.
         */
        private: string;

        /**
         * The keyword to declare a member protected.
         */
        protected: string;

        /**
         * The keyword to declare a member public.
         */
        public: string;

        /**
         * How to mark a member as static, such as "static " or "@staticmethod\n".
         */
        staticDecorator: string;

        /**
         * How to start declaring a member variable.
         */
        variableStart: string;

        /**
         * A default decorator after member variables, such as "" or " = None".
         */
        variableDefault: string;
    }
}
