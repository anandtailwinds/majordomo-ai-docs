# InferenceProfileCommandResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | The result of the inference profile command. | 
**message** | **str** | The message returned for the inference profile command operation. | 

## Example

```python
from majordomo_ai.models.inference_profile_command_response import InferenceProfileCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceProfileCommandResponse from a JSON string
inference_profile_command_response_instance = InferenceProfileCommandResponse.from_json(json)
# print the JSON string representation of the object
print(InferenceProfileCommandResponse.to_json())

# convert the object into a dict
inference_profile_command_response_dict = inference_profile_command_response_instance.to_dict()
# create an instance of InferenceProfileCommandResponse from a dict
inference_profile_command_response_from_dict = InferenceProfileCommandResponse.from_dict(inference_profile_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


