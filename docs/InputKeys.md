# InputKeys

Security keys required to access the input files. Not recommended in production

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**az_client_id** | **str** | Azure Client ID. | [optional] 
**az_client_secret** | **str** | Azure Client Secret. | [optional] 
**az_tenant_id** | **str** | Azure Tenant ID. | [optional] 
**aws_access_key** | **str** | AWS Access Key | [optional] 
**aws_secret_token** | **str** | AWS Secret Token | [optional] 

## Example

```python
from openapi_client.models.input_keys import InputKeys

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


