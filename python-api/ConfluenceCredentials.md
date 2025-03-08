# ConfluenceCredentials

The parameters used to access Confluence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_name** | **str** | Confluence User Name. | 
**api_token** | **str** | Confluence API Token. | 
**space_key** | **str** | Confluence Space Key. | 

## Example

```python
from majordomo_ai.models.confluence_credentials import ConfluenceCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ConfluenceCredentials from a JSON string
confluence_credentials_instance = ConfluenceCredentials.from_json(json)
# print the JSON string representation of the object
print(ConfluenceCredentials.to_json())

# convert the object into a dict
confluence_credentials_dict = confluence_credentials_instance.to_dict()
# create an instance of ConfluenceCredentials from a dict
confluence_credentials_from_dict = ConfluenceCredentials.from_dict(confluence_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


