# UserProfile

user profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Name of the workspace. | 
**user_name** | **str** | Name of the user. | 
**cost_tags** | **str** | The cost tags to be associated with this user operations. | [optional] 
**model_profiles** | **List[str]** | The list of model profiles that are enabled for this user. | [optional] 
**vectordb_profiles** | **List[str]** | The list of VectorDB profiles that are enabled for this user. | [optional] 

## Example

```python
from majordomoai.models.user_profile import UserProfile

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfile from a JSON string
user_profile_instance = UserProfile.from_json(json)
# print the JSON string representation of the object
print(UserProfile.to_json())

# convert the object into a dict
user_profile_dict = user_profile_instance.to_dict()
# create an instance of UserProfile from a dict
user_profile_from_dict = UserProfile.from_dict(user_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


