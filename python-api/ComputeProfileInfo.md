# ComputeProfileInfo

Compute profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the compute profile. | 
**tags** | **List[str]** | Tags to describe the compute where it is running or what its purpose is. | [optional] 
**type** | [**ComputeTypes**](ComputeTypes.md) |  | [optional] 
**workspace** | **str** | The workspace that contains the compute profile. | 
**container_name** | **str** | The registry URL for accessing the docker container with the model. | 
**models_running** | **List[str]** | The list of models running in the compute. | [optional] 
**current_status** | [**DeploymentStatus**](DeploymentStatus.md) |  | [optional] 
**access_info** | **Dict[str, object]** | Any access information required for downloading the model container from container registry. | [optional] 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.compute_profile_info import ComputeProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeProfileInfo from a JSON string
compute_profile_info_instance = ComputeProfileInfo.from_json(json)
# print the JSON string representation of the object
print(ComputeProfileInfo.to_json())

# convert the object into a dict
compute_profile_info_dict = compute_profile_info_instance.to_dict()
# create an instance of ComputeProfileInfo from a dict
compute_profile_info_from_dict = ComputeProfileInfo.from_dict(compute_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


