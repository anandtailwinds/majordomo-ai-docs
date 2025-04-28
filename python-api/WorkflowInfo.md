# WorkflowInfo

Model profile Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**Workflow**](Workflow.md) |  | 
**created_by** | **str** | The username who created this model profile | 
**created_at** | **int** | Timestamp of the model profile creation | 
**last_update** | **int** | Timestamp of the last update to the model profile | 

## Example

```python
from majordomo_ai.models.workflow_info import WorkflowInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowInfo from a JSON string
workflow_info_instance = WorkflowInfo.from_json(json)
# print the JSON string representation of the object
print(WorkflowInfo.to_json())

# convert the object into a dict
workflow_info_dict = workflow_info_instance.to_dict()
# create an instance of WorkflowInfo from a dict
workflow_info_from_dict = WorkflowInfo.from_dict(workflow_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


