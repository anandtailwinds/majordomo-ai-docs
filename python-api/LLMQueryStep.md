# LLMQueryStep

RAG LLM Query Step

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_model_info** | [**ModelInfo**](ModelInfo.md) |  | 
**query_string** | **str** | Query string | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.llm_query_step import LLMQueryStep

# TODO update the JSON string below
json = "{}"
# create an instance of LLMQueryStep from a JSON string
llm_query_step_instance = LLMQueryStep.from_json(json)
# print the JSON string representation of the object
print(LLMQueryStep.to_json())

# convert the object into a dict
llm_query_step_dict = llm_query_step_instance.to_dict()
# create an instance of LLMQueryStep from a dict
llm_query_step_from_dict = LLMQueryStep.from_dict(llm_query_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


