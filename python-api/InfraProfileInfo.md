# InfraProfileInfo

Infra profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the infra profile. | 
**tags** | **List[str]** | Tags to describe the infra where it is running or what its purpose is. | [optional] 
**type** | [**InfraTypes**](InfraTypes.md) |  | [optional] 
**workspace** | **str** | The workspace that contains the infra profile. | 
**current_status** | [**DeploymentStatus**](DeploymentStatus.md) |  | 
**access_info** | **Dict[str, object]** | Any access information required for downloading the model container from container registry. | [optional] 
**instance_info** | **Dict[str, object]** | Access information for contacting the infra node including location of keys etc. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 
**created_by** | **str** | The username who created this model profile | 
**created_at** | **int** | Timestamp of the model profile creation | 
**last_update** | **int** | Timestamp of the last update to the model profile | 

## Example

```python
from majordomo_ai.models.infra_profile_info import InfraProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InfraProfileInfo from a JSON string
infra_profile_info_instance = InfraProfileInfo.from_json(json)
# print the JSON string representation of the object
print(InfraProfileInfo.to_json())

# convert the object into a dict
infra_profile_info_dict = infra_profile_info_instance.to_dict()
# create an instance of InfraProfileInfo from a dict
infra_profile_info_from_dict = InfraProfileInfo.from_dict(infra_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


