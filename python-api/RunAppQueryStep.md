# RunAppQueryStep

Application Database Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_name** | **str** | The name of the data store to lookup. | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.run_app_query_step import RunAppQueryStep

# TODO update the JSON string below
json = "{}"
# create an instance of RunAppQueryStep from a JSON string
run_app_query_step_instance = RunAppQueryStep.from_json(json)
# print the JSON string representation of the object
print(RunAppQueryStep.to_json())

# convert the object into a dict
run_app_query_step_dict = run_app_query_step_instance.to_dict()
# create an instance of RunAppQueryStep from a dict
run_app_query_step_from_dict = RunAppQueryStep.from_dict(run_app_query_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


