# ChatInfoList

List of saved chats of the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chats** | [**List[ChatInfoResponse]**](ChatInfoResponse.md) | The list of chats along with their last updated timestamp. | [optional] 

## Example

```python
from majordomo_ai.models.chat_info_list import ChatInfoList

# TODO update the JSON string below
json = "{}"
# create an instance of ChatInfoList from a JSON string
chat_info_list_instance = ChatInfoList.from_json(json)
# print the JSON string representation of the object
print(ChatInfoList.to_json())

# convert the object into a dict
chat_info_list_dict = chat_info_list_instance.to_dict()
# create an instance of ChatInfoList from a dict
chat_info_list_from_dict = ChatInfoList.from_dict(chat_info_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


