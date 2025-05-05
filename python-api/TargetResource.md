# TargetResource

target resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace that contains the target resource. | 
**name** | **str** | Name of the target resource. | 
**target_type** | [**TargetResourceTypes**](TargetResourceTypes.md) |  | [optional] 
**access_info** | **Dict[str, object]** | Parameters required for accessing the model. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.target_resource import TargetResource

# TODO update the JSON string below
json = "{}"
# create an instance of TargetResource from a JSON string
target_resource_instance = TargetResource.from_json(json)
# print the JSON string representation of the object
print(TargetResource.to_json())

# convert the object into a dict
target_resource_dict = target_resource_instance.to_dict()
# create an instance of TargetResource from a dict
target_resource_from_dict = TargetResource.from_dict(target_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


