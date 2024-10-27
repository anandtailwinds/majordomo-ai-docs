# QueryParams

A data store query request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_k** | **int** |  | [optional] [default to 2]
**temperature** | **float** |  | [optional] 
**query_mode** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.query_params import QueryParams

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParams from a JSON string
query_params_instance = QueryParams.from_json(json)
# print the JSON string representation of the object
print(QueryParams.to_json())

# convert the object into a dict
query_params_dict = query_params_instance.to_dict()
# create an instance of QueryParams from a dict
query_params_from_dict = QueryParams.from_dict(query_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


