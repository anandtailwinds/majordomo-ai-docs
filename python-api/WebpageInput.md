# WebpageInput

The parameters used to access a webpage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Webpage URL for ingestion. | 

## Example

```python
from majordomo_ai.models.webpage_input import WebpageInput

# TODO update the JSON string below
json = "{}"
# create an instance of WebpageInput from a JSON string
webpage_input_instance = WebpageInput.from_json(json)
# print the JSON string representation of the object
print(WebpageInput.to_json())

# convert the object into a dict
webpage_input_dict = webpage_input_instance.to_dict()
# create an instance of WebpageInput from a dict
webpage_input_from_dict = WebpageInput.from_dict(webpage_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


