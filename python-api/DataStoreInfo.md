# DataStoreInfo

This contains configuration and operational information about a single data store and is returned for GET operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**DataStore**](DataStore.md) |  | 
**created_by** | **str** | The user who created the data store. | 
**created_at** | **int** | Timestamp of the data store creation. | 
**last_update** | **int** | Timestamp of the last update to the data store. | 
**last_query** | **int** | Timestamp of last query using the data store. | 
**last_ingest** | **int** | Timestamp of the last ingestion to the data store. | 
**direct_ingest_count** | **int** | Number of direct ingestions done to the data store until now. | 
**pipeline_ingest_count** | **int** | Number of pipeline ingestions done to the data store until now. | 
**error_ingest_count** | **int** | Number of ingestions resulting in errors. | 

## Example

```python
from majordomo_ai.models.data_store_info import DataStoreInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreInfo from a JSON string
data_store_info_instance = DataStoreInfo.from_json(json)
# print the JSON string representation of the object
print(DataStoreInfo.to_json())

# convert the object into a dict
data_store_info_dict = data_store_info_instance.to_dict()
# create an instance of DataStoreInfo from a dict
data_store_info_from_dict = DataStoreInfo.from_dict(data_store_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


