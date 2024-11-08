# Logs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | [**List[LogInfo]**](LogInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.logs import Logs

# TODO update the JSON string below
json = "{}"
# create an instance of Logs from a JSON string
logs_instance = Logs.from_json(json)
# print the JSON string representation of the object
print(Logs.to_json())

# convert the object into a dict
logs_dict = logs_instance.to_dict()
# create an instance of Logs from a dict
logs_from_dict = Logs.from_dict(logs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

