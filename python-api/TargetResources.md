# TargetResources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_resources** | [**List[TargetResourceInfo]**](TargetResourceInfo.md) |  | [optional] 
**shared_resources** | [**List[TargetResourceInfo]**](TargetResourceInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.target_resources import TargetResources

# TODO update the JSON string below
json = "{}"
# create an instance of TargetResources from a JSON string
target_resources_instance = TargetResources.from_json(json)
# print the JSON string representation of the object
print(TargetResources.to_json())

# convert the object into a dict
target_resources_dict = target_resources_instance.to_dict()
# create an instance of TargetResources from a dict
target_resources_from_dict = TargetResources.from_dict(target_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


