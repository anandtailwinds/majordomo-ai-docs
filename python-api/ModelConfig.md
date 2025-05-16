# ModelConfig

Model information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the model catalog. | 
**workspace** | **str** | The workspace that contains the model catalog. | 
**description** | **str** | Describe the model and its use here. | 
**model_package** | [**ModelPackages**](ModelPackages.md) |  | 
**tool_name** | **str** | The application profile containing information about the model storage.  | [optional] 
**storage_profile_name** | **str** | The storage profile containing information about the model storage.  | [optional] 
**model_info** | **Dict[str, object]** | Parameters required for accessing the model.  image_name:  Name of the container image that serves the model.  | [optional] 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.model_config import ModelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ModelConfig from a JSON string
model_config_instance = ModelConfig.from_json(json)
# print the JSON string representation of the object
print(ModelConfig.to_json())

# convert the object into a dict
model_config_dict = model_config_instance.to_dict()
# create an instance of ModelConfig from a dict
model_config_from_dict = ModelConfig.from_dict(model_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


