# InferenceProfileCommand200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | The result of the inference profile command. | 
**message** | **str** | The message returned for the inference profile command operation. | 
**pod_list** | **List[Dict[str, object]]** | The information about a specific pod. | 
**logs** | **List[str]** | The current status of inference obtained from Kserve. | 
**inference_status** | [**List[InferenceStatusInfo]**](InferenceStatusInfo.md) | The list of inference status. | 

## Example

```python
from majordomo_ai.models.inference_profile_command200_response import InferenceProfileCommand200Response

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceProfileCommand200Response from a JSON string
inference_profile_command200_response_instance = InferenceProfileCommand200Response.from_json(json)
# print the JSON string representation of the object
print(InferenceProfileCommand200Response.to_json())

# convert the object into a dict
inference_profile_command200_response_dict = inference_profile_command200_response_instance.to_dict()
# create an instance of InferenceProfileCommand200Response from a dict
inference_profile_command200_response_from_dict = InferenceProfileCommand200Response.from_dict(inference_profile_command200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


