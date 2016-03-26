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
        protected generateArrayProperties(arrays: Properties.ArrayProperties): void {
            arrays.className = "List";
            arrays.initializeAsNew = true;
            arrays.initializeByType = true;
        }

        /**
         * @returns Metadata on booleans.
         */
        protected generateBooleanProperties(booleans: Properties.BooleanProperties): void {
            booleans.className = "bool";
        }

        /**
         * @returns Metadata on classes.
         */
        protected generateClassProperties(classes: Properties.ClassProperties): void {
            super.generateClassProperties(classes);

            classes.aliases = {
                "dictionary": "Dictionary",
                "number": "float"
            };
            classes.constructorAsClassName = true;
            classes.defineInheritanceLeft = " : ";
        }

        /**
         * @returns Metadata on class members.
         */
        protected generateClassGenericProperties(generics: Properties.ClassGenericProperties): void {
            generics.left = "<";
            generics.middle = ", ";
            generics.right = ">";
        }

        /**
         * Generates metadata on comments.
         */
        protected generateCommentProperties(comments: Properties.CommentProperties): void {
            super.generateCommentProperties(comments);

            comments.docAsXml = true;
            comments.docEnd = "";
            comments.docLineEnd = "";
            comments.docLineStart = "/// ";
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
        }

        /**
         * @returns Metadata on dictionaries.
         */
        protected generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void {
            dictionaries.className = "Dictionary";
            dictionaries.initializeStart = "{";
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairLeft = "{ ";
            dictionaries.initializePairMiddle = ", ";
            dictionaries.initializePairRight = "}";
            dictionaries.keyChecker = "ContainsKey";
        }

        /**
         * @returns Metadata on exceptions.
         */
        protected generateExceptionProperties(exceptions: Properties.ExceptionProperties): void {
            exceptions.className = "Error";
        }

        /**
         * @returns General metadata.
         */
        protected generateGeneralProperties(general: Properties.GeneralProperties): void {
            general.name = "C#";
            general.extension = ".cs";
        }

        /**
         * @returns Metadata on loops.
         */
        protected generateLoopProperties(loops: Properties.LoopProperties): void {
            loops.forEachLeft = "foreach (";
            loops.forEachMiddle = " in ";
            loops.forEachRight = ") {";
        }

        /**
         * @returns Metadata on numbers.
         */
        protected generateNumberProperties(numbers: Properties.NumberProperties): void {
            numbers.className = "float";
        }

        /**
         * Generates metadata on output.
         * 
         * @param output   The property container for metadata on output.
         */
        protected generateOutputProperties(output: Properties.OutputProperties): void {
            output.print = "Console.WriteLine";
        }

        /**
         * @returns Metadata on strings.
         */
        protected generateStringProperties(strings: Properties.StringProperties): void {
            super.generateStringProperties(strings);

            strings.className = "string";
        }

        /**
         * @returns Metadata on variables.
         */
        protected generateVariableProperties(variables: Properties.VariableProperties): void {
            super.generateVariableProperties(variables);

            variables.aliases = {
                "infinity": "float.PositiveInfinity"
            };
            variables.castLeft = "(";
            variables.castRight = ")";
            variables.declaration = "";
            variables.explicitTypes = true;
            variables.null = "null";
        }
    }
}
