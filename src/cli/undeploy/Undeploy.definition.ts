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

import { ICommandDefinition } from "@brightside/imperative";
import { UndeployBundleDefinition } from "./bundle/UndeployBundle.definition";
/**
 * Imperative command to "undeploy" a Bundle, etc.
 *
 */
const UndeployDefinition: ICommandDefinition = {
    name: "undeploy",
    aliases: ["u", "udep"],
    summary: "Undeploy a CICS bundle from a CPSM managed (group of) CICS region(s)",
    description: "Undeploy a CICS bundle from a CPSM managed set of CICS regions. " +
                 "A BUNDLE resource is made UNAVAILABLE, it is then DISABLED and " +
                 "DISCARDED from the target CICSplex and scope.",
    type: "group",
    children: [UndeployBundleDefinition]
};

export = UndeployDefinition;
