# MonitorAccessInfo

Monitor profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The host for the monitoring provider. | [optional] 

## Example

```python
from majordomo_ai.models.monitor_access_info import MonitorAccessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorAccessInfo from a JSON string
monitor_access_info_instance = MonitorAccessInfo.from_json(json)
# print the JSON string representation of the object
print(MonitorAccessInfo.to_json())

# convert the object into a dict
monitor_access_info_dict = monitor_access_info_instance.to_dict()
# create an instance of MonitorAccessInfo from a dict
monitor_access_info_from_dict = MonitorAccessInfo.from_dict(monitor_access_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


