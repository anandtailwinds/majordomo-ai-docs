# VectordbInfo

Vectordb connection information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index_name** | **str** | Name of the vector database index. | 
**vectordb_provider** | [**VectordbProviders**](VectordbProviders.md) |  | 
**access_info** | **Dict[str, object]** | Any endpoint that is to be specified to reach the provider. | [optional] 

## Example

```python
from majordomo_ai.models.vectordb_info import VectordbInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbInfo from a JSON string
vectordb_info_instance = VectordbInfo.from_json(json)
# print the JSON string representation of the object
print(VectordbInfo.to_json())

# convert the object into a dict
vectordb_info_dict = vectordb_info_instance.to_dict()
# create an instance of VectordbInfo from a dict
vectordb_info_from_dict = VectordbInfo.from_dict(vectordb_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


