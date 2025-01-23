# Org.OpenAPITools.Model.QueryPipeline
Query Pipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this query pipeline belongs to. | 
**Name** | **string** | Name of the query pipeline. | 
**QueryType** | **QueryTypes** |  | 
**DataStoreNames** | **List&lt;string&gt;** | The list of data stores to be used in the query. | 
**EmbeddingModelProfile** | **string** | The name of the model profile to use for accessing the embedding models. | [optional] 
**EmbeddingModel** | **string** | The embedding model to be used. | [optional] 
**LlmModelProfile** | **string** | The name of the model profile to use for accessing the LLM models. | 
**LlmModel** | **string** | The LLM model to be used. | 
**QueryParams** | [**QueryParams**](QueryParams.md) |  | [optional] 
**ExtraInfo** | **string** | For any queries that are performed using this pipeline, this content will be used to augment the context that is provided along with the question. For example, by default the context for SQL tables will contain the table schemas, however if we want to detail more information about the tables for all the queries, then it can be added here instead of repeating for each query. | [optional] 
**SharedUsers** | **List&lt;string&gt;** | The list of users this profile is shared with. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

