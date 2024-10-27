# DataStore

Data store

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**Credentials**](Credentials.md) |  | 
**name** | **str** | Name of the data store. | 
**type** | **str** | The type of data store. | 
**vectordb_profile** | **str** | Name of the Vector DB profile. | [optional] 
**embedding_model** | **str** | The embedding model to be used while ingesting data (applies for vector DB only) | [optional] 
**database_url** | **str** | The endpoint of the structure database such as SQL/MongoDB. | [optional] 
**database_name** | **str** | The name of the database in the structured database. | [optional] 
**database_table** | **str** | The name of the table in the structured database. | [optional] 

## Example

```python
from openapi_client.models.data_store import DataStore

# TODO update the JSON string below
json = "{}"
# create an instance of DataStore from a JSON string
data_store_instance = DataStore.from_json(json)
# print the JSON string representation of the object
print(DataStore.to_json())

# convert the object into a dict
data_store_dict = data_store_instance.to_dict()
# create an instance of DataStore from a dict
data_store_from_dict = DataStore.from_dict(data_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


