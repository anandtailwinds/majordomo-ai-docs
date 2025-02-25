# ChatMessages

Information about the specific chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **str** | Unique identifier for the chat. | 
**chat_name** | **str** | Name of the chat history. | [optional] 
**created_by** | **str** | Name of the user who created the chat conversations. | 
**last_update** | **int** | Timestamp of the last update to the chat history. | 
**messages** | [**List[ChatMessage]**](ChatMessage.md) | The list of chat messages in this chat. | 

## Example

```python
from majordomo_ai.models.chat_messages import ChatMessages

# TODO update the JSON string below
json = "{}"
# create an instance of ChatMessages from a JSON string
chat_messages_instance = ChatMessages.from_json(json)
# print the JSON string representation of the object
print(ChatMessages.to_json())

# convert the object into a dict
chat_messages_dict = chat_messages_instance.to_dict()
# create an instance of ChatMessages from a dict
chat_messages_from_dict = ChatMessages.from_dict(chat_messages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


