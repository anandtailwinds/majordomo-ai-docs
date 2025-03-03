# AWSS3Credentials

The parameters used to access AWS S3.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_access_key** | **str** | AWS Access Key | [optional] 
**aws_secret_token** | **str** | AWS Secret Token | [optional] 

## Example

```python
from majordomo_ai.models.awss3_credentials import AWSS3Credentials

# TODO update the JSON string below
json = "{}"
# create an instance of AWSS3Credentials from a JSON string
awss3_credentials_instance = AWSS3Credentials.from_json(json)
# print the JSON string representation of the object
print(AWSS3Credentials.to_json())

# convert the object into a dict
awss3_credentials_dict = awss3_credentials_instance.to_dict()
# create an instance of AWSS3Credentials from a dict
awss3_credentials_from_dict = AWSS3Credentials.from_dict(awss3_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


