import { NativeCallProperties } from "../Properties/NativeCallProperties";

/**
 * Metadata on a language's math.
 */
export class MathProperties {
    /**
     * How to retrieve the absolute value of a number.
     */
    public absolute: NativeCallProperties;

    /**
     * Any imports native math commands require.
     */
    public requiredImports: { [i: string]: string[] };

    /**
     * The name of the math global or namespace.
     */
    public mathName: string;
}
