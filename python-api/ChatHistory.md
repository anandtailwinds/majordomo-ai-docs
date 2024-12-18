# ChatHistory

Information about the chat information such as name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Previous name of the chat history. | 
**new_name** | **str** | New name of the chat history. | [optional] 
**qa_list** | [**List[ChatQA]**](ChatQA.md) | History of question answer interactions of the user. | [optional] 
**notes** | **str** | User notes for the chat history. This can contain information such as model used, parameters used etc. and can be populated upto 250 characters. | [optional] 

## Example

```python
from majordomo_ai.models.chat_history import ChatHistory

# TODO update the JSON string below
json = "{}"
# create an instance of ChatHistory from a JSON string
chat_history_instance = ChatHistory.from_json(json)
# print the JSON string representation of the object
print(ChatHistory.to_json())

# convert the object into a dict
chat_history_dict = chat_history_instance.to_dict()
# create an instance of ChatHistory from a dict
chat_history_from_dict = ChatHistory.from_dict(chat_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


