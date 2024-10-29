# VectordbEndpoint

The parameters used to connect the vector database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connect_string** | **str** | Connection string used to connect to the database, this can include password in case of some providers. | [optional] 
**database** | **str** | Name of the database to which the profile connects. | [optional] 
**collection** | **str** | The specific collection within the database where data will be stored. | [optional] 
**cloud** | **str** | Indicates the cloud provider, e.g., AWS, Azure. | [optional] 
**region** | **str** | Specifies the cloud region (e.g., us-west-2) where the database or collection is hosted. | [optional] 

## Example

```python
from majordomoai.models.vectordb_endpoint import VectordbEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbEndpoint from a JSON string
vectordb_endpoint_instance = VectordbEndpoint.from_json(json)
# print the JSON string representation of the object
print(VectordbEndpoint.to_json())

# convert the object into a dict
vectordb_endpoint_dict = vectordb_endpoint_instance.to_dict()
# create an instance of VectordbEndpoint from a dict
vectordb_endpoint_from_dict = VectordbEndpoint.from_dict(vectordb_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


