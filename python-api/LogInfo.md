# LogInfo

The various logs that are generated filtered based on user, workspace and timeframes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspce in which the log was genereated. | 
**user_name** | **str** | The user for which this log was generated. | 
**log_level** | [**LogLevels**](LogLevels.md) |  | 
**topic** | **str** | The topic of the log message. | 
**timestamp** | **int** | The timestamp of the generated log message. | 
**message** | **str** | The log message generated for the user. | 

## Example

```python
from majordomo_ai.models.log_info import LogInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LogInfo from a JSON string
log_info_instance = LogInfo.from_json(json)
# print the JSON string representation of the object
print(LogInfo.to_json())

# convert the object into a dict
log_info_dict = log_info_instance.to_dict()
# create an instance of LogInfo from a dict
log_info_from_dict = LogInfo.from_dict(log_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


