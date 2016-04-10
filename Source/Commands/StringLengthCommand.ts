/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="Command.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a retrieving the length of an string.
     */
    export class StringLengthCommand extends NativeCallCommand {
        /**
         * @returns Metadata on how to perform the native call. 
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties {
            return this.language.properties.strings.length;
        }
    }
}
