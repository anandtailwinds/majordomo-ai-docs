# QueryResponseMongoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | **List[Dict[str, object]]** |  | [optional] 

## Example

```python
from majordomo_ai.models.query_response_mongo_response import QueryResponseMongoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponseMongoResponse from a JSON string
query_response_mongo_response_instance = QueryResponseMongoResponse.from_json(json)
# print the JSON string representation of the object
print(QueryResponseMongoResponse.to_json())

# convert the object into a dict
query_response_mongo_response_dict = query_response_mongo_response_instance.to_dict()
# create an instance of QueryResponseMongoResponse from a dict
query_response_mongo_response_from_dict = QueryResponseMongoResponse.from_dict(query_response_mongo_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


