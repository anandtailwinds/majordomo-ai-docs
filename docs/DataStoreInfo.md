# DataStoreInfo

Data store configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Database ID | [optional] 
**name** | **str** | Name of the data store. | [optional] 
**type** | [**DataStoreTypes**](DataStoreTypes.md) |  | [optional] 
**vectordb_profile** | **str** | Name of the Vector DB profile. | [optional] 
**embedding_model** | **str** | The embedding model to be used while ingesting data (applies for vector DB only) | [optional] 
**database_url** | **str** | The endpoint of the structure database such as SQL/MongoDB. | [optional] 
**database_name** | **str** | The name of the database in the structured database. | [optional] 
**database_table** | **str** | The name of the table in the structured database. | [optional] 
**status** | **str** | If the status is active, it indicates that the vector database is present in the provider. | [optional] 
**dimension** | **int** | Dimensions in case of a vector database. | [optional] 
**total_records** | **int** | Total number of document chunks in case of a vector database. | [optional] 
**created_at** | **int** | Timestamp of the data store creation. | [optional] 
**last_update** | **int** | Timestamp of the last update to the data store. | [optional] 
**last_query** | **int** | Timestamp of last query using the data store. | [optional] 
**last_ingest** | **int** | Timestamp of the last ingestion to the data store. | [optional] 
**direct_ingest** | **int** | Number of direct ingestions done to the data store until now. | [optional] 
**pipeline_ingest** | **int** | Number of pipeline ingestions done to the data store until now. | [optional] 
**error_ingest** | **int** | Number of ingestions resulting in errors. | [optional] 

## Example

```python
from openapi_client.models.data_store_info import DataStoreInfo

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


