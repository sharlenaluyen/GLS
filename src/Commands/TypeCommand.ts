import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for parsing a language's name for a type.
 */
export class TypeCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("type", "A type to parse.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return TypeCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return LineResults.newSingleLine(this.convertType(parameters[1]), false);
    }

    /**
     * Converts a raw type name into the language's equivalent.
     * 
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     */
    public convertType(typeNameRaw: string): string {
        let typeName: string = typeNameRaw;

        if (this.language.properties.classes.aliases.hasOwnProperty(typeName)) {
            typeName = this.language.properties.classes.aliases[typeName];
        }

        if (this.typeContainsArray(typeNameRaw)) {
            return this.convertArrayType(typeNameRaw);
        }

        if (this.typeContainsGeneric(typeNameRaw)) {
            return this.convertGenericType(typeNameRaw);
        }

        return typeName;
    }

    /**
     * Converts a raw type name with array notation into the language's equivalent.
     * 
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     */
    private convertArrayType(typeNameRaw: string): string {
        let bracketIndex: number = typeNameRaw.indexOf("[");
        let typeName: string = this.convertType(typeNameRaw.substring(0, bracketIndex));

        return typeName + typeNameRaw.substring(bracketIndex);
    }

    /**
     * Converts a raw type name with array notation into the language's equivalent.
     * 
     * @param typeNameRaw   A raw type to convert.
     * @returns The equivalent converted type name.
     * @todo Support multiple generics (commas inside the <>s).
     */
    private convertGenericType(typeNameRaw: string): string {
        let bracketStartIndex: number = typeNameRaw.indexOf("<");
        let containerTypeName: string = this.convertType(typeNameRaw.substring(0, bracketStartIndex));

        if (!this.language.properties.classes.generics.used) {
            return this.convertType(containerTypeName);
        }

        let bracketEndIndex: number = typeNameRaw.lastIndexOf(">");
        let genericTypeName: string = this.convertType(typeNameRaw.substring(bracketStartIndex + 1, bracketEndIndex));
        let output: string = containerTypeName;

        output += this.language.properties.classes.generics.left;
        output += genericTypeName;
        output += this.language.properties.classes.generics.right;

        return output;
    }

    /**
     * @param typeNameRaw   A name of a type.
     * @returns Whether the type name includes Array notation.
     */
    private typeContainsArray(typeNameRaw: string): boolean {
        return typeNameRaw.indexOf("[]") !== -1;
    }

    /**
     * @param typeNameRaw   A name of a type.
     * @returns Whether the type name includes Array notation.
     */
    private typeContainsGeneric(typeNameRaw: string): boolean {
        return typeNameRaw.indexOf("<") !== -1;
    }
}
