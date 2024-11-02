# MonitorProfiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitor_profiles** | [**List[MonitorProfileInfo]**](MonitorProfileInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.monitor_profiles import MonitorProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorProfiles from a JSON string
monitor_profiles_instance = MonitorProfiles.from_json(json)
# print the JSON string representation of the object
print(MonitorProfiles.to_json())

# convert the object into a dict
monitor_profiles_dict = monitor_profiles_instance.to_dict()
# create an instance of MonitorProfiles from a dict
monitor_profiles_from_dict = MonitorProfiles.from_dict(monitor_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


