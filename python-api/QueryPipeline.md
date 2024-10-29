# QueryPipeline

Query Pipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace this query pipeline belongs to. | 
**user_name** | **str** | The user who created the ingest pipeline. | 
**name** | **str** | Name of the query pipeline. | 
**data_store_names** | **List[str]** | The type of the parent data store. | [optional] 
**embedding_model** | **str** | The embedding model to be used | 
**llm_model** | **str** | The LLM model to be used | 
**query_type** | [**QueryTypes**](QueryTypes.md) |  | 
**var_query_params** | [**QueryParams**](QueryParams.md) |  | [optional] 

## Example

```python
from majordomoai.models.query_pipeline import QueryPipeline

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


