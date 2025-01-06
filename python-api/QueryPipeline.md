# QueryPipeline

Query Pipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace this query pipeline belongs to. | 
**name** | **str** | Name of the query pipeline. | 
**query_type** | [**QueryTypes**](QueryTypes.md) |  | 
**data_store_names** | **List[str]** | The list of data stores to be used in the query. | 
**embedding_model_profile** | **str** | The name of the model profile to use for accessing the embedding models. | [optional] 
**embedding_model** | **str** | The embedding model to be used. | [optional] 
**llm_model_profile** | **str** | The name of the model profile to use for accessing the LLM models. | 
**llm_model** | **str** | The LLM model to be used. | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 
**extra_info** | **str** | For any queries that are performed using this pipeline, this content will be used to augment the context that is provided along with the question. For example, by default the context for SQL tables will contain the table schemas, however if we want to detail more information about the tables for all the queries, then it can be added here instead of repeating for each query. | [optional] 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.query_pipeline import QueryPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of QueryPipeline from a JSON string
query_pipeline_instance = QueryPipeline.from_json(json)
# print the JSON string representation of the object
print(QueryPipeline.to_json())

# convert the object into a dict
query_pipeline_dict = query_pipeline_instance.to_dict()
# create an instance of QueryPipeline from a dict
query_pipeline_from_dict = QueryPipeline.from_dict(query_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


