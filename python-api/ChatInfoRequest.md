# ChatInfoRequest

Information about the chat information such as name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **str** | Unique identifier for the chat. | 
**chat_name** | **str** | Name of the chat history. | [optional] 
**workspace** | **str** | Name of the workspace for the worker to reach the chat database. | 

## Example

```python
from majordomo_ai.models.chat_info_request import ChatInfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChatInfoRequest from a JSON string
chat_info_request_instance = ChatInfoRequest.from_json(json)
# print the JSON string representation of the object
print(ChatInfoRequest.to_json())

# convert the object into a dict
chat_info_request_dict = chat_info_request_instance.to_dict()
# create an instance of ChatInfoRequest from a dict
chat_info_request_from_dict = ChatInfoRequest.from_dict(chat_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


