# ModelProfileInfo

Model profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the model profile. | 
**provider** | [**ModelProviders**](ModelProviders.md) |  | [optional] 
**workspace** | **str** | The workspace that contains the model profile. | 
**tags** | **List[str]** | Tags to describe the model where it is running or what its purpose is. | [optional] 
**embedding_models** | **List[str]** | List of embedding models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**llm_models** | **List[str]** | List of LLM models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**access_info** | [**ModelAccessInfo**](ModelAccessInfo.md) |  | [optional] 
**access_key** | [**ModelAccessKey**](ModelAccessKey.md) |  | [optional] 
**created_by** | **str** | The username who created this model profile | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 
**created_at** | **int** | Timestamp of the model profile creation | 
**last_update** | **int** | Timestamp of the last update to the model profile | 

## Example

```python
from majordomo_ai.models.model_profile_info import ModelProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProfileInfo from a JSON string
model_profile_info_instance = ModelProfileInfo.from_json(json)
# print the JSON string representation of the object
print(ModelProfileInfo.to_json())

# convert the object into a dict
model_profile_info_dict = model_profile_info_instance.to_dict()
# create an instance of ModelProfileInfo from a dict
model_profile_info_from_dict = ModelProfileInfo.from_dict(model_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


