# Org.OpenAPITools.Model.TokenStatsInfo
The various logs that are generated filtered based on user, workspace and timeframes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspce in which the log was genereated. | 
**UserName** | **string** | The user for which this log was generated. | 
**EmbedModel** | **string** | The embedding model used in the operation. | [optional] 
**EmbedTokens** | **long** | The total number of tokens used for generating the embedding. | [optional] 
**LlmModel** | **string** | The LLM model used in the operation. | [optional] 
**PromptTokens** | **long** | The total number of tokens used for the prompt. | [optional] 
**CompletionTokens** | **long** | The total number of tokens used for the query completion. | [optional] 
**TotalFiles** | **long** | The total files consumed incase of an ingest operation. | [optional] 
**TotalSize** | **long** | The total size of content consumed incase of an ingest operation. | [optional] 
**Latency** | **decimal** | The time taken to perform the underlying RAG operation. | [optional] 
**Timestamp** | **long** | The timestamp of the generated log message. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

