# WorkflowStep

Workflow step information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the step. | 
**args** | **Dict[str, object]** | Workflow specific data. | 

## Example

```python
from majordomo_ai.models.workflow_step import WorkflowStep

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowStep from a JSON string
workflow_step_instance = WorkflowStep.from_json(json)
# print the JSON string representation of the object
print(WorkflowStep.to_json())

# convert the object into a dict
workflow_step_dict = workflow_step_instance.to_dict()
# create an instance of WorkflowStep from a dict
workflow_step_from_dict = WorkflowStep.from_dict(workflow_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


