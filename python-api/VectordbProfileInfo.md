# VectordbProfileInfo

Vectordb Profile Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Vectordb profile. | 
**provider** | [**VectordbProviders**](VectordbProviders.md) |  | 
**workspace** | **str** | The workspace that contains the vectordb profile. | 
**access_info** | [**VectordbAccessInfo**](VectordbAccessInfo.md) |  | [optional] 
**access_key** | [**VectordbAccessKey**](VectordbAccessKey.md) |  | [optional] 
**created_by** | **str** | The name of the user who created this Vectordb profile. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 
**created_at** | **int** | Timestamp of the Vectordb profile creation. | 
**last_update** | **int** | Timestamp of the last update to the Vectordb profile. | 

## Example

```python
from majordomo_ai.models.vectordb_profile_info import VectordbProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbProfileInfo from a JSON string
vectordb_profile_info_instance = VectordbProfileInfo.from_json(json)
# print the JSON string representation of the object
print(VectordbProfileInfo.to_json())

# convert the object into a dict
vectordb_profile_info_dict = vectordb_profile_info_instance.to_dict()
# create an instance of VectordbProfileInfo from a dict
vectordb_profile_info_from_dict = VectordbProfileInfo.from_dict(vectordb_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


