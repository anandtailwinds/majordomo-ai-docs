# SQLQueryParams

Parameters related to SQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_name** | **str** | The name of the data store to use for the SQL database tables. | 
**embedding_model_profile** | **str** | The name of the model profile to use for accessing the embedding models. | [optional] 
**embedding_model** | **str** | The embedding model to be used. | [optional] 
**llm_model_profile** | **str** | The name of the model profile to use for accessing the LLM models. | 
**llm_model** | **str** | The LLM model to be used. | 

## Example

```python
from majordomo_ai.models.sql_query_params import SQLQueryParams

# TODO update the JSON string below
json = "{}"
# create an instance of SQLQueryParams from a JSON string
sql_query_params_instance = SQLQueryParams.from_json(json)
# print the JSON string representation of the object
print(SQLQueryParams.to_json())

# convert the object into a dict
sql_query_params_dict = sql_query_params_instance.to_dict()
# create an instance of SQLQueryParams from a dict
sql_query_params_from_dict = SQLQueryParams.from_dict(sql_query_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


