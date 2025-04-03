# KserveInfo

Information about the model to be deployed. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_source** | [**ModelSources**](ModelSources.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.kserve_info import KserveInfo

# TODO update the JSON string below
json = "{}"
# create an instance of KserveInfo from a JSON string
kserve_info_instance = KserveInfo.from_json(json)
# print the JSON string representation of the object
print(KserveInfo.to_json())

# convert the object into a dict
kserve_info_dict = kserve_info_instance.to_dict()
# create an instance of KserveInfo from a dict
kserve_info_from_dict = KserveInfo.from_dict(kserve_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


