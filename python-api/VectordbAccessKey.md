# VectordbAccessKey

Vectordb Profile Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | API key for access. | [optional] 

## Example

```python
from majordomo_ai.models.vectordb_access_key import VectordbAccessKey

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbAccessKey from a JSON string
vectordb_access_key_instance = VectordbAccessKey.from_json(json)
# print the JSON string representation of the object
print(VectordbAccessKey.to_json())

# convert the object into a dict
vectordb_access_key_dict = vectordb_access_key_instance.to_dict()
# create an instance of VectordbAccessKey from a dict
vectordb_access_key_from_dict = VectordbAccessKey.from_dict(vectordb_access_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


