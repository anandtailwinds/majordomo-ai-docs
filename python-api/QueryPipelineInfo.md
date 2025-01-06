# QueryPipelineInfo

Query Pipeline configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspace in which the data store is present. | 
**name** | **str** | Name of the query pipeline. | 
**data_store_names** | **List[str]** | The list of data stores to be used in the query. | [optional] 
**query_type** | [**QueryTypes**](QueryTypes.md) |  | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 
**embedding_model_profile** | **str** | The name of the model profile to use for accessing the embedding models. | [optional] 
**embedding_model** | **str** | The embedding model to be used. | [optional] 
**llm_model_profile** | **str** | The name of the model profile to use for accessing the LLM models. | [optional] 
**llm_model** | **str** | The LLM model to be used. | [optional] 
**created_by** | **str** | The user who created the ingest pipeline. | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 
**extra_info** | **str** | For any queries that are performed using this pipeline, this content will be used to augment the context that is provided along with the question. For example, by default the context for SQL tables will contain the table schemas, however if we want to detail more information about the tables for all the queries, then it can be added here instead of repeating for each query. | [optional] 
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


