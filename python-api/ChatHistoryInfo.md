# ChatHistoryInfo

Chat history of a particular user saved with a specific name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | The user to whom these chats belong to. | 
**name** | **str** | Name of the chat history. | 
**qa_list** | [**List[ChatQA]**](ChatQA.md) | History of question answer interactions of the user. | [optional] 
**last_update** | **int** | Timestamp of the last update to the data store. | 
**notes** | **str** | User notes for the chat history. This can contain information such as model used, parameters used etc. and can be populated upto 250 characters. | [optional] 

## Example

```python
from majordomo_ai.models.chat_history_info import ChatHistoryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChatHistoryInfo from a JSON string
chat_history_info_instance = ChatHistoryInfo.from_json(json)
# print the JSON string representation of the object
print(ChatHistoryInfo.to_json())

# convert the object into a dict
chat_history_info_dict = chat_history_info_instance.to_dict()
# create an instance of ChatHistoryInfo from a dict
chat_history_info_from_dict = ChatHistoryInfo.from_dict(chat_history_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


