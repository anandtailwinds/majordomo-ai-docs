# Workspace

The user workspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the workspace. | 
**worker_name** | **str** | Name of the worker associated with the workspace. | 
**monitor_profile** | **str** | The monitoring profile enabled for this workspace. | [optional] 
**active_users** | **List[str]** | The list of users enabled for the workspace. | [optional] 

## Example

```python
from majordomo_ai.models.workspace import Workspace

# TODO update the JSON string below
json = "{}"
# create an instance of Workspace from a JSON string
workspace_instance = Workspace.from_json(json)
# print the JSON string representation of the object
print(Workspace.to_json())

# convert the object into a dict
workspace_dict = workspace_instance.to_dict()
# create an instance of Workspace from a dict
workspace_from_dict = Workspace.from_dict(workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


