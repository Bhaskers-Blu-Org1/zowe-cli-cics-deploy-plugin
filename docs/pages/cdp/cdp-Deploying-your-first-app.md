---
title: Deploying your first app
tags: [getting_started]
keywords:
summary: "The following steps take you through deploying your first Node.js application to CICS."
sidebar: cdp_sidebar
permalink: cdp-Deploying-your-first-app.html
folder: cdp
toc: false
---

1. Install the Zowe CLI and cics-deploy plugin by following the steps in [Installation](cdp-Installation).

2. Create Zowe CLI profiles for z/OSMF, SSH, and cics-deploy by following the steps in [Create Zowe CLI profiles](cdp-Create-Zowe-CLI-profiles).

3. Create a Node.js application.

   For example, to create a Node.js application using the [Express Application Generator](https://expressjs.com/en/starter/generator.html):

   ```console
   npm install -g express-generator
   express myExpressApp
   cd myExpressApp
   npm install
   npm start
   ```

   The Node.js application will start. You can call the application from a browser using URL [http://localhost:3000/](http://localhost:3000/), and press CTRL+C to stop it.

4. Package the Node.js application into a CICS bundle.

    Make sure you are in the root directory of the application. Replace the value for `--port` with one that is available for use by the CICS region on z/OS.

   ```console
    zowe cics-deploy generate bundle --port 3000 --overwrite
   ```

    The output will show the directories and files created to form a CICS bundle:

    ```console
    define : NODEJSAPP "myexpressapp" with startscript "./bin/www"
    create : nodejsapps
    create : nodejsapps/myexpressapp.nodejsapp
    create : nodejsapps/myexpressapp.profile
    create : .zosattributes
    create : META-INF
    create : META-INF/cics.xml
    CICS Bundle generated with bundleid "myexpressapp"
    ```

5. Deploy the CICS bundle into CICS.

    Replace the value for `--name` with the name of the BUNDLE resource to be created in CICS.

    ```console
    zowe cics-deploy push bundle --name Express --overwrite
    ```

    A progress bar is shown and updated as the CICS bundle is deployed and the application is started. This can take a few minutes. If there are errors, retry with the `--verbose` option for more detailed output.

6. Test the Node.js application.

    You can call the application from a browser using URL [http://myzos:3000/](http://myzos:3000/), replacing _myzos_ with the host name of the z/OS system, and _3000_ with the port specified in step 4.

    You can make changes to the application and redeploy it by repeating step 5.

### Results

The Node.js application is packaged into a CICS bundle on the workstation, uploaded to a directory on z/OS, and is running in CICS.