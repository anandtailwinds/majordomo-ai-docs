# DataStoreQuery

Data Store Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace this data store is created in. | 
**data_store_name** | **str** | Name of the data store. | 
**embedding_model** | **str** | The embedding model to be used. | [optional] [default to 'text-embedding-3-large']
**embedding_model_profile** | **str** | The name of the model profile to use for accessing the embedding models. | [optional] 
**llm_model_profile** | **str** | The name of the model profile to use for accessing the LLM models. | 
**llm_model** | **str** | The LLM model to be used. | [default to 'gpt-3.5-turbo']
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 
**query_string** | **str** | The actual query string for which the user wants a response to. | 
**query_type** | [**QueryTypes**](QueryTypes.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.data_store_query import DataStoreQuery

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreQuery from a JSON string
data_store_query_instance = DataStoreQuery.from_json(json)
# print the JSON string representation of the object
print(DataStoreQuery.to_json())

# convert the object into a dict
data_store_query_dict = data_store_query_instance.to_dict()
# create an instance of DataStoreQuery from a dict
data_store_query_from_dict = DataStoreQuery.from_dict(data_store_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


