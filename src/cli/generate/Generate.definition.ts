/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright IBM, 2019
*
*/

import { ICommandDefinition } from "@brightside/imperative";
import { BundleDefinition } from "./bundle/Bundle.definition";
/**
 * Imperative command to "generate" a Bundle, etc.
 *
 */
const GenerateDefinition: ICommandDefinition = {
    name: "generate",
    aliases: ["g", "gen"],
    summary: "Transform the working directory into a CICS Bundle",
    description: "Generate a CICS Bundle and associated meta-data files in the current working directory.",
    type: "group",
    children: [BundleDefinition]
};

export = GenerateDefinition;
