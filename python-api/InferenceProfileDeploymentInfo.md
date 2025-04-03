# InferenceProfileDeploymentInfo

The deployment types such as GPU/Kubernetes based etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The type of model source, such as container or weights. | [optional] 
**ports** | **List[str]** | The type of model source, such as container or weights. | [optional] 
**env_vars** | **Dict[str, str]** | Environment vars for the container. | [optional] 
**model_source** | [**ModelSources**](ModelSources.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.inference_profile_deployment_info import InferenceProfileDeploymentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceProfileDeploymentInfo from a JSON string
inference_profile_deployment_info_instance = InferenceProfileDeploymentInfo.from_json(json)
# print the JSON string representation of the object
print(InferenceProfileDeploymentInfo.to_json())

# convert the object into a dict
inference_profile_deployment_info_dict = inference_profile_deployment_info_instance.to_dict()
# create an instance of InferenceProfileDeploymentInfo from a dict
inference_profile_deployment_info_from_dict = InferenceProfileDeploymentInfo.from_dict(inference_profile_deployment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


