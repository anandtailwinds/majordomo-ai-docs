# WorkflowRun

Run an workflow immediately.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace this workflow belongs to. | 
**name** | **str** | Name of the workflow. | 
**run_args** | **Dict[str, object]** | The arguments for the workflow run. | [optional] 

## Example

```python
from majordomo_ai.models.workflow_run import WorkflowRun

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRun from a JSON string
workflow_run_instance = WorkflowRun.from_json(json)
# print the JSON string representation of the object
print(WorkflowRun.to_json())

# convert the object into a dict
workflow_run_dict = workflow_run_instance.to_dict()
# create an instance of WorkflowRun from a dict
workflow_run_from_dict = WorkflowRun.from_dict(workflow_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


