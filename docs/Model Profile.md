# Model Profiles

## Purpose

The model profile defines the characteristics of a particular model provider instance that can be used as a endpoint for performing LLM operations. The model profile can point to either an on-prem model instance that is running on a customer owned GPU or a model endpoint offered by the cloud service provider, such as AWS Bedrock or a third party website hosted model provider that is accessible via the Internet such as OpenAI. 

## Defining a model profile

The information that is required to fully define a model provider will require a subset of the following.

### Provider

The type of the model provider will eventually determine how the model provider functionality is accessed for a query operation. There are a bunch of standard model providers such as OpenAI and Gemini that will be supported out of the box when it comes to third party providers. Incase the customer runs their own instance of a model, this type will need to be set to the broader access category that will need to be used to connect with the model.

### Access Info

This is a container for holding the access information for a model provider as JSON specification. This information is specific to the model provider. Some providers such as OpenAI third party hosting do not need any specific information to be specified. On the contrary a provider such as AWS Bedrock will require the region to be specified. For exact specifications that need to be provided for each model provider, please refer to the API documentation. It is possible to specify the some types of access info in a KeyVault encoded format so that the information is available only the worker node that is responsible for making the connection with the provider and is very secure. This is useful incase the access information also contains password or equivalent data. 

### Access Key

This is a container that is holding the key information for accessing the models on a provider. The nature of the exact key specification will vary as per the provider. In the case of providers such as OpenAI or Gemini, the API key will be used to access the models. In the case of other providers such as AWS Bedrock, the access to the models may be provided via other IAM policy rules and hence the access key information by itself may not be required. Since this is an extensible JSON specification, the exact specification for each provider can be easily provided. Please refer to the API documentation for specific value requirements for each provider we support. It is possible to specify the access keys in a KeyVault encoded format so that the information is available only the worker node that is responsible for making the connection with the provider and is very secure.

### Allowed Models

The list of models allowed to be accessed via this model profile. In a user controlled account, each user specifies their own model profiles and they can enable the model profile for specific workspaces. However it is possible that the user wants to ensure that not all models in that profile can be used and wants to restrict it to some models that are allowed by the cost budget. In this case the model profile can list all the allowed models for the user to prevent any inadvertant use of costlier models. In the case of an admin controlled account, the model profile can get assigned to a user via either the workspace or the user profile. In that case, the administrator has full control over which models a specific user has access to using this paramater.

#### Notes

1. When no allowed models are specified, it is presumed that all models available with a model provider are accessible for the user. 
2. If a user profile has a model profile specified, then it will supercede any specification of the profile at the workspace level in case of admin controller accounts.
3. The administrator can create two profiles with the same provider and the same API keys (eg: Allow-Restricted-Access-Profile and Allow-All-Models-Profile and assign them to different users based on their requirement)

### API Example

```python
import majordomo_ai as md
import os
import sys

configuration = md.Configuration(access_token = os.environ['MAJORDOMO_AI_API_KEY'],
                                 host = os.environ['MAJORDOMO_AI_DIRECTOR'] + "/" +
                                 os.environ["MAJORDOMO_AI_ACCOUNT"])
api_config = md.ApiClient(configuration)
client = md.AdminApi(api_config)

mp = md.ModelProfile(name="OpenAI-dev",
      provider=md.ModelProviders.OPENAI,
      access_key=md.ModelAccessKey(api_key="{Azure:MajordomoAIKey:OpenAI}"),
      allowed_models=["text-embedding-3-large", "gpt-3.5-turbo"])


try:
    result = client.create_model_profile(mp)
except Exception as e:
            logger("Creating model profile failed" : str(e))
```