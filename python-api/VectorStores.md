# VectorStores

This contains an configuration and operational information for an array of vector stores and is returned for GET operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vector_stores** | [**List[VectorStoreInfo]**](VectorStoreInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.vector_stores import VectorStores

# TODO update the JSON string below
json = "{}"
# create an instance of VectorStores from a JSON string
vector_stores_instance = VectorStores.from_json(json)
# print the JSON string representation of the object
print(VectorStores.to_json())

# convert the object into a dict
vector_stores_dict = vector_stores_instance.to_dict()
# create an instance of VectorStores from a dict
vector_stores_from_dict = VectorStores.from_dict(vector_stores_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


