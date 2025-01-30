# QueryParams

A data store query request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_k** | **int** | The number of vector db matches to consider for llm context | [optional] [default to 2]
**temperature** | **float** | The temperature of the LLM processing, the higher the more creative the LLM is. | [optional] 
**doc_metadata** | [**List[Metadata]**](Metadata.md) | Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks. | [optional] 
**query_mode** | [**QueryModes**](QueryModes.md) |  | [optional] 
**debug_mode** | **bool** | Query results will include debug information. | [optional] [default to False]

## Example

```python
from majordomo_ai.models.query_params import QueryParams

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParams from a JSON string
query_params_instance = QueryParams.from_json(json)
# print the JSON string representation of the object
print(QueryParams.to_json())

# convert the object into a dict
query_params_dict = query_params_instance.to_dict()
# create an instance of QueryParams from a dict
query_params_from_dict = QueryParams.from_dict(query_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


