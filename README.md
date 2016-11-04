#Get Your Funky Mock Server!

This repo helps you getting your own mock server with your defined endpoints up and running in no time with Azure Functions. How you do this? Just follow the next few steps!

> **Prerequisites**

> - Azure Account with a valid subscription. If you don't have one, get a [free account here](https://azure.microsoft.com)
> - Azure CLI installed. You can download it right [here](https://azure.microsoft.com/en-us/documentation/articles/xplat-cli-install)
> - basic knowledge of node, javascript and json :)

##Step 1: Configure your endpoints
In the repository you can find two folders. One called **contactlist** and the other **chatarchive**. Enclosed you find three files in each folder.

- **index.js**
This file contains the function code itself which is executed when your function is called. The name of the file is fixed and mandatory for a function.
- **function.json**
This file contains the configuration for each function. The name of the file is fixed and mandatory for a function.
- **xxx.json**
This file contains the response payload of your function - so the content your mock endpoint returns when called

What you can do now: Just add folders of this structure on your own behalf and modify the content in the **xxx.json** files.

> **Be aware**
> The name of the folder is the name of your function endpoint!
> **Attention**

As soon as you are done with configuring your endpoints aka creating new folders, we can go on and deploy those!

##Step 2: Deploy your ser... eh functions!

Here comes Azure CLI into play and the ARM templates which you find in the folder **arm_deployment**. The template has everything in place to tell Azure which resources should be provisioned for you. 
Just open the arm_fun.parameter.json file and choose a name for your deployment. That's all regarding configuration for you.
Now change to the terminal app of your choice, make sure that you already installed the Azure CLI and login first with the following command.

> azure login

Just follow the instructions (open URL and enter given code) to login to Azure in your command line.

Right afterwards we can start with the deployment. We need a resource group, so let's create one with

> azure group create -n HereGoesYourGroupName -l "West US"

With the following command you can see all your Azure resource groups

> azure group list

Yours is in there? Perfect! So let's deploy the functions!

> azure group deployment create -f arm_func.json -e arm_func.paramter.json -g HereGoesYourGroupName -n MyARMDeployment

And within a few seconds you should see a success listed for you in the command line. Done! We have our services up and running. Now we have to do the last step - add our soure code and get our endpoints running.

##Step 3: Attach the source code

We don't want to manage our code in the Azure portal so we just link the source code to our newly deployed function.
Login to the [Azure portal](https://portal.azure.com) for this and go to **Resource groups** in the menu. Then open up your newly created one where you can see the three resources you just created via command line.
Enter the function app and then navigate on the lower left to **Function app settings** and hit the **Configute continous integration** button. There you cann attach the source of this repository to the function. 
Choose the **External repository** option and add the URL of this repository to the configuration.
Now wait a little - the syncing starts immediatelly and deploys the endpoints for you.

##Step 4: Done! Use the endpoints!

Now you should be able to use your functions already. You see them listed in the left part within the function app UI. Select one and copy the function URL from the top of the page. When you call this URL in your browser you should get back a bunch of JSON data. 
YES! SUCCESS! 

## WOW, a wild mock server appeared

So this is it! Just those few steps and you have a ready to go mock server! And guess what!
> **Reuse your JSONs**
> When you already have a finished API definition up and running in Swagger with JSON examples attached to it, you can use exactly those JSON files for your mock server.

There is a full blown how-to available for you on [how to get started with Azure CLI and ARM deployment with Azure Functions](https://medium.com/@codeprincess/your-daily-business-quote-567ab8ca7d06#.cnw68kjl4), if this walkthrough might be a bit too short


Nice one! 

So have fun and share your feedback with me :)
