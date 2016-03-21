/// <reference path="Language.ts" />
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
     * A summary of information for a C-like language.
     */
    export abstract class CLikeLanguage extends Language {
        /**
         * Generates metadata on classes.
         */
        protected generateClassProperties(): Properties.ClassProperties {
            let classes: Properties.ClassProperties = new Properties.ClassProperties();

            classes.defineInheritanceRight = "";
            classes.defineEnd = "}";
            classes.defineStartLeft = "class ";
            classes.defineStartRight = " {";
            classes.newStart = "new ";
            classes.staticLabel = "static ";
            classes.this = "this";

            return classes;
        }

        /**
         * Generates metadata on class generics.
         */
        protected generateClassGenericProperties(): Properties.ClassGenericProperties {
            let generics: Properties.ClassGenericProperties = new Properties.ClassGenericProperties();

            generics.left = "<";
            generics.middle = ", ";
            generics.right = ">";

            return generics;
        }

        /**
         * Generates metadata on class members.
         */
        protected generateClassMemberProperties(): Properties.ClassMemberProperties {
            let members: Properties.ClassMemberProperties = new Properties.ClassMemberProperties();

            members.functionStart = "";
            members.privacy = true;
            members.private = "private ";
            members.protected = "protected ";
            members.public = "public ";
            members.staticDecorator = "static ";
            members.variableStart = "";
            members.variableDefault = "";

            return members;
        }

        /**
         * Generates metadata on comments.
         */
        protected generateCommentProperties(): Properties.CommentProperties {
            let comments: Properties.CommentProperties = new Properties.CommentProperties();

            comments.blockEnd = "*/";
            comments.blockLineLeft = "";
            comments.blockLineRight = "";
            comments.blockStart = "/*";
            comments.lineLeft = "// ";
            comments.lineRight = "";

            return comments;
        }

        /**
         * Generates metadata on conditional.
         */
        protected generateConditionalProperties(): Properties.ConditionalProperties {
            let conditionals: Properties.ConditionalProperties = new Properties.ConditionalProperties();

            conditionals.continueLeft = "} (";
            conditionals.continueRight = " {";
            conditionals.elif = "else if";
            conditionals.else = "else";
            conditionals.if = "if";
            conditionals.startLeft = " (";

            return conditionals;
        }

        /**
         * Generates metadata on exceptions.
         */
        protected generateExceptionProperties(): Properties.ExceptionProperties {
            let exceptions: Properties.ExceptionProperties = new Properties.ExceptionProperties();

            exceptions.catch = "catch";
            exceptions.finally = "finally";
            exceptions.throw = "throw";
            exceptions.try = "try";
            exceptions.variablePrefix = "";

            return exceptions;
        }

        /**
         * Generates metadata on functions.
         */
        protected generateFunctionProperties(): Properties.FunctionProperties {
            let functions: Properties.FunctionProperties = new Properties.FunctionProperties();

            functions.defineStartLeft = "";
            functions.defineStartRight = ") {";
            functions.defineEnd = "}";
            functions.explicitReturns = true;

            return functions;
        }

        /**
         * Generates metadata on lambdas.
         */
        protected generateLambdaProperties(): Properties.LambdaProperties {
            let lambdas: Properties.LambdaProperties = new Properties.LambdaProperties();

            lambdas.startLeft = "(";
            lambdas.startMiddle = ") => ";
            lambdas.startRight = "";

            return lambdas;
        }

        /**
         * Generates metadata on loops.
         */
        protected generateLoopProperties(): Properties.LoopProperties {
            let loops: Properties.LoopProperties = new Properties.LoopProperties();

            loops.break = "break";
            loops.continue = "continue";
            loops.forEachRight = ") {";

            return loops;
        }

        /**
         * Generates metadata on operators.
         */
        protected generateOperatorProperties(): Properties.OperatorProperties {
            let operators: Properties.OperatorProperties = new Properties.OperatorProperties();

            operators.and = "&&";
            operators.decreaseBy = "-=";
            operators.divide = "/";
            operators.divideBy = "/=";
            operators.equals = "=";
            operators.equalTo = "==";
            operators.greaterThan = ">";
            operators.greaterThanOrEqualTo = ">=";
            operators.increaseBy = "+=";
            operators.lessThan = "<";
            operators.lessThanOrEqualTo = "<=";
            operators.minus = "-";
            operators.mod = "%";
            operators.multiplyBy = "*=";
            operators.not = "!";
            operators.notEqualTo = "!=";
            operators.or = "||";
            operators.plus = "+";
            operators.times = "*";

            return operators;
        }

        /**
         * Generates metadata on style.
         */
        protected generateStyleProperties(): Properties.StyleProperties {
            let style: Properties.StyleProperties = new Properties.StyleProperties();

            style.semicolon = ";";

            return style;
        }
    }
}
