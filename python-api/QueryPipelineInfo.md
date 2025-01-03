# QueryPipelineInfo

Query Pipeline configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspce in which the data store is present. | 
**name** | **str** | Name of the query pipeline. | 
**query_type** | [**QueryTypes**](QueryTypes.md) |  | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 
**vectordb_query_params** | [**VectordbQueryParams**](VectordbQueryParams.md) |  | [optional] 
**structdb_query_params** | [**StructdbQueryParams**](StructdbQueryParams.md) |  | [optional] 
**created_by** | **str** | The user who created the ingest pipeline. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 
**created_at** | **int** | Timestamp of the query pipeline creation. | 
**last_update** | **int** | Timestamp of the last update to the query pipeline. | 

## Example

```python
from majordomo_ai.models.query_pipeline_info import QueryPipelineInfo

# TODO update the JSON string below
json = "{}"
# create an instance of QueryPipelineInfo from a JSON string
query_pipeline_info_instance = QueryPipelineInfo.from_json(json)
# print the JSON string representation of the object
print(QueryPipelineInfo.to_json())

# convert the object into a dict
query_pipeline_info_dict = query_pipeline_info_instance.to_dict()
# create an instance of QueryPipelineInfo from a dict
query_pipeline_info_from_dict = QueryPipelineInfo.from_dict(query_pipeline_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


