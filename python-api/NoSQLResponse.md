# NoSQLResponse

No-SQL query response with no fixed fields in each row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | **List[Dict[str, object]]** |  | [optional] 

## Example

```python
from majordomo_ai.models.no_sql_response import NoSQLResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NoSQLResponse from a JSON string
no_sql_response_instance = NoSQLResponse.from_json(json)
# print the JSON string representation of the object
print(NoSQLResponse.to_json())

# convert the object into a dict
no_sql_response_dict = no_sql_response_instance.to_dict()
# create an instance of NoSQLResponse from a dict
no_sql_response_from_dict = NoSQLResponse.from_dict(no_sql_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


