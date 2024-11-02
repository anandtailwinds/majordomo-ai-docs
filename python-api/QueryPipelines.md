# QueryPipelines


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_pipelines** | [**List[QueryPipelineInfo]**](QueryPipelineInfo.md) |  | [optional] 

## Example

```python
from majordomo_ai.models.query_pipelines import QueryPipelines

# TODO update the JSON string below
json = "{}"
# create an instance of QueryPipelines from a JSON string
query_pipelines_instance = QueryPipelines.from_json(json)
# print the JSON string representation of the object
print(QueryPipelines.to_json())

# convert the object into a dict
query_pipelines_dict = query_pipelines_instance.to_dict()
# create an instance of QueryPipelines from a dict
query_pipelines_from_dict = QueryPipelines.from_dict(query_pipelines_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


