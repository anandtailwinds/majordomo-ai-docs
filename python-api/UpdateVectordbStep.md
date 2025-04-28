# UpdateVectordbStep

Upload nodes to vector database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_name** | **str** | The name of the data store to lookup. | 

## Example

```python
from majordomo_ai.models.update_vectordb_step import UpdateVectordbStep

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVectordbStep from a JSON string
update_vectordb_step_instance = UpdateVectordbStep.from_json(json)
# print the JSON string representation of the object
print(UpdateVectordbStep.to_json())

# convert the object into a dict
update_vectordb_step_dict = update_vectordb_step_instance.to_dict()
# create an instance of UpdateVectordbStep from a dict
update_vectordb_step_from_dict = UpdateVectordbStep.from_dict(update_vectordb_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


