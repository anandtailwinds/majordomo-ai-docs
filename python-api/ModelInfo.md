# ModelInfo

model information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_name** | **str** | Name of the model. | 
**model_provider** | [**ModelProviders**](ModelProviders.md) |  | 
**inference_api** | [**InferenceApis**](InferenceApis.md) |  | [optional] 
**access_info** | **Dict[str, object]** | Any endpoint that is to be specified to reach the provider. | [optional] 

## Example

```python
from majordomo_ai.models.model_info import ModelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelInfo from a JSON string
model_info_instance = ModelInfo.from_json(json)
# print the JSON string representation of the object
print(ModelInfo.to_json())

# convert the object into a dict
model_info_dict = model_info_instance.to_dict()
# create an instance of ModelInfo from a dict
model_info_from_dict = ModelInfo.from_dict(model_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


