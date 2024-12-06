# ModelProfile

model profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the model profile. | 
**provider** | [**ModelProviders**](ModelProviders.md) |  | 
**workspace** | **str** | The workspace that contains the model profile. | 
**allowed_models** | **List[str]** | List of models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**access_info** | [**ModelAccessInfo**](ModelAccessInfo.md) |  | [optional] 
**access_key** | [**ModelAccessKey**](ModelAccessKey.md) |  | [optional] 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.model_profile import ModelProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProfile from a JSON string
model_profile_instance = ModelProfile.from_json(json)
# print the JSON string representation of the object
print(ModelProfile.to_json())

# convert the object into a dict
model_profile_dict = model_profile_instance.to_dict()
# create an instance of ModelProfile from a dict
model_profile_from_dict = ModelProfile.from_dict(model_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


