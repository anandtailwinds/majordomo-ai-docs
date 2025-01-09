# ModelProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_profiles** | [**List[ModelProfileInfo]**](ModelProfileInfo.md) |  | [optional] 
**shared_profiles** | [**List[ModelProfileInfo]**](ModelProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.model_profiles import ModelProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProfiles from a JSON string
model_profiles_instance = ModelProfiles.from_json(json)
# print the JSON string representation of the object
print(ModelProfiles.to_json())

# convert the object into a dict
model_profiles_dict = model_profiles_instance.to_dict()
# create an instance of ModelProfiles from a dict
model_profiles_from_dict = ModelProfiles.from_dict(model_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


