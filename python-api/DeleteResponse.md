# DeleteResponse

Provides additional information about delete operation results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_records** | **int** | The total number of deleted records. | [optional] 
**response** | **str** | Any message that is returned as a result of the operation. | [optional] 

## Example

```python
from majordomo_ai.models.delete_response import DeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteResponse from a JSON string
delete_response_instance = DeleteResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteResponse.to_json())

# convert the object into a dict
delete_response_dict = delete_response_instance.to_dict()
# create an instance of DeleteResponse from a dict
delete_response_from_dict = DeleteResponse.from_dict(delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


