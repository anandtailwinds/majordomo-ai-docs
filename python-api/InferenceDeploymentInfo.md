# InferenceDeploymentInfo

Information about the deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_info** | [**ContainerInfo**](ContainerInfo.md) |  | [optional] 
**kserve_info** | [**KserveInfo**](KserveInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.inference_deployment_info import InferenceDeploymentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InferenceDeploymentInfo from a JSON string
inference_deployment_info_instance = InferenceDeploymentInfo.from_json(json)
# print the JSON string representation of the object
print(InferenceDeploymentInfo.to_json())

# convert the object into a dict
inference_deployment_info_dict = inference_deployment_info_instance.to_dict()
# create an instance of InferenceDeploymentInfo from a dict
inference_deployment_info_from_dict = InferenceDeploymentInfo.from_dict(inference_deployment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


