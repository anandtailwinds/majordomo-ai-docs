# TargetResourceInfo

Target resource Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**TargetResource**](TargetResource.md) |  | 
**created_by** | **str** | The username who created this target resource | 
**created_at** | **int** | Timestamp of the target resource creation | 
**last_update** | **int** | Timestamp of the last update to the target resource | 

## Example

```python
from majordomo_ai.models.target_resource_info import TargetResourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TargetResourceInfo from a JSON string
target_resource_info_instance = TargetResourceInfo.from_json(json)
# print the JSON string representation of the object
print(TargetResourceInfo.to_json())

# convert the object into a dict
target_resource_info_dict = target_resource_info_instance.to_dict()
# create an instance of TargetResourceInfo from a dict
target_resource_info_from_dict = TargetResourceInfo.from_dict(target_resource_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


