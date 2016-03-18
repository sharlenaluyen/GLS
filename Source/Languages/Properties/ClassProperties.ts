/// <reference path="ClassGenericProperties.ts" />
/// <reference path="ClassMemberProperties.ts" />

namespace GLS.Languages.Properties {
    "use strict";

    /**
     * Metadata on a language's classes.
     */
    export class ClassProperties {
        /**
         * Aliases of types, from raw GLS syntax to this language's equivalents.
         */
        aliases: { [i: string]: string };

        /**
         * Whether making a new instance is done via a static method, rather than new.
         */
        constructorAsStatic: boolean;
        
        /**
         * Whether constructors are named the same as their class.
         */
        constructorAsClassName: boolean;

        /**
         * The name of the constructor method, if not the class name.
         */
        constructorName: string;

        /**
         * Characters before an inherited class definition.
         */
        defineInheritanceLeft: string;

        /**
         * Characters after an inherited class definition.
         */
        defineInheritanceRight: string;

        /**
         * The last line of a class definition.
         */
        defineEnd: string;

        /**
         * How to start the first line of a class definition.
         */
        defineStartLeft: string;

        /**
         * How to end the first line of a class definition.
         */
        defineStartRight: string;

        /**
         * Metadata on generic (templated) types.
         */
        generics: ClassGenericProperties;

        /**
         * Metadata on class member variables and functions.
         */
        members: ClassMemberProperties;

        /**
         * How to start declaring a new instance of a class, such as "new ".
         */
        newStart: string;

        /**
         * The keyword for a static class or member.
         */
        staticLabel: string;

        /**
         * The keyword used for "this".
         */
        this: string;
    }
}
