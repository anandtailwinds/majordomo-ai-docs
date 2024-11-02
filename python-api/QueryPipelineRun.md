# QueryPipelineRun

Run an query pipeline immediately.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace this query pipeline belongs to. | 
**name** | **str** | Name of the query pipeline. | 
**query_string** | **str** | The query user wants to ask based on the Query Pipeline. | 

## Example

```python
from majordomo_ai.models.query_pipeline_run import QueryPipelineRun

# TODO update the JSON string below
json = "{}"
# create an instance of QueryPipelineRun from a JSON string
query_pipeline_run_instance = QueryPipelineRun.from_json(json)
# print the JSON string representation of the object
print(QueryPipelineRun.to_json())

# convert the object into a dict
query_pipeline_run_dict = query_pipeline_run_instance.to_dict()
# create an instance of QueryPipelineRun from a dict
query_pipeline_run_from_dict = QueryPipelineRun.from_dict(query_pipeline_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


