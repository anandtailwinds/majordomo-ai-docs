# UserProfileInfo

User profile Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Name of the workspace. | 
**user_name** | **str** | Name of the user. | 
**cost_tags** | **str** | The cost tags to be associated with this user operations. | [optional] 
**model_profiles** | **List[str]** | The list of model profiles that are enabled for this user. | [optional] 
**vectordb_profiles** | **List[str]** | The list of VectorDB profiles that are enabled for this user. | [optional] 
**created_at** | **int** | Timestamp of the user profile creation. | 
**last_update** | **int** | Timestamp of the last update to the user profile. | 

## Example

```python
from majordomoai.models.user_profile_info import UserProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileInfo from a JSON string
user_profile_info_instance = UserProfileInfo.from_json(json)
# print the JSON string representation of the object
print(UserProfileInfo.to_json())

# convert the object into a dict
user_profile_info_dict = user_profile_info_instance.to_dict()
# create an instance of UserProfileInfo from a dict
user_profile_info_from_dict = UserProfileInfo.from_dict(user_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


