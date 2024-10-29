# DataStoreInfo

Data store configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspce in which the data store is present. | 
**name** | **str** | Name of the data store. | 
**user_name** | **str** | The user who created the data store. | 
**type** | [**DataStoreTypes**](DataStoreTypes.md) |  | 
**vectordb_profile** | **str** | Name of the Vector DB profile. | [optional] 
**vectordb_embedding** | **str** | The embedding model to be used while ingesting data (applies for vector DB only) | [optional] 
**structdb_url** | **str** | The endpoint of the structure database such as SQL/MongoDB. | [optional] 
**structdb_name** | **str** | The name of the database in the structured database. | [optional] 
**structdb_table** | **str** | The name of the table in the structured database. | [optional] 
**status** | **str** | If the status is active, it indicates that the vector database is present in the provider. | [optional] 
**vectordb_dimension** | **int** | Dimensions in case of a vector database. | [optional] 
**vectordb_records** | **int** | Total number of document chunks in case of a vector database. | [optional] 
**created_at** | **int** | Timestamp of the data store creation. | 
**last_update** | **int** | Timestamp of the last update to the data store. | 
**last_query** | **int** | Timestamp of last query using the data store. | [optional] 
**last_ingest** | **int** | Timestamp of the last ingestion to the data store. | [optional] 
**direct_ingest_count** | **int** | Number of direct ingestions done to the data store until now. | [optional] 
**pipeline_ingest_count** | **int** | Number of pipeline ingestions done to the data store until now. | [optional] 
**error_ingest_count** | **int** | Number of ingestions resulting in errors. | [optional] 

## Example

```python
from majordomoai.models.data_store_info import DataStoreInfo

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


