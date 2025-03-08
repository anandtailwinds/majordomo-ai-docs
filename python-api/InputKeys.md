# InputKeys

Security keys required to access the input files. Not recommended in production

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_blob_credentials** | [**AzureBlobCredentials**](AzureBlobCredentials.md) |  | [optional] 
**aws_s3_credentials** | [**AWSS3Credentials**](AWSS3Credentials.md) |  | [optional] 
**confluence_credentials** | [**ConfluenceCredentials**](ConfluenceCredentials.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.input_keys import InputKeys

# TODO update the JSON string below
json = "{}"
# create an instance of InputKeys from a JSON string
input_keys_instance = InputKeys.from_json(json)
# print the JSON string representation of the object
print(InputKeys.to_json())

# convert the object into a dict
input_keys_dict = input_keys_instance.to_dict()
# create an instance of InputKeys from a dict
input_keys_from_dict = InputKeys.from_dict(input_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


