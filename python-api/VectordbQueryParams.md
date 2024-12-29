# VectordbQueryParams

Parameters related to basic text query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_name** | **str** | The name of the data store to use for the vector database. | 
**embedding_model_profile** | **str** | The name of the model profile to use for accessing the embedding models. | 
**embedding_model** | **str** | The embedding model to be used. | 
**llm_model_profile** | **str** | The name of the model profile to use for accessing the LLM models. | 
**llm_model** | **str** | The LLM model to be used. | 

## Example

```python
from majordomo_ai.models.vectordb_query_params import VectordbQueryParams

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbQueryParams from a JSON string
vectordb_query_params_instance = VectordbQueryParams.from_json(json)
# print the JSON string representation of the object
print(VectordbQueryParams.to_json())

# convert the object into a dict
vectordb_query_params_dict = vectordb_query_params_instance.to_dict()
# create an instance of VectordbQueryParams from a dict
vectordb_query_params_from_dict = VectordbQueryParams.from_dict(vectordb_query_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


