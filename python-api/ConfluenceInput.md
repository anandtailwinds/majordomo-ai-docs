# ConfluenceInput

The parameters used to access Confluence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_ids** | **List[str]** | Page_id content to be ingested. | 
**base_url** | **str** | Name of the base URL incase of Confluence. | 
**attachments** | **bool** | If this option is set to True, it will retrieve the documents present in the confluence attachments. | 

## Example

```python
from majordomo_ai.models.confluence_input import ConfluenceInput

# TODO update the JSON string below
json = "{}"
# create an instance of ConfluenceInput from a JSON string
confluence_input_instance = ConfluenceInput.from_json(json)
# print the JSON string representation of the object
print(ConfluenceInput.to_json())

# convert the object into a dict
confluence_input_dict = confluence_input_instance.to_dict()
# create an instance of ConfluenceInput from a dict
confluence_input_from_dict = ConfluenceInput.from_dict(confluence_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


