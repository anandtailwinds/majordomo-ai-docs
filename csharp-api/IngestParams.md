# Org.OpenAPITools.Model.IngestParams
User controlled ingestion parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChunkSize** | **int** | The chunk size used to split documents. | [optional] [default to 2048]
**ChunkOverlap** | **int** | If not specified, is set to 0.75 value of chunk_size. | [optional] 
**LlmModel** | **string** | The LLM model to be used in cases of any options that require it such as summarization. | [optional] 
**SummarizeDoc** | **bool** | If this option is set to True, the input document is summarized before storage. This helps in cases where the context of the document is spread across the entire document. | [optional] 
**CustomScript** | **string** | The name of the custom script to use while ingesting data into a structured database. Some custom scripts are pre-loaded. | [optional] 
**FileExtractor** | [**List&lt;FileExtractor&gt;**](FileExtractor.md) | Specify a file extractor for new file extensions or for a different supported extractor for standard extensions. | [optional] 
**ApiKey** | **string** | Any API keys required while accessing file extractors such as LlamaParse. | [optional] 
**DocMetadata** | [**List&lt;Metadata&gt;**](Metadata.md) | Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks. | [optional] 
**TableName** | **string** | Name of the table to ingest the data into, incase of a database ingestion into a database containing multiple tables. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

