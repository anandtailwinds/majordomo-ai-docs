# Org.OpenAPITools.Model.VectordbStore
This is the data store specification vector databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the vector database. | 
**EmbeddingModelProfile** | **string** | Name of the Model profile. This profile determines the provider from which the embedding model is accessed. | 
**VectordbProfile** | **string** | Name of the Vector DB profile. This profile determines the provider from which the vector database is accessed. | 
**EmbeddingModel** | **string** | The embedding model to be used while ingesting data. This is mandatory parameter in case of vector database. | 
**LlmModelProfile** | **string** | Name of the Model profile. This profile determines the provider from which the LLM model is accessed. | [optional] 
**LlmModel** | **string** | The LLM model to be used if any specialized operations during the ingestion such as summarization. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

