# QueryPipelineInfo

Query Pipeline configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspce in which the data store is present. | 
**user_name** | **str** | The user who created the ingest pipeline. | 
**name** | **str** | Name of the query pipeline. | 
**data_store_names** | **List[str]** | The type of the parent data store. | [optional] 
**embedding_model** | **str** | The embedding model to be used | 
**llm_model** | **str** | The LLM model to be used | 
**query_type** | [**QueryTypes**](QueryTypes.md) |  | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 
**created_at** | **int** | Timestamp of the query pipeline creation. | 
**last_update** | **int** | Timestamp of the last update to the query pipeline. | 

## Example

```python
from majordomoai.models.query_pipeline_info import QueryPipelineInfo

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


