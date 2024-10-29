# WorkspaceInfo

Workspace configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the workspace. | 
**worker_name** | **str** | Name of the worker associated with the workspace. | 
**model_profiles** | **List[str]** | The list of model profiles that are enabled for this workspace. | [optional] 
**vectordb_profiles** | **List[str]** | The list of vectordb profiles that are enabled for this workspace. | [optional] 
**monitor_profile** | **str** | The monitoring profile enabled for this workspace. | [optional] 
**created_by** | **str** | The username who created this workspace. | 
**created_at** | **int** | Timestamp of the workspace creation. | 
**last_update** | **int** | Timestamp of the last update to the workspace. | 

## Example

```python
from majordomoai.models.workspace_info import WorkspaceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceInfo from a JSON string
workspace_info_instance = WorkspaceInfo.from_json(json)
# print the JSON string representation of the object
print(WorkspaceInfo.to_json())

# convert the object into a dict
workspace_info_dict = workspace_info_instance.to_dict()
# create an instance of WorkspaceInfo from a dict
workspace_info_from_dict = WorkspaceInfo.from_dict(workspace_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


