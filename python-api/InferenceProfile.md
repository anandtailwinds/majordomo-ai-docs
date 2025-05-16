# InferenceProfile

This contains information specific to an inference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the inference deployment. | 
**workspace** | **str** | Workspace in which the data store is present. | 
**model_name** | **str** | Details of the model in the model catalog to be deployed.  | 
**target_resource_name** | **str** | Details of the target resource in which the model is deployed.  | 
**runtime_info** | **Dict[str, object]** |  Optional parameters for deployment.  &lt;b&gt;Target type is TARGET_TYPE_CPU or TARGET_TYPE_GPU&lt;/b&gt;:  container_name: The name of the run time container that will be running the model.  ports: The list of ports to expose for the model container.  volumes: The volumes to mount onto the model container. The volume should be present in the compute resource that runs the container.  &lt;b&gt;Common for all target types&lt;/b&gt;  environment: The env vars to be added to the model container.  cmd_override: The new command to override the CMD of the model container.  &lt;b&gt;Target type is TARGET_TYPE_KSERVE_CLUSTER&lt;/b&gt;:  namespace: The Kubernetes namespace in which to run the inference.  min_scale: The minimum number of instances of the model to be run in the cluster.  max_scale: The maximum number of instances of the model to be run in the cluster.  target: The number of concurrent requests a pod can handle before scaling occurs.  | [optional] 
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


