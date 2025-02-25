# ChatEntry

Information about a specific chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **str** | Unique identifier for the chat. | 
**messages** | [**List[ChatMessage]**](ChatMessage.md) | The list of chat messages in this chat. | 

## Example

```python
from majordomo_ai.models.chat_entry import ChatEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ChatEntry from a JSON string
chat_entry_instance = ChatEntry.from_json(json)
# print the JSON string representation of the object
print(ChatEntry.to_json())

# convert the object into a dict
chat_entry_dict = chat_entry_instance.to_dict()
# create an instance of ChatEntry from a dict
chat_entry_from_dict = ChatEntry.from_dict(chat_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


