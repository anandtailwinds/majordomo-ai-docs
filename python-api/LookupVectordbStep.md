# LookupVectordbStep

RAG Query vectordb lookup step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_name** | **str** | The name of the data store to lookup. | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.lookup_vectordb_step import LookupVectordbStep

# TODO update the JSON string below
json = "{}"
# create an instance of LookupVectordbStep from a JSON string
lookup_vectordb_step_instance = LookupVectordbStep.from_json(json)
# print the JSON string representation of the object
print(LookupVectordbStep.to_json())

# convert the object into a dict
lookup_vectordb_step_dict = lookup_vectordb_step_instance.to_dict()
# create an instance of LookupVectordbStep from a dict
lookup_vectordb_step_from_dict = LookupVectordbStep.from_dict(lookup_vectordb_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


