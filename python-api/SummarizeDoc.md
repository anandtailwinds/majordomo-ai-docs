# SummarizeDoc

Mapping of file extractors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_model_profile** | **str** | The LLM model profile to be used in cases of any options that require it  such as summarization.  | 
**llm_model_name** | **str** | The LLM model to be used for summarization. | 
**summary_query** | **str** | The query to use while summarizing documents. | [optional] 
**additional_info** | **Dict[str, object]** | Additional information to be passed to summarizing process. | [optional] 

## Example

```python
from majordomo_ai.models.summarize_doc import SummarizeDoc

# TODO update the JSON string below
json = "{}"
# create an instance of SummarizeDoc from a JSON string
summarize_doc_instance = SummarizeDoc.from_json(json)
# print the JSON string representation of the object
print(SummarizeDoc.to_json())

# convert the object into a dict
summarize_doc_dict = summarize_doc_instance.to_dict()
# create an instance of SummarizeDoc from a dict
summarize_doc_from_dict = SummarizeDoc.from_dict(summarize_doc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


