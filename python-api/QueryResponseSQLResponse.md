# QueryResponseSQLResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** |  | [optional] 
**data** | **List[List[object]]** |  | [optional] 

## Example

```python
from majordomo_ai.models.query_response_sql_response import QueryResponseSQLResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponseSQLResponse from a JSON string
query_response_sql_response_instance = QueryResponseSQLResponse.from_json(json)
# print the JSON string representation of the object
print(QueryResponseSQLResponse.to_json())

# convert the object into a dict
query_response_sql_response_dict = query_response_sql_response_instance.to_dict()
# create an instance of QueryResponseSQLResponse from a dict
query_response_sql_response_from_dict = QueryResponseSQLResponse.from_dict(query_response_sql_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


