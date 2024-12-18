# ChatQA

The user question and answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **str** | A unique identifier for the question and answer. | 
**question** | **str** | The user question for which completion or answer is sought. | 
**answer** | **str** | The answer obtained from Gen AI. | 

## Example

```python
from majordomo_ai.models.chat_qa import ChatQA

# TODO update the JSON string below
json = "{}"
# create an instance of ChatQA from a JSON string
chat_qa_instance = ChatQA.from_json(json)
# print the JSON string representation of the object
print(ChatQA.to_json())

# convert the object into a dict
chat_qa_dict = chat_qa_instance.to_dict()
# create an instance of ChatQA from a dict
chat_qa_from_dict = ChatQA.from_dict(chat_qa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


