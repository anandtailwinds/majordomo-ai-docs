# Workflows


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflows** | [**List[WorkflowInfo]**](WorkflowInfo.md) |  | [optional] 
**shared_profiles** | [**List[WorkflowInfo]**](WorkflowInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.workflows import Workflows

# TODO update the JSON string below
json = "{}"
# create an instance of Workflows from a JSON string
workflows_instance = Workflows.from_json(json)
# print the JSON string representation of the object
print(Workflows.to_json())

# convert the object into a dict
workflows_dict = workflows_instance.to_dict()
# create an instance of Workflows from a dict
workflows_from_dict = Workflows.from_dict(workflows_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


