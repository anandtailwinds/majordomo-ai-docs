# Org.OpenAPITools.Model.DataStoreQuery
Data Store Query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this data store is created in. | 
**DataStoreName** | **string** | Name of the data store. | 
**EmbeddingModel** | **string** | The embedding model to be used. | [optional] 
**EmbeddingModelProfile** | **string** | The name of the model profile to use for accessing the embedding models. | [optional] 
**LlmModelProfile** | **string** | The name of the model profile to use for accessing the LLM models. | 
**LlmModel** | **string** | The LLM model to be used. | 
**QueryParams** | [**QueryParams**](QueryParams.md) |  | [optional] 
**QueryString** | **string** | The actual query string for which the user wants a response to. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

