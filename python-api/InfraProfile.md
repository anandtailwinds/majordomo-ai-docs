# InfraProfile

infra profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the infra profile. | 
**infra_type** | [**InfraTypes**](InfraTypes.md) |  | 
**tags** | **List[str]** | Tags to describe the infra where it is running or what its purpose is. | [optional] 
**workspace** | **str** | The workspace that contains the infra profile. | 
**requested_status** | [**DeploymentStatus**](DeploymentStatus.md) |  | 
**instance_info** | **Dict[str, object]** | Access information for contacting the infra node including location of keys etc. | 
**access_info** | **Dict[str, object]** | Access information for contacting the infra node including location of keys etc. | [optional] 

## Example

```python
from majordomo_ai.models.infra_profile import InfraProfile

# TODO update the JSON string below
json = "{}"
# create an instance of InfraProfile from a JSON string
infra_profile_instance = InfraProfile.from_json(json)
# print the JSON string representation of the object
print(InfraProfile.to_json())

# convert the object into a dict
infra_profile_dict = infra_profile_instance.to_dict()
# create an instance of InfraProfile from a dict
infra_profile_from_dict = InfraProfile.from_dict(infra_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


