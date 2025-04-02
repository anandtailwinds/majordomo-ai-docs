# AppProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_profiles** | [**List[AppProfileInfo]**](AppProfileInfo.md) |  | [optional] 
**shared_profiles** | [**List[AppProfileInfo]**](AppProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.app_profiles import AppProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of AppProfiles from a JSON string
app_profiles_instance = AppProfiles.from_json(json)
# print the JSON string representation of the object
print(AppProfiles.to_json())

# convert the object into a dict
app_profiles_dict = app_profiles_instance.to_dict()
# create an instance of AppProfiles from a dict
app_profiles_from_dict = AppProfiles.from_dict(app_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


