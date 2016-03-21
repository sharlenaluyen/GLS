/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for parsing a language's name for a type.
     */
    export class TypeCommand extends Command {
        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         * @remarks Usage: (type).
         */
        render(parameters: string[]): CommandResult[] {
            this.requireParametersLength(parameters, 1);

            return [new CommandResult(this.convertType(parameters[1]), 0)];
        }

        /**
         * Converts a raw type name into the language's equivalent.
         * 
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         */
        convertType(typeNameRaw: string): string {
            let typeName: string = typeNameRaw;

            if (this.language.properties.classes.aliases.hasOwnProperty(typeName)) {
                typeName = this.language.properties.classes.aliases[typeName];
            }

            if (this.typeContainsArray(typeNameRaw)) {
                return this.convertTypeWithArray(typeNameRaw);
            }

            return typeName;
        }

        /**
         * Converts a raw type name with array notation into the language's equivalent.
         * 
         * @param typeNameRaw   A raw type to convert.
         * @returns The equivalent converted type name.
         */
        private convertTypeWithArray(typeNameRaw: string): string {
            let bracketIndex: number = typeNameRaw.indexOf("["),
                typeName: string = this.convertType(typeNameRaw.substring(0, bracketIndex));

            if (!this.language.properties.arrays.initializeByType) {
                return typeName + "[]";
            }

            let result = "";
            result += this.language.properties.arrays.className;
            result += this.language.properties.classes.generics.left;
            result += typeName;
            result += this.language.properties.classes.generics.right;
            return result;
        }

        /**
         * @param typeNameRaw   A name of a type.
         * @returns Whether the type name includes Array notation.
         */
        private typeContainsArray(typeNameRaw: string): boolean {
            return typeNameRaw.indexOf("[") !== -1;
        }
    }
}
