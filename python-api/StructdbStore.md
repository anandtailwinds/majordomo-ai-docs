# StructdbStore

This is the data store specification structured databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub_type** | [**DataStoreSubTypes**](DataStoreSubTypes.md) |  | 
**connect_string** | **str** | The endpoint of the structure database such as SQL/MongoDB. This string can contain keystore specification for any sensitive information. This is a mandatory parameter for structured and image databases. | 
**database_name** | **str** | The name of the database in the structured database This is a mandatory parameter for structured and image databases. | 
**tables** | **List[str]** | The list of tables in the structured database. | 
**extra_info** | **str** | For any queries that are performed using this data store, this content will be used to augment the context that is provided along with the question. For example, by default the context for SQL tables will contain the table schemas, however if we want to detail more information about the tables for all the queries, then it can be added here instead of repeating for each query. | [optional] 

## Example

```python
from majordomo_ai.models.structdb_store import StructdbStore

# TODO update the JSON string below
json = "{}"
# create an instance of StructdbStore from a JSON string
structdb_store_instance = StructdbStore.from_json(json)
# print the JSON string representation of the object
print(StructdbStore.to_json())

# convert the object into a dict
structdb_store_dict = structdb_store_instance.to_dict()
# create an instance of StructdbStore from a dict
structdb_store_from_dict = StructdbStore.from_dict(structdb_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


