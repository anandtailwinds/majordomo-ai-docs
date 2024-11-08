# DataStoreScope

This describes the list of permitted data stores for the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | List of data stores in each workspace that is created by the user. | 
**ingest_pipelines** | **List[str]** | List of ingest pipelines available for each data store. | [optional] 

## Example

```python
from majordomo_ai.models.data_store_scope import DataStoreScope

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreScope from a JSON string
data_store_scope_instance = DataStoreScope.from_json(json)
# print the JSON string representation of the object
print(DataStoreScope.to_json())

# convert the object into a dict
data_store_scope_dict = data_store_scope_instance.to_dict()
# create an instance of DataStoreScope from a dict
data_store_scope_from_dict = DataStoreScope.from_dict(data_store_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


