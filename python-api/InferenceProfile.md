# InferenceProfile

This contains information specific to an inference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the inference deployment. | 
**workspace** | **str** | Workspace in which the data store is present. | 
**model_name** | **str** | Details of the model in the model catalog to be deployed.  | [optional] 
**target_resource_name** | **str** | Details of the target resource in which the model is deployed.  | [optional] 
**runtime_info** | **Dict[str, object]** | Optional parameters for deployment. | [optional] 
**model_spec** | [**ModelSpec**](ModelSpec.md) |  | 
**deployment_spec** | [**DeploymentSpec**](DeploymentSpec.md) |  | 
**tags** | **List[str]** | Tags to describe the infra where it is running or what its purpose is. | [optional] 

## Example

```python
from majordomo_ai.models.inference_profile import InferenceProfile

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceProfile from a JSON string
inference_profile_instance = InferenceProfile.from_json(json)
# print the JSON string representation of the object
print(InferenceProfile.to_json())

# convert the object into a dict
inference_profile_dict = inference_profile_instance.to_dict()
# create an instance of InferenceProfile from a dict
inference_profile_from_dict = InferenceProfile.from_dict(inference_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


