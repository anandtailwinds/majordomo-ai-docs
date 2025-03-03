# AzureBlobInput

The parameters used to access Azure Blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_list** | **List[str]** | File list to be ingested, wild cards are allowed. | 
**az_container** | **str** | Name of the container incase of Azure storage. | 
**az_account_url** | **str** | Name of the account URL incase of Azure storage. | 

## Example

```python
from majordomo_ai.models.azure_blob_input import AzureBlobInput

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobInput from a JSON string
azure_blob_input_instance = AzureBlobInput.from_json(json)
# print the JSON string representation of the object
print(AzureBlobInput.to_json())

# convert the object into a dict
azure_blob_input_dict = azure_blob_input_instance.to_dict()
# create an instance of AzureBlobInput from a dict
azure_blob_input_from_dict = AzureBlobInput.from_dict(azure_blob_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


