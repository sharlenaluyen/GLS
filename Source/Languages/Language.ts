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
/// <reference path="Properties/LanguageProperties.ts" />
/// <reference path="Properties/LoopProperties.ts" />
/// <reference path="Properties/NumberProperties.ts" />
/// <reference path="Properties/OperatorProperties.ts" />
/// <reference path="Properties/StringProperties.ts" />
/// <reference path="Properties/StyleProperties.ts" />
/// <reference path="Properties/VariableProperties.ts" />

namespace GLS.Languages {
    "use strict";

    /**
     * A summary of information for a single language.
     */
    export abstract class Language {
        /**
         * Metadata about the language syntax.
         */
        public /* readonly */ properties: Properties.LanguageProperties;

        /**
         * Initializes a new instance of the LanguageProperties class.
         */
        constructor() {
            this.properties = new Properties.LanguageProperties();
            this.properties.arrays = this.generateArrayProperties();
            this.properties.booleans = this.generateBooleanProperties();
            this.properties.classes = this.generateClassProperties();
            this.properties.classes.generics = this.generateClassGenericProperties();
            this.properties.classes.members = this.generateClassMemberProperties();
            this.properties.comments = this.generateCommentProperties();
            this.properties.conditionals = this.generateConditionalProperties();
            this.properties.dictionaries = this.generateDictionaryProperties();
            this.properties.exceptions = this.generateExceptionProperties();
            this.properties.functions = this.generateFunctionProperties();
            this.properties.general = this.generateGeneralProperties();
            this.properties.lambdas = this.generateLambdaProperties();
            this.properties.loops = this.generateLoopProperties();
            this.properties.numbers = this.generateNumberProperties();
            this.properties.operators = this.generateOperatorProperties();
            this.properties.strings = this.generateStringProperties();
            this.properties.style = this.generateStyleProperties();
            this.properties.variables = this.generateVariableProperties();

            this.properties.operators.generateAliases();
        }

        /**
         * Generates metadata on arrays.
         */
        protected abstract generateArrayProperties(): Properties.ArrayProperties;

        /**
         * Generates metadata on booleans.
         */
        protected abstract generateBooleanProperties(): Properties.BooleanProperties;

        /**
         * Generates metadata on classes.
         */
        protected abstract generateClassProperties(): Properties.ClassProperties;

        /**
         * Generates metadata on class generics.
         */
        protected abstract generateClassGenericProperties(): Properties.ClassGenericProperties;

        /**
         * Generates metadata on class members.
         */
        protected abstract generateClassMemberProperties(): Properties.ClassMemberProperties;

        /**
         * Generates metadata on comments.
         */
        protected abstract generateCommentProperties(): Properties.CommentProperties;

        /**
         * Generates metadata on conditional.
         */
        protected abstract generateConditionalProperties(): Properties.ConditionalProperties;

        /**
         * Generates metadata on dictionaries.
         */
        protected abstract generateDictionaryProperties(): Properties.DictionaryProperties;

        /**
         * Generates metadata on exceptions.
         */
        protected abstract generateExceptionProperties(): Properties.ExceptionProperties;

        /**
         * Generates metadata on functions.
         */
        protected abstract generateFunctionProperties(): Properties.FunctionProperties;

        /**
         * Generates metadata on general 
         */
        protected abstract generateGeneralProperties(): Properties.GeneralProperties;

        /**
         * Generates metadata on lambdas.
         */
        protected abstract generateLambdaProperties(): Properties.LambdaProperties;

        /**
         * Generates metadata on loops.
         */
        protected abstract generateLoopProperties(): Properties.LoopProperties;

        /**
         * Generates metadata on numbers.
         */
        protected abstract generateNumberProperties(): Properties.NumberProperties;

        /**
         * Generates metadata on operators.
         */
        protected abstract generateOperatorProperties(): Properties.OperatorProperties;

        /**
         * Generates metadata on strings.
         */
        protected abstract generateStringProperties(): Properties.StringProperties;

        /**
         * Generates metadata on style.
         */
        protected abstract generateStyleProperties(): Properties.StyleProperties;

        /**
         * Generates metadata on variables.
         */
        protected abstract generateVariableProperties(): Properties.VariableProperties;
    }
}
