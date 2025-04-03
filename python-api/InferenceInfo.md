# InferenceInfo

This contains information specific to an inference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the inference deployment. | 
**workspace** | **str** | Workspace in which the data store is present. | 
**model_spec** | [**ModelSpec**](ModelSpec.md) |  | 
**model_runtime** | [**ModelRuntimes**](ModelRuntimes.md) |  | [optional] 
**deployment_type** | [**DeploymentTypes**](DeploymentTypes.md) |  | 
**deployment_info** | **Dict[str, object]** | Access information for contacting the physical infrastructure of the deployment. | 
**tags** | **List[str]** | Tags to describe the infra where it is running or what its purpose is. | [optional] 
**requested_status** | [**DeploymentStatus**](DeploymentStatus.md) |  | 
**current_status** | [**DeploymentStatus**](DeploymentStatus.md) |  | 
**created_by** | **str** | The username who created this model profile | 
**created_at** | **int** | Timestamp of the model profile creation | 
**last_update** | **int** | Timestamp of the last update to the model profile | 

## Example

```python
from majordomo_ai.models.inference_info import InferenceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceInfo from a JSON string
inference_info_instance = InferenceInfo.from_json(json)
# print the JSON string representation of the object
print(InferenceInfo.to_json())

# convert the object into a dict
inference_info_dict = inference_info_instance.to_dict()
# create an instance of InferenceInfo from a dict
inference_info_from_dict = InferenceInfo.from_dict(inference_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


