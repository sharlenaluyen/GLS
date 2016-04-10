/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="Command.ts" />
/// <reference path="NativeCallCommand.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a list push statement.
     */
    export class ListPushCommand extends NativeCallCommand {
        /**
         * @returns Metadata on how to perform the native call. 
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties {
            return this.language.properties.lists.push;
        }
    }
}
