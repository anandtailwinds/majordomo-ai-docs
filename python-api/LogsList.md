# LogsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | **List[str]** | The current status of inference obtained from Kserve. | 

## Example

```python
from majordomo_ai.models.logs_list import LogsList

# TODO update the JSON string below
json = "{}"
# create an instance of LogsList from a JSON string
logs_list_instance = LogsList.from_json(json)
# print the JSON string representation of the object
print(LogsList.to_json())

# convert the object into a dict
logs_list_dict = logs_list_instance.to_dict()
# create an instance of LogsList from a dict
logs_list_from_dict = LogsList.from_dict(logs_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


