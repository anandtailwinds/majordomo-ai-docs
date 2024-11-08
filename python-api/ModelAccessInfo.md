# ModelAccessInfo

Model profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | The region in case of cloud Provider. | [optional] 

## Example

```python
from majordomo_ai.models.model_access_info import ModelAccessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelAccessInfo from a JSON string
model_access_info_instance = ModelAccessInfo.from_json(json)
# print the JSON string representation of the object
print(ModelAccessInfo.to_json())

# convert the object into a dict
model_access_info_dict = model_access_info_instance.to_dict()
# create an instance of ModelAccessInfo from a dict
model_access_info_from_dict = ModelAccessInfo.from_dict(model_access_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


