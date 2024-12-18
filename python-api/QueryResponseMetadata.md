# QueryResponseMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_query** | **str** |  | [optional] 

## Example

```python
from majordomo_ai.models.query_response_metadata import QueryResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponseMetadata from a JSON string
query_response_metadata_instance = QueryResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(QueryResponseMetadata.to_json())

# convert the object into a dict
query_response_metadata_dict = query_response_metadata_instance.to_dict()
# create an instance of QueryResponseMetadata from a dict
query_response_metadata_from_dict = QueryResponseMetadata.from_dict(query_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


