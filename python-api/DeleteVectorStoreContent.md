# DeleteVectorStoreContent

Information about which vector store files to delete from the vector database. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | Workspace in which the vector store is present. | 
**data_store_name** | **str** | Name of the data store that points to the vector store. | 
**delete_metadata** | [**List[Metadata]**](Metadata.md) | Delete the nodes that match one of the metadata specified in this list.  | 

## Example

```python
from majordomo_ai.models.delete_vector_store_content import DeleteVectorStoreContent

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteVectorStoreContent from a JSON string
delete_vector_store_content_instance = DeleteVectorStoreContent.from_json(json)
# print the JSON string representation of the object
print(DeleteVectorStoreContent.to_json())

# convert the object into a dict
delete_vector_store_content_dict = delete_vector_store_content_instance.to_dict()
# create an instance of DeleteVectorStoreContent from a dict
delete_vector_store_content_from_dict = DeleteVectorStoreContent.from_dict(delete_vector_store_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


