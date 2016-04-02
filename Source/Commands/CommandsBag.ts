/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="CommandResult.ts" />

/// <reference path="ArrayInitializeCommand.ts" />
/// <reference path="ArrayLengthCommand.ts" />
/// <reference path="BreakCommand.ts" />
/// <reference path="CommentBlockCommand.ts" />
/// <reference path="CommentBlockEndCommand.ts" />
/// <reference path="CommentBlockStartCommand.ts" />
/// <reference path="CommentDocEndCommand.ts" />
/// <reference path="CommentDocStartCommand.ts" />
/// <reference path="CommentDocTagCommand.ts" />
/// <reference path="CommentLineCommand.ts" />
/// <reference path="ContinueCommand.ts" />
/// <reference path="ConcatenateCommand.ts" />
/// <reference path="ElseIfStartCommand.ts" />
/// <reference path="ElseStartCommand.ts" />
/// <reference path="FileEndCommand.ts" />
/// <reference path="FileStartCommand.ts" />
/// <reference path="ForEachEndCommand.ts" />
/// <reference path="ForEachKeyStartCommand.ts" />
/// <reference path="ForEachPairStartCommand.ts" />
/// <reference path="ForNumbersStartCommand.ts" />
/// <reference path="ForNumbersEndCommand.ts" />
/// <reference path="FunctionEndCommand.ts" />
/// <reference path="FunctionStartCommand.ts" />
/// <reference path="IfEndCommand.ts" />
/// <reference path="IfStartCommand.ts" />
/// <reference path="IndexCommand.ts" />
/// <reference path="ListInitializeCommand.ts" />
/// <reference path="ListLengthCommand.ts" />
/// <reference path="ListPushCommand.ts" />
/// <reference path="LiteralCommand.ts" />
/// <reference path="NotCommand.ts" />
/// <reference path="OperationCommand.ts" />
/// <reference path="OperatorCommand.ts" />
/// <reference path="ReturnCommand.ts" />
/// <reference path="ThisCommand.ts" />
/// <reference path="TypeCommand.ts" />
/// <reference path="ValueCommand.ts" />
/// <reference path="VariableCommand.ts" />
/// <reference path="VariableInlineCommand.ts" />
/// <reference path="WhileEndCommand.ts" />
/// <reference path="WhileStartCommand.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A container for globally known commands.
     */
    export class CommandsBag {
        /**
         * Globally known commands, keyed by their GLS alias.
         */
        private commands: { [i: string]: Command };

        /**
         * Initializes a new instance of the CommandsBag class.
         * 
         * @param context   The driving context for conversions.
         */
        constructor(context: ConversionContext) {
            this.commands = {
                "array initialize": new ArrayInitializeCommand(context),
                "array length": new ArrayLengthCommand(context),
                "break": new BreakCommand(context),
                "comment block": new CommentBlockCommand(context),
                "comment block end": new CommentBlockEndCommand(context),
                "comment block start": new CommentBlockStartCommand(context),
                "comment doc end": new CommentDocEndCommand(context),
                "comment doc start": new CommentDocStartCommand(context),
                "comment doc tag": new CommentDocTagCommand(context),
                "comment line": new CommentLineCommand(context),
                "concatenate": new ConcatenateCommand(context),
                "continue": new ContinueCommand(context),
                "else if start": new ElseIfStartCommand(context),
                "else start": new ElseStartCommand(context),
                "file end": new FileEndCommand(context),
                "file start": new FileStartCommand(context),
                "for each end": new ForEachEndCommand(context),
                "for each key start": new ForEachKeyStartCommand(context),
                "for each pair start": new ForEachPairStartCommand(context),
                "for numbers start": new ForNumbersStartCommand(context),
                "for numbers end": new ForNumbersEndCommand(context),
                "function start": new FunctionStartCommand(context),
                "function end": new FunctionEndCommand(context),
                "if end": new IfEndCommand(context),
                "if start": new IfStartCommand(context),
                "index": new IndexCommand(context),
                "list initialize": new ListInitializeCommand(context),
                "list length": new ListLengthCommand(context),
                "list push": new ListPushCommand(context),
                "literal": new LiteralCommand(context),
                "not": new NotCommand(context),
                "operation": new OperationCommand(context),
                "operator": new OperatorCommand(context),
                "return": new ReturnCommand(context),
                "this": new ThisCommand(context),
                "type": new TypeCommand(context),
                "value": new ValueCommand(context),
                "variable": new VariableCommand(context),
                "variable inline": new VariableInlineCommand(context),
                "while end": new WhileEndCommand(context),
                "while start": new WhileStartCommand(context)
            };
        }

        /**
         * Renders a command in a language.
         * 
         * @param language   The language to render the command in.
         * @param command   A command name, followed by parameters for it.
         * @returns Line(s) of code in the language.
         */
        renderCommand(parameters: string[]): CommandResult[] {
            if (!this.commands.hasOwnProperty(parameters[0])) {
                throw new Error("Unknown command requested: '" + parameters[0] + "'");
            }

            return this.commands[parameters[0]].render(parameters);
        }
    }
}
