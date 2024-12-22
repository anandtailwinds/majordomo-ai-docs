# DataCount

This provides a count of the entries in various tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspace for which the counts were collected. | 
**user_name** | **str** | The user for whom the counts are collected. | 
**vectordb_data_stores** | **int** | The total number of data stores in the workspace. | 
**structdb_data_stores** | **int** | The total number of data stores in the workspace. | 
**ingestion_pipelines** | **int** | The total number of data stores in the workspace. | 
**query_pipelines** | **int** | The total number of data stores in the workspace. | 

## Example

```python
from majordomo_ai.models.data_count import DataCount

# TODO update the JSON string below
json = "{}"
# create an instance of DataCount from a JSON string
data_count_instance = DataCount.from_json(json)
# print the JSON string representation of the object
print(DataCount.to_json())

# convert the object into a dict
data_count_dict = data_count_instance.to_dict()
# create an instance of DataCount from a dict
data_count_from_dict = DataCount.from_dict(data_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


