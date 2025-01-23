# Org.OpenAPITools.Model.QueryPipelineInfo
Query Pipeline configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**Name** | **string** | Name of the query pipeline. | 
**DataStoreNames** | **List&lt;string&gt;** | The list of data stores to be used in the query. | [optional] 
**QueryType** | **QueryTypes** |  | 
**QueryParams** | [**QueryParams**](QueryParams.md) |  | [optional] 
**EmbeddingModelProfile** | **string** | The name of the model profile to use for accessing the embedding models. | [optional] 
**EmbeddingModel** | **string** | The embedding model to be used. | [optional] 
**LlmModelProfile** | **string** | The name of the model profile to use for accessing the LLM models. | [optional] 
**LlmModel** | **string** | The LLM model to be used. | [optional] 
**CreatedBy** | **string** | The user who created the ingest pipeline. | 
**SharedUsers** | **List&lt;string&gt;** | The list of users this profile is shared with. | [optional] 
**ExtraInfo** | **string** | For any queries that are performed using this pipeline, this content will be used to augment the context that is provided along with the question. For example, by default the context for SQL tables will contain the table schemas, however if we want to detail more information about the tables for all the queries, then it can be added here instead of repeating for each query. | [optional] 
**CreatedAt** | **long** | Timestamp of the query pipeline creation. | 
**LastUpdate** | **long** | Timestamp of the last update to the query pipeline. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

