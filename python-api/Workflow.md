# Workflow

Workflow information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**workflow_type** | [**WorkflowTypes**](WorkflowTypes.md) |  | 
**contents** | **str** | Describes the work done by the workflow. | [optional] 
**user_name** | **str** | Name of the user triggering the workflow. | 
**workspace** | **str** | Workspace in which the workflow is triggered. | 
**steps** | [**List[WorkflowStep]**](WorkflowStep.md) | Workflow specific data. | 

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


