# VectordbProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vectordb_profiles** | [**List[VectordbProfileInfo]**](VectordbProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.vectordb_profiles import VectordbProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbProfiles from a JSON string
vectordb_profiles_instance = VectordbProfiles.from_json(json)
# print the JSON string representation of the object
print(VectordbProfiles.to_json())

# convert the object into a dict
vectordb_profiles_dict = vectordb_profiles_instance.to_dict()
# create an instance of VectordbProfiles from a dict
vectordb_profiles_from_dict = VectordbProfiles.from_dict(vectordb_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


