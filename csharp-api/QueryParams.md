# Org.OpenAPITools.Model.QueryParams
A data store query request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TopK** | **int** | The number of vector db matches to consider for llm context | [optional] [default to 2]
**Temperature** | **float** | The temperature of the LLM processing, the higher the more creative the LLM is. | [optional] 
**DocMetadata** | [**List&lt;Metadata&gt;**](Metadata.md) | Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks. | [optional] 
**QueryMode** | **QueryModes** |  | [optional] 
**DebugMode** | **bool** | Query results will include debug information. | [optional] [default to false]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

