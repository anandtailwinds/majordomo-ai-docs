# ModelEndpoints

Model profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_region** | **str** | The AWS region in case of AWS Bedrock Provider. | [optional] 

## Example

```python
from majordomo_ai.models.model_endpoints import ModelEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of ModelEndpoints from a JSON string
model_endpoints_instance = ModelEndpoints.from_json(json)
# print the JSON string representation of the object
print(ModelEndpoints.to_json())

# convert the object into a dict
model_endpoints_dict = model_endpoints_instance.to_dict()
# create an instance of ModelEndpoints from a dict
model_endpoints_from_dict = ModelEndpoints.from_dict(model_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


