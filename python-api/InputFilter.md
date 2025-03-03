# InputFilter

The parameters used to filter file(s) for ingestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_blob_input** | [**AzureBlobInput**](AzureBlobInput.md) |  | [optional] 
**aws_s3_input** | [**AWSS3Input**](AWSS3Input.md) |  | [optional] 
**webpage_input** | [**WebpageInput**](WebpageInput.md) |  | [optional] 
**local_input** | [**LocalInput**](LocalInput.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.input_filter import InputFilter

# TODO update the JSON string below
json = "{}"
# create an instance of InputFilter from a JSON string
input_filter_instance = InputFilter.from_json(json)
# print the JSON string representation of the object
print(InputFilter.to_json())

# convert the object into a dict
input_filter_dict = input_filter_instance.to_dict()
# create an instance of InputFilter from a dict
input_filter_from_dict = InputFilter.from_dict(input_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


