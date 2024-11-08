# MonitorAccessKey

Monitor access keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | Access Key for accessing the model. It is possible to specify the access key as a secret value using either of the following formats {Azure:KeyVault-Name:Key} or {AWS:SecretName:Key} or {AWS:Region:SecretName:Key}. | [optional] 

## Example

```python
from majordomo_ai.models.monitor_access_key import MonitorAccessKey

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorAccessKey from a JSON string
monitor_access_key_instance = MonitorAccessKey.from_json(json)
# print the JSON string representation of the object
print(MonitorAccessKey.to_json())

# convert the object into a dict
monitor_access_key_dict = monitor_access_key_instance.to_dict()
# create an instance of MonitorAccessKey from a dict
monitor_access_key_from_dict = MonitorAccessKey.from_dict(monitor_access_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


