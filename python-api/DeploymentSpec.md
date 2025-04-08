# DeploymentSpec

This contains information specific to an inference deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_type** | [**DeploymentTypes**](DeploymentTypes.md) |  | [optional] 
**access_info** | **Dict[str, object]** | Access information for the deployment itself. | [optional] 
**deployment_info** | **Dict[str, object]** | Optional parameters for deployment. | [optional] 

## Example

```python
from majordomo_ai.models.deployment_spec import DeploymentSpec

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentSpec from a JSON string
deployment_spec_instance = DeploymentSpec.from_json(json)
# print the JSON string representation of the object
print(DeploymentSpec.to_json())

# convert the object into a dict
deployment_spec_dict = deployment_spec_instance.to_dict()
# create an instance of DeploymentSpec from a dict
deployment_spec_from_dict = DeploymentSpec.from_dict(deployment_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


