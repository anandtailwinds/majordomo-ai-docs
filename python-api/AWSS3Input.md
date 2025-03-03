# AWSS3Input

The parameters used to access AWS S3.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_list** | **List[str]** | File list to be ingested, wild cards are allowed. | 
**s3_bucket** | **str** | Name of the S3 bucket in case of AWS storage. | 

## Example

```python
from majordomo_ai.models.awss3_input import AWSS3Input

# TODO update the JSON string below
json = "{}"
# create an instance of AWSS3Input from a JSON string
awss3_input_instance = AWSS3Input.from_json(json)
# print the JSON string representation of the object
print(AWSS3Input.to_json())

# convert the object into a dict
awss3_input_dict = awss3_input_instance.to_dict()
# create an instance of AWSS3Input from a dict
awss3_input_from_dict = AWSS3Input.from_dict(awss3_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


