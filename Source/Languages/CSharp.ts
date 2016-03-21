/// <reference path="CLikeLanguage.ts" />
/// <reference path="Properties/ArrayProperties.ts" />
/// <reference path="Properties/BooleanProperties.ts" />
/// <reference path="Properties/ClassProperties.ts" />
/// <reference path="Properties/ClassGenericProperties.ts" />
/// <reference path="Properties/ClassMemberProperties.ts" />
/// <reference path="Properties/CommentProperties.ts" />
/// <reference path="Properties/ConditionalProperties.ts" />
/// <reference path="Properties/DictionaryProperties.ts" />
/// <reference path="Properties/ExceptionProperties.ts" />
/// <reference path="Properties/FunctionProperties.ts" />
/// <reference path="Properties/GeneralProperties.ts" />
/// <reference path="Properties/LambdaProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for the C# language.
     */
    export class CSharp extends CLikeLanguage {
        /**
         * @returns Metadata on arrays.
         */
        protected generateArrayProperties(): Properties.ArrayProperties {
            let arrays: Properties.ArrayProperties = new Properties.ArrayProperties();

            arrays.className = "List";
            arrays.initializeAsNew = true;
            arrays.initializeByType = true;

            return arrays;
        }

        /**
         * @returns Metadata on booleans.
         */
        protected generateBooleanProperties(): Properties.BooleanProperties {
            let booleans: Properties.BooleanProperties = new Properties.BooleanProperties();

            booleans.className = "bool";

            return booleans;
        }

        /**
         * @returns Metadata on classes.
         */
        protected generateClassProperties(): Properties.ClassProperties {
            let classes: Properties.ClassProperties = super.generateClassProperties();

            classes.aliases = {
                "dictionary": "Dictionary",
                "number": "float"
            };
            classes.constructorAsClassName = true;
            classes.defineInheritanceLeft = " : ";

            return classes;
        }

        /**
         * @returns Metadata on class members.
         */
        protected generateClassGenericProperties(): Properties.ClassGenericProperties {
            let generics: Properties.ClassGenericProperties = new Properties.ClassGenericProperties();

            generics.left = "<";
            generics.middle = ", ";
            generics.right = ">";

            return generics;
        }

        /**
         * Generates metadata on comments.
         */
        protected generateCommentProperties(): Properties.CommentProperties {
            let comments: Properties.CommentProperties = super.generateCommentProperties();

            comments.docAsXml = true;
            comments.docEnd = "";
            comments.docLineEnd = "";
            comments.docStart = "";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "summary",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "parameter": "name"
            };
            comments.docLineStart = "/// ";

            return comments;
        }

        /**
         * @returns Metadata on dictionaries.
         */
        protected generateDictionaryProperties(): Properties.DictionaryProperties {
            let dictionaries: Properties.DictionaryProperties = new Properties.DictionaryProperties();

            dictionaries.className = "Dictionary";
            dictionaries.initializeStart = "{";
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairLeft = "{ ";
            dictionaries.initializePairMiddle = ", ";
            dictionaries.initializePairRight = "}";
            dictionaries.keyChecker = "ContainsKey";

            return dictionaries;
        }

        /**
         * @returns Metadata on exceptions.
         */
        protected generateExceptionProperties(): Properties.ExceptionProperties {
            let exceptions: Properties.ExceptionProperties = super.generateExceptionProperties();

            exceptions.className = "Error";

            return exceptions;
        }

        /**
         * @returns General metadata.
         */
        protected generateGeneralProperties(): Properties.GeneralProperties {
            let general: Properties.GeneralProperties = new Properties.GeneralProperties();

            general.name = "C#";
            general.extension = ".cs";

            return general;
        }

        /**
         * @returns Metadata on loops.
         */
        protected generateLoopProperties(): Properties.LoopProperties {
            let loops: Properties.LoopProperties = new Properties.LoopProperties();

            loops.forEachLeft = "foreach (";
            loops.forEachMiddle = " in ";
            loops.forEachRight = ") {";

            return loops;
        }

        /**
         * @returns Metadata on numbers.
         */
        protected generateNumberProperties(): Properties.NumberProperties {
            let numbers: Properties.NumberProperties = new Properties.NumberProperties();

            numbers.className = "float";

            return numbers;
        }

        /**
         * @returns Metadata on strings.
         */
        protected generateStringProperties(): Properties.StringProperties {
            let strings: Properties.StringProperties = new Properties.StringProperties();

            strings.className = "string";

            return strings;
        }

        /**
         * @returns Metadata on variables.
         */
        protected generateVariableProperties(): Properties.VariableProperties {
            let variables: Properties.VariableProperties = new Properties.VariableProperties();

            variables.aliases = {
                "infinity": "float.PositiveInfinity"
            };
            variables.castLeft = "(";
            variables.castRight = ")";
            variables.declaration = "";
            variables.explicitTypes = true;
            variables.null = "null";

            return variables;
        }
    }
}
