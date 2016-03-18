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
     * A summary of information for the TypeScript language.
     */
    export class TypeScript extends CLikeLanguage {
        /**
         * @returns Metadata on arrays.
         */
        protected generateArrayProperties(): Properties.ArrayProperties {
            let arrays: Properties.ArrayProperties = new Properties.ArrayProperties();

            arrays.className = "Array";

            return arrays;
        }

        /**
         * @returns Metadata on booleans.
         */
        protected generateBooleanProperties(): Properties.BooleanProperties {
            let booleans: Properties.BooleanProperties = new Properties.BooleanProperties();

            booleans.className = "boolean";

            return booleans;
        }

        /**
         * @returns Metadata on classes.
         */
        protected generateClassProperties(): Properties.ClassProperties {
            let classes: Properties.ClassProperties = super.generateClassProperties();

            classes.aliases = {
                "dictionary": "object"
            };
            classes.constructorName = "constructor";
            classes.defineInheritanceLeft = " extends ";

            return classes;
        }

        /**
         * @returns Metadata on class members.
         */
        protected generateClassMemberProperties(): Properties.ClassMemberProperties {
            let members: Properties.ClassMemberProperties = new Properties.ClassMemberProperties();

            members.functionGetBound = true;
            members.functionGetLeft = ".bind(";
            members.functionGetRight = ")";

            return members;
        }

        /**
         * Generates metadata on comments.
         */
        protected generateCommentProperties(): Properties.CommentProperties {
            let comments: Properties.CommentProperties = super.generateCommentProperties();

            comments.docEnd = " */";
            comments.docLineEnd = "";
            comments.docLineStart = " * ";
            comments.docTagAliases = {
                "note": "remarks",
                "parameter": "param",
                "returns": "returns",
                "summary": "",
                "todo": "todo"
            };
            comments.docTagsWithParameters = {
                "summary": "\0",
                "parameter": ""
            };
            comments.docTagStart = "@";
            comments.docTagEnd = " ";
            comments.docStart = "/**";

            return comments;
        }

        /**
         * @returns Metadata on dictionaries.
         */
        protected generateDictionaryProperties(): Properties.DictionaryProperties {
            let dictionaries: Properties.DictionaryProperties = new Properties.DictionaryProperties();

            dictionaries.className = "Object";
            dictionaries.initializeStart = "{";
            dictionaries.initializeEnd = "}";
            dictionaries.initializePairLeft = "\"";
            dictionaries.initializePairMiddle = "\": ";
            dictionaries.initializePairRight = "";
            dictionaries.keyChecker = "hasOwnProperty";

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
         * @returns Metadata on functions.
         */
        protected generateFunctionProperties(): Properties.FunctionProperties {
            let functions: Properties.FunctionProperties = super.generateFunctionProperties();

            functions.defineStartLeft = "function ";
            functions.returnTypeAfterName = true;
            functions.returnTypeMarker = ": ";

            return functions;
        }

        /**
         * @returns Metadata on general 
         */
        protected generateGeneralProperties(): Properties.GeneralProperties {
            let general: Properties.GeneralProperties = new Properties.GeneralProperties();

            general.name = "TypeScript";
            general.extension = ".ts";

            return general;
        }

        /**
         * @returns Metadata on loops.
         */
        protected generateLoopProperties(): Properties.LoopProperties {
            let loops: Properties.LoopProperties = new Properties.LoopProperties();

            loops.forEachLeft = "for (";
            loops.forEachMiddle = " in ";
            loops.forEachRight = ") {";

            return loops;
        }

        /**
         * @returns Metadata on numbers.
         */
        protected generateNumberProperties(): Properties.NumberProperties {
            let numbers: Properties.NumberProperties = new Properties.NumberProperties();

            numbers.className = "Number";

            return numbers;
        }

        /**
         * @returns Metadata on operators.
         */
        protected generateOperatorProperties(): Properties.OperatorProperties {
            let operators: Properties.OperatorProperties = super.generateOperatorProperties();

            operators.equalTo = "===";
            operators.notEqualTo = "!==";

            return operators;
        }

        /**
         * @returns Metadata on strings.
         */
        protected generateStringProperties(): Properties.StringProperties {
            let strings: Properties.StringProperties = new Properties.StringProperties();

            strings.className = "String";

            return strings;
        }

        /**
         * @returns Metadata on style.
         */
        protected generateStyleProperties(): Properties.StyleProperties {
            return new Properties.StyleProperties();
        }

        /**
         * @returns Metadata on variables.
         */
        protected generateVariableProperties(): Properties.VariableProperties {
            let variables: Properties.VariableProperties = new Properties.VariableProperties();

            variables.castLeft = "<";
            variables.castRight = ">";
            variables.declaration = "let ";
            variables.explicitTypes = true;
            variables.null = "undefined";
            variables.typesAfterName = true;
            variables.typeLeft = ": ";

            return variables;
        }
    }
}
