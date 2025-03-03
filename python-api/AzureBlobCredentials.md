# AzureBlobCredentials

The parameters used to access Azure Blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**az_client_id** | **str** | Azure Client ID. | [optional] 
**az_client_secret** | **str** | Azure Client Secret. | [optional] 
**az_tenant_id** | **str** | Azure Tenant ID. | [optional] 

## Example

```python
from majordomo_ai.models.azure_blob_credentials import AzureBlobCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobCredentials from a JSON string
azure_blob_credentials_instance = AzureBlobCredentials.from_json(json)
# print the JSON string representation of the object
print(AzureBlobCredentials.to_json())

# convert the object into a dict
azure_blob_credentials_dict = azure_blob_credentials_instance.to_dict()
# create an instance of AzureBlobCredentials from a dict
azure_blob_credentials_from_dict = AzureBlobCredentials.from_dict(azure_blob_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


