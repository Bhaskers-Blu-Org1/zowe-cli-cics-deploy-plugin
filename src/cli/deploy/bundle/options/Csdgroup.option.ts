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

import { ICommandOptionDefinition } from "@brightside/imperative";

const MAX_LENGTH = 8;

/**
 * Imperative option for the "csdgroup" parameter
 *
 */
export const CsdgroupOption: ICommandOptionDefinition = {
    name: "csdgroup",
    aliases: ["cg"],
    type: "string",
    stringLengthRange: [1, MAX_LENGTH],
    conflictsWith: [ "cics-deploy-profile" ],
    description: "Specifies the CSD group (up to 8 characters) to add the bundle resource to. " +
                 "The bundle resource is defined in the CSD of each CICS system that is specified " +
                 "by the --scope option. The --csdgroup and --resgroup options are mutually exclusive, " +
                 "one of them must be set if --scope is specified."
};

