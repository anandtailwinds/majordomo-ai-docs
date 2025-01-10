# AllowedProfiles

This describes the list of permitted profiles and stores for the user on a workspace basis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the workspace. | 
**model_profiles** | [**List[ModelProfileScope]**](ModelProfileScope.md) | List of model profiles permitted for the user. | [optional] 
**vectordb_profiles** | **List[str]** | List of vectordb profiles permitted for the user. | [optional] 
**monitor_profiles** | **List[str]** | List of monitor profiles permitted for the user. | [optional] 
**data_stores** | [**List[DataStoreScope]**](DataStoreScope.md) | List of data stores permitted for the user. | [optional] 
**query_pipelines** | **List[str]** | List of data stores in each workspace that is created by the user. | [optional] 

## Example

```python
from majordomo_ai.models.allowed_profiles import AllowedProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedProfiles from a JSON string
allowed_profiles_instance = AllowedProfiles.from_json(json)
# print the JSON string representation of the object
print(AllowedProfiles.to_json())

# convert the object into a dict
allowed_profiles_dict = allowed_profiles_instance.to_dict()
# create an instance of AllowedProfiles from a dict
allowed_profiles_from_dict = AllowedProfiles.from_dict(allowed_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


