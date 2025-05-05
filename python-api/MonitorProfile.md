# MonitorProfile

This describes the details of a particular monitor profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the monitor profile. | 
**workspace** | **str** | The workspace for the monitor profile. | 
**provider** | [**MonitorProviders**](MonitorProviders.md) |  | 
**access_info** | **Dict[str, object]** | The information to access the monitoring tool. | 

## Example

```python
from majordomo_ai.models.monitor_profile import MonitorProfile

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorProfile from a JSON string
monitor_profile_instance = MonitorProfile.from_json(json)
# print the JSON string representation of the object
print(MonitorProfile.to_json())

# convert the object into a dict
monitor_profile_dict = monitor_profile_instance.to_dict()
# create an instance of MonitorProfile from a dict
monitor_profile_from_dict = MonitorProfile.from_dict(monitor_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


