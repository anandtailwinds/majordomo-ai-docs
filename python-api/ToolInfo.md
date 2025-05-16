# ToolInfo

Tool Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**Tool**](Tool.md) |  | 
**supported_operations** | [**List[SupportedOperations]**](SupportedOperations.md) | Tool operations supported. | [optional] 
**created_by** | **str** | The username who created this tool. | 
**created_at** | **int** | Timestamp of the model profile creation. | 
**last_update** | **int** | Timestamp of the last update to the model profile. | 

## Example

```python
from majordomo_ai.models.tool_info import ToolInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ToolInfo from a JSON string
tool_info_instance = ToolInfo.from_json(json)
# print the JSON string representation of the object
print(ToolInfo.to_json())

# convert the object into a dict
tool_info_dict = tool_info_instance.to_dict()
# create an instance of ToolInfo from a dict
tool_info_from_dict = ToolInfo.from_dict(tool_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


