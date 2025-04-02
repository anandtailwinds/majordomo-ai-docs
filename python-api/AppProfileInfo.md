# AppProfileInfo

Application profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the application profile. | 
**workspace** | **str** | The workspace that contains the model profile. | 
**app_type** | [**AppTypes**](AppTypes.md) |  | 
**access_info** | **Dict[str, object]** | Credentials for application. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 
**created_by** | **str** | The username who created this model profile | [optional] 
**created_at** | **int** | Timestamp of the model profile creation | [optional] 
**last_update** | **int** | Timestamp of the last update to the model profile | [optional] 

## Example

```python
from majordomo_ai.models.app_profile_info import AppProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppProfileInfo from a JSON string
app_profile_info_instance = AppProfileInfo.from_json(json)
# print the JSON string representation of the object
print(AppProfileInfo.to_json())

# convert the object into a dict
app_profile_info_dict = app_profile_info_instance.to_dict()
# create an instance of AppProfileInfo from a dict
app_profile_info_from_dict = AppProfileInfo.from_dict(app_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


