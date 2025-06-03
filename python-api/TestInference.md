# TestInference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace for the test inference request. | 
**request_id** | **str** | Unique identifier for the request | 
**request_url** | **str** | The URL to test inference. | 
**request_type** | **str** | HTTP Request type | [optional] 
**payload** | **Dict[str, object]** | The JSON payload to be used for testing. | 
**header_options** | **Dict[str, str]** | The HTTP header options to set. | [optional] 
**timeout** | **int** | Timeout in seconds | [optional] [default to 30]

## Example

```python
from majordomo_ai.models.test_inference import TestInference

# TODO update the JSON string below
json = "{}"
# create an instance of TestInference from a JSON string
test_inference_instance = TestInference.from_json(json)
# print the JSON string representation of the object
print(TestInference.to_json())

# convert the object into a dict
test_inference_dict = test_inference_instance.to_dict()
# create an instance of TestInference from a dict
test_inference_from_dict = TestInference.from_dict(test_inference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


