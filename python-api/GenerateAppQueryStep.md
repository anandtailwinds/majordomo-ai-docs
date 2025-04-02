# GenerateAppQueryStep

Application Database Query Generation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_info** | [**AppInfo**](AppInfo.md) |  | 
**embedding_model_info** | [**ModelInfo**](ModelInfo.md) |  | [optional] 
**llm_model_info** | [**ModelInfo**](ModelInfo.md) |  | 
**query_string** | **str** | Query string | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.generate_app_query_step import GenerateAppQueryStep

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateAppQueryStep from a JSON string
generate_app_query_step_instance = GenerateAppQueryStep.from_json(json)
# print the JSON string representation of the object
print(GenerateAppQueryStep.to_json())

# convert the object into a dict
generate_app_query_step_dict = generate_app_query_step_instance.to_dict()
# create an instance of GenerateAppQueryStep from a dict
generate_app_query_step_from_dict = GenerateAppQueryStep.from_dict(generate_app_query_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


