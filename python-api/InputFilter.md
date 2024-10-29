# InputFilter

The parameters used to filter file(s) for ingestion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files_list** | **str** | Comma separated list of file(s) to be picked for ingestion. Supports wildcards | [optional] 
**az_blob** | **str** | Name of the blob incase of Azure storage. | [optional] 
**az_account_url** | **str** | Name of the account URL incase of Azure storage. | [optional] 
**s3_bucket** | **str** | Name of the S3 bucket in case of AWS storage. | [optional] 

## Example

```python
from majordomoai.models.input_filter import InputFilter

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


