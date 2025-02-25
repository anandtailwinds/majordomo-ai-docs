# ChatInfoResponse

Information about the chat information such as name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **str** | Unique identifier for the chat. | 
**chat_name** | **str** | Name of the chat history. | 
**created_by** | **str** | Name of the user who created the chat conversations. | 
**last_update** | **int** | Timestamp of the last update to the chat history. | 

## Example

```python
from majordomo_ai.models.chat_info_response import ChatInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChatInfoResponse from a JSON string
chat_info_response_instance = ChatInfoResponse.from_json(json)
# print the JSON string representation of the object
print(ChatInfoResponse.to_json())

# convert the object into a dict
chat_info_response_dict = chat_info_response_instance.to_dict()
# create an instance of ChatInfoResponse from a dict
chat_info_response_from_dict = ChatInfoResponse.from_dict(chat_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


