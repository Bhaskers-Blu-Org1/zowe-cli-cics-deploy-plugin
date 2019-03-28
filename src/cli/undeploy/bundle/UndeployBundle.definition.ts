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

import { ICommandDefinition } from "@zowe/imperative";
import { NameOption } from "../../shared/Name.option";
import { CicsplexOption } from "../../shared/Cicsplex.option";
import { ScopeOption } from "../../shared/Scope.option";
import { CsdgroupOption } from "../../shared/Csdgroup.option";
import { ResgroupOption } from "../../shared/Resgroup.option";
import { CicshlqOption } from "../../shared/Cicshlq.option";
import { CpsmhlqOption } from "../../shared/Cpsmhlq.option";
import { JobcardOption } from "../../shared/Jobcard.option";
import { TimeoutOption } from "../../shared/Timeout.option";
import { TargetStateOption } from "./options/TargetState.option";
import { VerboseOption } from "../../shared/Verbose.option";

/**
 * Imperative command for the Bundle sub-option of Deploy.
 *
 */
export const UndeployBundleDefinition: ICommandDefinition = {
    name: "bundle",
    aliases: ["b", "bun", "bund"],
    summary: "Deploy a CICS bundle",
    description: "Undeploy a CICS bundle from one or more CICS regions within a CICSplex. " +
                 "The DFHDPLOY utility is used to undeploy and remove a BUNDLE resource " +
                 "from the target group of CICS regions.",
    type: "command",
    handler: __dirname + "/UndeployBundle.handler",
    options: [ NameOption, CicsplexOption, ScopeOption, CsdgroupOption , ResgroupOption,
               CicshlqOption, CpsmhlqOption, JobcardOption, TimeoutOption, TargetStateOption,
               VerboseOption],
    profile: { required: ["zosmf"], optional: ["cics-deploy"] },
    examples: [
        {
            description: "Undeploy a CICS bundle using the default cics-deploy profile",
            options: `--name EXAMPLE`
        },
        {
            description: "Undeploy a CICS bundle, and declare a timeout should the processing take too long",
            options: `--name EXAMPLE --timeout 60`
        },
        {
            description: "Undeploy a CICS bundle from a specific target environment using specific zosmf and cics-deploy profiles",
            options: `--name EXAMPLE --cicsplex TESTPLEX --scope SCOPE --resgroup BUNDGRP ` +
                     `--cicshlq CICSTS55.CICS720 --cpsmhlq CICSTS55.CPSM550 --zosmf-profile testplex --cics-deploy-profile devcics`
        }
    ]
};
