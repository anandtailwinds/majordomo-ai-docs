# AppProfile

Application Profile Information. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the application profile. | 
**workspace** | **str** | The workspace that contains the model profile. | 
**app_type** | [**AppTypes**](AppTypes.md) |  | 
**access_info** | **Dict[str, object]** | Credentials for application. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.app_profile import AppProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AppProfile from a JSON string
app_profile_instance = AppProfile.from_json(json)
# print the JSON string representation of the object
print(AppProfile.to_json())

# convert the object into a dict
app_profile_dict = app_profile_instance.to_dict()
# create an instance of AppProfile from a dict
app_profile_from_dict = AppProfile.from_dict(app_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


