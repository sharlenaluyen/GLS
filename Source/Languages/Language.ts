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
/// <reference path="Properties/OutputProperties.ts" />
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
         * Initializes a new instance of the Language class.
         */
        constructor() {
            this.properties = new Properties.LanguageProperties();
            this.generateArrayProperties(this.properties.arrays);
            this.generateBooleanProperties(this.properties.booleans);
            this.generateClassProperties(this.properties.classes);
            this.generateClassGenericProperties(this.properties.classes.generics);
            this.generateClassMemberProperties(this.properties.classes.members);
            this.generateCommentProperties(this.properties.comments);
            this.generateConditionalProperties(this.properties.conditionals);
            this.generateDictionaryProperties(this.properties.dictionaries);
            this.generateExceptionProperties(this.properties.exceptions);
            this.generateFunctionProperties(this.properties.functions);
            this.generateGeneralProperties(this.properties.general);
            this.generateLambdaProperties(this.properties.lambdas);
            this.generateLoopProperties(this.properties.loops);
            this.generateNumberProperties(this.properties.numbers);
            this.generateOperatorProperties(this.properties.operators);
            this.generateOutputProperties(this.properties.output);
            this.generateStringProperties(this.properties.strings);
            this.generateStyleProperties(this.properties.style);
            this.generateVariableProperties(this.properties.variables);

            this.properties.operators.generateAliases();
        }

        /**
         * Fills out metadata on arrays.
         */
        protected abstract generateArrayProperties(arrays: Properties.ArrayProperties): void;

        /**
         * Fills out metadata on booleans.
         */
        protected abstract generateBooleanProperties(booleans: Properties.BooleanProperties): void;

        /**
         * Fills out metadata on classes.
         */
        protected abstract generateClassProperties(classes: Properties.ClassProperties): void;

        /**
         * Fills out metadata on class generics.
         */
        protected abstract generateClassGenericProperties(generics: Properties.ClassGenericProperties): void;

        /**
         * Fills out metadata on class members.
         */
        protected abstract generateClassMemberProperties(members: Properties.ClassMemberProperties): void;

        /**
         * Fills out metadata on comments.
         */
        protected abstract generateCommentProperties(comments: Properties.CommentProperties): void;

        /**
         * Fills out metadata on conditional.
         */
        protected abstract generateConditionalProperties(conditionals: Properties.ConditionalProperties): void;

        /**
         * Fills out metadata on dictionaries.
         */
        protected abstract generateDictionaryProperties(dictionaries: Properties.DictionaryProperties): void;

        /**
         * Fills out metadata on exceptions.
         */
        protected abstract generateExceptionProperties(exceptions: Properties.ExceptionProperties): void;

        /**
         * Fills out metadata on functions.
         */
        protected abstract generateFunctionProperties(functions: Properties.FunctionProperties): void;

        /**
         * Fills out metadata on general properties.
         */
        protected abstract generateGeneralProperties(general: Properties.GeneralProperties): void;

        /**
         * Fills out metadata on lambdas.
         */
        protected abstract generateLambdaProperties(lambdas: Properties.LambdaProperties): void;

        /**
         * Fills out metadata on loops.
         */
        protected abstract generateLoopProperties(loops: Properties.LoopProperties): void;

        /**
         * Fills out metadata on numbers.
         */
        protected abstract generateNumberProperties(numbers: Properties.NumberProperties): void;

        /**
         * Fills out metadata on operators.
         */
        protected abstract generateOperatorProperties(operators: Properties.OperatorProperties): void;

        /**
         * Fills out metadata on output.
         */
        protected abstract generateOutputProperties(operators: Properties.OutputProperties): void;

        /**
         * Fills out metadata on strings.
         */
        protected abstract generateStringProperties(strings: Properties.StringProperties): void;

        /**
         * Fills out metadata on style.
         */
        protected abstract generateStyleProperties(style: Properties.StyleProperties): void;

        /**
         * Fills out metadata on variables.
         */
        protected abstract generateVariableProperties(variables: Properties.VariableProperties): void;
    }
}
