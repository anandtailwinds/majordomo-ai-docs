# InfraProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infra_profiles** | [**List[InfraProfileInfo]**](InfraProfileInfo.md) |  | [optional] 
**shared_profiles** | [**List[InfraProfileInfo]**](InfraProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.infra_profiles import InfraProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of InfraProfiles from a JSON string
infra_profiles_instance = InfraProfiles.from_json(json)
# print the JSON string representation of the object
print(InfraProfiles.to_json())

# convert the object into a dict
infra_profiles_dict = infra_profiles_instance.to_dict()
# create an instance of InfraProfiles from a dict
infra_profiles_from_dict = InfraProfiles.from_dict(infra_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


