# ModelSpec

Information about the model to be deployed. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_type** | [**ModelSources**](ModelSources.md) |  | 
**app_profile_name** | **str** | Application profile containing the model files.  | 
**model_info** | **Dict[str, object]** | Access information for the model. | 

## Example

```python
from majordomo_ai.models.model_spec import ModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ModelSpec from a JSON string
model_spec_instance = ModelSpec.from_json(json)
# print the JSON string representation of the object
print(ModelSpec.to_json())

# convert the object into a dict
model_spec_dict = model_spec_instance.to_dict()
# create an instance of ModelSpec from a dict
model_spec_from_dict = ModelSpec.from_dict(model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


