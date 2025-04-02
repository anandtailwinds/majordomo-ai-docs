# ComputeProfile

compute profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the compute profile. | 
**type** | [**ComputeTypes**](ComputeTypes.md) |  | [optional] 
**tags** | **List[str]** | Tags to describe the compute where it is running or what its purpose is. | [optional] 
**workspace** | **str** | The workspace that contains the compute profile. | 
**requested_status** | [**DeploymentStatus**](DeploymentStatus.md) |  | [optional] 
**container** | [**ContainerReference**](ContainerReference.md) |  | [optional] 
**access_info** | **Dict[str, object]** | Access information for contacting the compute node including location of keys etc. | [optional] 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.compute_profile import ComputeProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeProfile from a JSON string
compute_profile_instance = ComputeProfile.from_json(json)
# print the JSON string representation of the object
print(ComputeProfile.to_json())

# convert the object into a dict
compute_profile_dict = compute_profile_instance.to_dict()
# create an instance of ComputeProfile from a dict
compute_profile_from_dict = ComputeProfile.from_dict(compute_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


