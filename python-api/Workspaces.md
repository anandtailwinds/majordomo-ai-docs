# Workspaces


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaces** | [**List[WorkspaceInfo]**](WorkspaceInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.workspaces import Workspaces

# TODO update the JSON string below
json = "{}"
# create an instance of Workspaces from a JSON string
workspaces_instance = Workspaces.from_json(json)
# print the JSON string representation of the object
print(Workspaces.to_json())

# convert the object into a dict
workspaces_dict = workspaces_instance.to_dict()
# create an instance of Workspaces from a dict
workspaces_from_dict = Workspaces.from_dict(workspaces_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


