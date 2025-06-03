# ChatMessage1

The query and answer of a particular chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **int** | A unique identifier for the question and answer. This is auto-generated. | [optional] 
**role** | **str** | The user question for which completion or answer is sought. | 
**content** | **str** | The answer obtained from Gen AI. | 

## Example

```python
from majordomo_ai.models.chat_message1 import ChatMessage1

# TODO update the JSON string below
json = "{}"
# create an instance of ChatMessage1 from a JSON string
chat_message1_instance = ChatMessage1.from_json(json)
# print the JSON string representation of the object
print(ChatMessage1.to_json())

# convert the object into a dict
chat_message1_dict = chat_message1_instance.to_dict()
# create an instance of ChatMessage1 from a dict
chat_message1_from_dict = ChatMessage1.from_dict(chat_message1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


