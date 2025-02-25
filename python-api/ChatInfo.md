# ChatInfo

Information about the chat information such as name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **str** | Unique identifier for the chat. | 
**chat_name** | **str** | Name of the chat history. | [optional] 

## Example

```python
from majordomo_ai.models.chat_info import ChatInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChatInfo from a JSON string
chat_info_instance = ChatInfo.from_json(json)
# print the JSON string representation of the object
print(ChatInfo.to_json())

# convert the object into a dict
chat_info_dict = chat_info_instance.to_dict()
# create an instance of ChatInfo from a dict
chat_info_from_dict = ChatInfo.from_dict(chat_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


