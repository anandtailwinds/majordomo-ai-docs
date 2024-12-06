# VectordbStore

This is the data store specification vector databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the vector database. | 
**embedding_model_profile** | **str** | Name of the Model profile. This profile determines the provider from which the embedding model is accessed. | 
**vectordb_profile** | **str** | Name of the Vector DB profile. This profile determines the provider from which the vector database is accessed. | 
**embedding_model** | **str** | The embedding model to be used while ingesting data. This is mandatory parameter in case of vector database. | 
**llm_model_profile** | **str** | Name of the Model profile. This profile determines the provider from which the LLM model is accessed. | [optional] 
**llm_model** | **str** | The LLM model to be used if any specialized operations during the ingestion such as summarization. | [optional] 

## Example

```python
from majordomo_ai.models.vectordb_store import VectordbStore

# TODO update the JSON string below
json = "{}"
# create an instance of VectordbStore from a JSON string
vectordb_store_instance = VectordbStore.from_json(json)
# print the JSON string representation of the object
print(VectordbStore.to_json())

# convert the object into a dict
vectordb_store_dict = vectordb_store_instance.to_dict()
# create an instance of VectordbStore from a dict
vectordb_store_from_dict = VectordbStore.from_dict(vectordb_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


