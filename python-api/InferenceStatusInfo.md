# InferenceStatusInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inference_name** | **str** | The name of the inference. | 
**status** | **str** | The current status of the inference. | 
**host** | **str** | The host for the inference. | 
**url** | **str** | The URL for the inference. | 

## Example

```python
from majordomo_ai.models.inference_status_info import InferenceStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceStatusInfo from a JSON string
inference_status_info_instance = InferenceStatusInfo.from_json(json)
# print the JSON string representation of the object
print(InferenceStatusInfo.to_json())

# convert the object into a dict
inference_status_info_dict = inference_status_info_instance.to_dict()
# create an instance of InferenceStatusInfo from a dict
inference_status_info_from_dict = InferenceStatusInfo.from_dict(inference_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


