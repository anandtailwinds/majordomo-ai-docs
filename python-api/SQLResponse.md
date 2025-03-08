# SQLResponse

SQL type of response with fixed columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** |  | [optional] 
**data** | **List[List[object]]** |  | [optional] 

## Example

```python
from majordomo_ai.models.sql_response import SQLResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SQLResponse from a JSON string
sql_response_instance = SQLResponse.from_json(json)
# print the JSON string representation of the object
print(SQLResponse.to_json())

# convert the object into a dict
sql_response_dict = sql_response_instance.to_dict()
# create an instance of SQLResponse from a dict
sql_response_from_dict = SQLResponse.from_dict(sql_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


