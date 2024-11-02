# VectorStoreInfo

This contains information specific to the vector database obtained from the provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspace in which the data store is present. | 
**data_store_name** | **str** | Name of the data store. | 
**status** | [**VectorStoreStatusTypes**](VectorStoreStatusTypes.md) |  | 
**dimension** | **int** | Dimensions in case of a vector database. | [optional] 
**total_records** | **int** | Total number of document chunks in case of a vector database. | [optional] 
**files** | **List[str]** | The list of files present in the vector database. | [optional] 

## Example

```python
from majordomo_ai.models.vector_store_info import VectorStoreInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VectorStoreInfo from a JSON string
vector_store_info_instance = VectorStoreInfo.from_json(json)
# print the JSON string representation of the object
print(VectorStoreInfo.to_json())

# convert the object into a dict
vector_store_info_dict = vector_store_info_instance.to_dict()
# create an instance of VectorStoreInfo from a dict
vector_store_info_from_dict = VectorStoreInfo.from_dict(vector_store_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


