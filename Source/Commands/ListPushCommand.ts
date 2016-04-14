/// <reference path="../Languages/Properties/NativeCallProperties.ts" />
/// <reference path="NativeCallCommand.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for a list push statement.
     */
    export class ListPushCommand extends NativeCallCommand {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("name", "The name of the list.", true),
            new Parameters.SingleParameter("value", "An item to push into the list.", true),
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return ListPushCommand.parameters;
        }

        /**
         * @returns Metadata on how to perform the native call. 
         */
        protected retrieveNativeCallProperties(): Languages.Properties.NativeCallProperties {
            return this.language.properties.lists.push;
        }
    }
}
