# LlmQueryStep

RAG LLM Query Step

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_model_profile** | **str** | The name of the LLM model profile to lookup. | 
**llm_model_name** | **str** | The name of the LLM model to use. | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.llm_query_step import LlmQueryStep

# TODO update the JSON string below
json = "{}"
# create an instance of LlmQueryStep from a JSON string
llm_query_step_instance = LlmQueryStep.from_json(json)
# print the JSON string representation of the object
print(LlmQueryStep.to_json())

# convert the object into a dict
llm_query_step_dict = llm_query_step_instance.to_dict()
# create an instance of LlmQueryStep from a dict
llm_query_step_from_dict = LlmQueryStep.from_dict(llm_query_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


