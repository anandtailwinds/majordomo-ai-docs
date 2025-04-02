# ComputeProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_profiles** | [**List[ComputeProfileInfo]**](ComputeProfileInfo.md) |  | [optional] 
**shared_profiles** | [**List[ComputeProfileInfo]**](ComputeProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.compute_profiles import ComputeProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeProfiles from a JSON string
compute_profiles_instance = ComputeProfiles.from_json(json)
# print the JSON string representation of the object
print(ComputeProfiles.to_json())

# convert the object into a dict
compute_profiles_dict = compute_profiles_instance.to_dict()
# create an instance of ComputeProfiles from a dict
compute_profiles_from_dict = ComputeProfiles.from_dict(compute_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


