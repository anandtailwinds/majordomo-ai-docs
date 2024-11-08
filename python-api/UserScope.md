# UserScope

This describes the list of permitted profiles and stores for the user on a workspace basis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the workspace. | 
**model_profiles** | **List[str]** | List of model profiles permitted for the user. | [optional] 
**vectordb_profiles** | **List[str]** | List of vectordb profiles permitted for the user. | [optional] 
**monitor_profiles** | **List[str]** | List of monitor profiles permitted for the user. | [optional] 
**data_stores** | [**List[DataStoreScope]**](DataStoreScope.md) | List of data stores permitted for the user. | [optional] 
**query_pipelines** | **List[str]** | List of data stores in each workspace that is created by the user. | [optional] 

## Example

```python
from majordomo_ai.models.user_scope import UserScope

# TODO update the JSON string below
json = "{}"
# create an instance of UserScope from a JSON string
user_scope_instance = UserScope.from_json(json)
# print the JSON string representation of the object
print(UserScope.to_json())

# convert the object into a dict
user_scope_dict = user_scope_instance.to_dict()
# create an instance of UserScope from a dict
user_scope_from_dict = UserScope.from_dict(user_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


