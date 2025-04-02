# SelectWorkflowStep

Select and execute one or more query workflows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llm_model_info** | [**ModelInfo**](ModelInfo.md) |  | 
**query_string** | **str** | Query string. | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 
**workflows** | [**List[Workflow]**](Workflow.md) | Workflow list | 

## Example

```python
from majordomo_ai.models.select_workflow_step import SelectWorkflowStep

# TODO update the JSON string below
json = "{}"
# create an instance of SelectWorkflowStep from a JSON string
select_workflow_step_instance = SelectWorkflowStep.from_json(json)
# print the JSON string representation of the object
print(SelectWorkflowStep.to_json())

# convert the object into a dict
select_workflow_step_dict = select_workflow_step_instance.to_dict()
# create an instance of SelectWorkflowStep from a dict
select_workflow_step_from_dict = SelectWorkflowStep.from_dict(select_workflow_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


