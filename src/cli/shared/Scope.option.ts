/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright IBM Corp, 2019
*
*/

import { ICommandOptionDefinition } from "@zowe/imperative";

const MAX_LENGTH = 8;

/**
 * Imperative option for the "scope" parameter
 *
 */
export const ScopeOption: ICommandOptionDefinition = {
    name: "scope",
    aliases: ["sc"],
    type: "string",
    stringLengthRange: [1, MAX_LENGTH],
    group: "cics-deploy Options",
    description: "Specifies the name of the CICS System, or CICS System Group " +
                 "(up to 8 characters) to target. " +
                 "Use this parameter if you have not set the --cics-deploy-profile option. " +
                 "For help on creating a profile issue the 'zowe profiles create cics-deploy --help' " +
                 "command."
};

