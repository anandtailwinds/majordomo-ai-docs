# Model Profiles

## Concept

A model profile contains information about how to access a model from a model provider. For any Majordomo AI operations that involve the model access, either LLM or embedding such as vectorization of a document or performing an LLM Query, the input required will be the model profile and the model name. Majordomo AI will internally validate if the model profile is accessible to the user either as a direct configuration or by means of being shared by some other user and then resolve the model profile to the access parameters required to perform the model operation.

## Parameters

#### name

The name of the model profile. Must of unique across the workspace as it is shared between users.

#### workspace

 The workspace in which to create the model. This model can be shared with other users who are enabled for accessing this workspace.

#### model_provider

The type of model provider. Currently the following providers are supported.

- `PROVIDER_OPENAI` (value: `1`)

- `PROVIDER_ANTHROPIC` (value: `2`)

- `PROVIDER_SELF_HOSTED` (value: `5`)

- model_provider
  
  The type of model provider. Currently the following providers are supported.
  
  - `PROVIDER_OPENAI` (value: `1`)
  
  - `PROVIDER_ANTHROPIC` (value: `2`)
  
  - `PROVIDER_SELF_HOSTED` (value: `5`)

#### inference_api

The inference API to be used while accessing the model. This field is required only when accessing the Self hosted models. For third party providers such as OpenAI the appropriate format will be used automatically. The chat/completions interface of the API will be used as default and is the only option supported for now.

- `INFERENCE_API_OPENAI`(value:`1`)

- `INFERENCE_API_OLLAMA` (value: `2`)

- `INFERENCE_API_VLLM` (value: `3`)

#### access_info

The access parameters for accessing the model within the provider vary and examples for each type are given below.

PROVIDER_OPENAI

| Parameter | Function                          |
| --------- | --------------------------------- |
| api_key   | Provide your OpenAI API key here. |

PROVIDER_ANTHROPIC

| Parameter | Function                             |
| --------- | ------------------------------------ |
| api_key   | Provide your Anthropic API key here. |

PROVIDER_SELF_HOSTED

| Parameter | Function                                                                                                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| api_key   | Provide the API key required to access the model here in case your model is protected. This API key will be sent in the Bearer Token.                                              |
| base_url  | This represents the base URL for accessing the model. For example if the model supports OpenAI endpoints at 1.2.3.4:8000, then configure this parameter as http://1.2.3.4:8000/v1. |

#### embedding_models

Provide a list of allowed embedding models for this model profile. Any usage of this model profile will be restricted to only this set. For example, for OpenAI this list can be [test-embedding-3-large, text-embedding-2-ada]

#### llm_models

Provide a list of allowed LLM models for this model profile. Any usage of this model profile will be restricted to only this set. For example, for OpenAI this list can be [test-gpt-3.5-turbo, gpt-4o]. Note that for self-hosted models with custom inference endpoints, it is possible that some of the APIs do not honour the allowed models. So while the model running actually may be different, still it may be served, this is a limitation of the model deployment and not the model profile functionality.

#### shared_users

The list of users with whom this profile can be shared. Provide this as a list of user names. eg: [ramesh@samplecompany.com, suresh@samplecompany.com]

#### tags

Set tags reference for the profiles, this can be used in Majordomo AI UI to easily filter model profiles in case of a large number of them being configured.

## Sample code

```python
import majordomo_ai as md
import os
import sys
import json
import logging

config = configparser.ConfigParser()

configuration = md.Configuration(access_token = os.environ['MAJORDOMO_AI_API_KEY'],
                                 host = os.environ['MAJORDOMO_AI_DIRECTOR'] + '/' +
                                 os.environ['MAJORDOMO_AI_ACCOUNT'])
api_config = md.ApiClient(configuration)
client = md.AdminApi(api_config)

shared_users = []
shared_users.append('anand@tailwinds.ai')

workspace='Engineering'
model_profile_name='ModelProfile1'

logger = logging.getLogger('model_profile')

mp = md.ModelProfile(name=model_profile_name,
      workspace=workspace,
      provider=md.ModelProviders.PROVIDER_OPENAI,
      access_info={'api_key':'sk-xxxx'}
      embedding_models=json.loads(['text-embedding-3-large']),
      llm_models=json.loads(['gpt-3.5-turbo', 'gpt-4o'])
      shared_users=shared_users)

match sys.argv[1]:
    case 'c':
        try:
            result = client.create_model_profile(mp)
            print(result)
        except Exception as e:
            print('Error while creating model profile : {e}')
    case 'u':
        try:
            result = client.update_model_profile(mp)
            print(result)
        except Exception as e:
            print('Error while updating model profile : {e}')
    case 'g':
        try:
            result = client.get_model_profiles(workspace, model_profile_name)
            print(result)
        except Exception as e:
            print('Error while getting all model profiles : {e}')
    case 'ga':
        try:
            results = client.get_model_profiles(workspace, shared=True)
            for result in results.model_profiles:
                print(result)
        except Exception as e:
            print('Error while getting specific model profiles : {e}')
    case 'd':
        try:
            result = client.delete_model_profiles(workspace=workspace,
                    name=model_profile_name)
            print(result)
        except Exception as e:
            print('Error while deleting specific model profile : {e}')
    case 'da':
        try:
            result = client.delete_model_profiles()
            print(result)
        except Exception as e:
            print('Error while deleting all model profiles : {e}')
```
