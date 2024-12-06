# VectordbProfile

Vector database profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Vectordb profile | 
**provider** | [**VectordbProviders**](VectordbProviders.md) |  | 
**workspace** | **str** | The workspace that contains the vectordb profile. | 
**access_key** | [**VectordbAccessKey**](VectordbAccessKey.md) |  | [optional] 
**access_info** | [**VectordbAccessInfo**](VectordbAccessInfo.md) |  | [optional] 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.vectordb_profile import VectordbProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbProfile from a JSON string
vectordb_profile_instance = VectordbProfile.from_json(json)
# print the JSON string representation of the object
print(VectordbProfile.to_json())

# convert the object into a dict
vectordb_profile_dict = vectordb_profile_instance.to_dict()
# create an instance of VectordbProfile from a dict
vectordb_profile_from_dict = VectordbProfile.from_dict(vectordb_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


