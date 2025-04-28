# Workflow

Workflow information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspace in which the workflow is triggered. | 
**name** | **str** | The id that uniquely identifies this workflow. | 
**workflow_type** | **str** | The type of workflow, custom types are allowed as long as it is  supported in the worker.  | 
**workflow_provider** | [**WorkflowProviders**](WorkflowProviders.md) |  | [optional] 
**contents** | **str** | Describes the work done by the workflow. | [optional] 
**steps** | [**List[WorkflowStep]**](WorkflowStep.md) | Workflow specific data. | 
**shared_users** | **List[str]** | The list of users this workflow is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.workflow import Workflow

# TODO update the JSON string below
json = "{}"
# create an instance of Workflow from a JSON string
workflow_instance = Workflow.from_json(json)
# print the JSON string representation of the object
print(Workflow.to_json())

# convert the object into a dict
workflow_dict = workflow_instance.to_dict()
# create an instance of Workflow from a dict
workflow_from_dict = Workflow.from_dict(workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


