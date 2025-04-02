# AppInfo

Application connection information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_type** | [**DataStoreSubTypes**](DataStoreSubTypes.md) |  | 
**access_info** | **Dict[str, object]** | Any endpoint that is to be specified to reach the data store. | 
**instance_info** | **Dict[str, object]** | Information specific to the instance of the application. | [optional] 
**contents** | **str** | A description of the contents of the application store. This may be used to specify schema aor other nuances of a database etc. and is used during queries if present. | [optional] 

## Example

```python
from majordomo_ai.models.app_info import AppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfo from a JSON string
app_info_instance = AppInfo.from_json(json)
# print the JSON string representation of the object
print(AppInfo.to_json())

# convert the object into a dict
app_info_dict = app_info_instance.to_dict()
# create an instance of AppInfo from a dict
app_info_from_dict = AppInfo.from_dict(app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


