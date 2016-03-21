/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="CommandResult.ts" />

/// <reference path="ArrayInitializeCommand.ts" />
/// <reference path="CommentBlockCommand.ts" />
/// <reference path="CommentBlockEndCommand.ts" />
/// <reference path="CommentBlockStartCommand.ts" />
/// <reference path="CommentDocEndCommand.ts" />
/// <reference path="CommentDocStartCommand.ts" />
/// <reference path="CommentDocTagCommand.ts" />
/// <reference path="CommentLineCommand.ts" />
/// <reference path="LiteralCommand.ts" />
/// <reference path="OperatorCommand.ts" />
/// <reference path="TypeCommand.ts" />
/// <reference path="VariableCommand.ts" />
/// <reference path="VariableInlineCommand.ts" />

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
                "comment block": new CommentBlockCommand(context),
                "comment block end": new CommentBlockEndCommand(context),
                "comment block start": new CommentBlockStartCommand(context),
                "comment doc end": new CommentDocEndCommand(context),
                "comment doc start": new CommentDocStartCommand(context),
                "comment doc tag": new CommentDocTagCommand(context),
                "comment line": new CommentLineCommand(context),
                "literal": new LiteralCommand(context),
                "operator": new OperatorCommand(context),
                "type": new TypeCommand(context),
                "value": new ValueCommand(context),
                "variable": new VariableCommand(context),
                "variable inline": new VariableInlineCommand(context)
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
                console.log("Parmaeters", parameters);
                throw new Error("Unknown command requested: '" + parameters[0] + "'");
            }

            return this.commands[parameters[0]].render(parameters);
        }
    }
}
