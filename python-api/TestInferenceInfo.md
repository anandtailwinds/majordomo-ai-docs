# TestInferenceInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** | HTTP Status Code of the original test inference operation. | 
**request_id** | **str** | Echo of the request ID | 
**response** | **Dict[str, object]** | Response for the test request. | 
**latency** | **int** | The time taken for executing the request. | 

## Example

```python
from majordomo_ai.models.test_inference_info import TestInferenceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TestInferenceInfo from a JSON string
test_inference_info_instance = TestInferenceInfo.from_json(json)
# print the JSON string representation of the object
print(TestInferenceInfo.to_json())

# convert the object into a dict
test_inference_info_dict = test_inference_info_instance.to_dict()
# create an instance of TestInferenceInfo from a dict
test_inference_info_from_dict = TestInferenceInfo.from_dict(test_inference_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


