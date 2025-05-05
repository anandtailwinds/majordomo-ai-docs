# InferenceCommandStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | The result of the inference profile command. | 
**message** | **str** | The message returned for the inference profile command operation. | 

## Example

```python
from majordomo_ai.models.inference_command_status_response import InferenceCommandStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceCommandStatusResponse from a JSON string
inference_command_status_response_instance = InferenceCommandStatusResponse.from_json(json)
# print the JSON string representation of the object
print(InferenceCommandStatusResponse.to_json())

# convert the object into a dict
inference_command_status_response_dict = inference_command_status_response_instance.to_dict()
# create an instance of InferenceCommandStatusResponse from a dict
inference_command_status_response_from_dict = InferenceCommandStatusResponse.from_dict(inference_command_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


