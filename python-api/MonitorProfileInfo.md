# MonitorProfileInfo

This describes the details of a particular monitor profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the monitor profile. | 
**provider** | [**MonitorProviders**](MonitorProviders.md) |  | 
**endpoint** | **str** | URL of the monitoring tool endpoint. | 
**access_key** | **str** | Access Key for accessing the monitoring tool. | [optional] 
**created_by** | **str** | Identifies the user who created this monitor profile. | 
**created_at** | **int** | Timestamp of the monitor profile creation. | 
**last_update** | **int** | Timestamp of the last update to the monitor profile. | 

## Example

```python
from majordomoai.models.monitor_profile_info import MonitorProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorProfileInfo from a JSON string
monitor_profile_info_instance = MonitorProfileInfo.from_json(json)
# print the JSON string representation of the object
print(MonitorProfileInfo.to_json())

# convert the object into a dict
monitor_profile_info_dict = monitor_profile_info_instance.to_dict()
# create an instance of MonitorProfileInfo from a dict
monitor_profile_info_from_dict = MonitorProfileInfo.from_dict(monitor_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


