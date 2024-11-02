# UserProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_profiles** | [**List[UserProfileInfo]**](UserProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.user_profiles import UserProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfiles from a JSON string
user_profiles_instance = UserProfiles.from_json(json)
# print the JSON string representation of the object
print(UserProfiles.to_json())

# convert the object into a dict
user_profiles_dict = user_profiles_instance.to_dict()
# create an instance of UserProfiles from a dict
user_profiles_from_dict = UserProfiles.from_dict(user_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


