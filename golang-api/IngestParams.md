# IngestParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChunkSize** | Pointer to **int32** | The chunk size used to split documents. | [optional] [default to 2048]
**ChunkOverlap** | Pointer to **int32** | If not specified, is set to 0.75 value of chunk_size. | [optional] 
**LlmModel** | Pointer to **string** | The LLM model to be used in cases of any options that require it such as summarization. | [optional] 
**SummarizeDoc** | Pointer to **bool** | If this option is set to True, the input document is summarized before storage. This helps in cases where the context of the document is spread across the entire document. | [optional] 
**CustomScript** | Pointer to **string** | The name of the custom script to use while ingesting data into a structured database. Some custom scripts are pre-loaded. | [optional] 
**FileExtractor** | Pointer to [**[]FileExtractor**](FileExtractor.md) | Specify a file extractor for new file extensions or for a different supported extractor for standard extensions. | [optional] 
**ApiKey** | Pointer to **string** | Any API keys required while accessing file extractors such as LlamaParse. | [optional] 
**DocMetadata** | Pointer to [**[]Metadata**](Metadata.md) | Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks. | [optional] 
**TableName** | Pointer to **string** | Name of the table to ingest the data into, incase of a database ingestion into a database containing multiple tables. | [optional] 

## Methods

### NewIngestParams

`func NewIngestParams() *IngestParams`

NewIngestParams instantiates a new IngestParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIngestParamsWithDefaults

`func NewIngestParamsWithDefaults() *IngestParams`

NewIngestParamsWithDefaults instantiates a new IngestParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChunkSize

`func (o *IngestParams) GetChunkSize() int32`

GetChunkSize returns the ChunkSize field if non-nil, zero value otherwise.

### GetChunkSizeOk

`func (o *IngestParams) GetChunkSizeOk() (*int32, bool)`

GetChunkSizeOk returns a tuple with the ChunkSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkSize

`func (o *IngestParams) SetChunkSize(v int32)`

SetChunkSize sets ChunkSize field to given value.

### HasChunkSize

`func (o *IngestParams) HasChunkSize() bool`

HasChunkSize returns a boolean if a field has been set.

### GetChunkOverlap

`func (o *IngestParams) GetChunkOverlap() int32`

GetChunkOverlap returns the ChunkOverlap field if non-nil, zero value otherwise.

### GetChunkOverlapOk

`func (o *IngestParams) GetChunkOverlapOk() (*int32, bool)`

GetChunkOverlapOk returns a tuple with the ChunkOverlap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkOverlap

`func (o *IngestParams) SetChunkOverlap(v int32)`

SetChunkOverlap sets ChunkOverlap field to given value.

### HasChunkOverlap

`func (o *IngestParams) HasChunkOverlap() bool`

HasChunkOverlap returns a boolean if a field has been set.

### GetLlmModel

`func (o *IngestParams) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *IngestParams) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *IngestParams) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.

### HasLlmModel

`func (o *IngestParams) HasLlmModel() bool`

HasLlmModel returns a boolean if a field has been set.

### GetSummarizeDoc

`func (o *IngestParams) GetSummarizeDoc() bool`

GetSummarizeDoc returns the SummarizeDoc field if non-nil, zero value otherwise.

### GetSummarizeDocOk

`func (o *IngestParams) GetSummarizeDocOk() (*bool, bool)`

GetSummarizeDocOk returns a tuple with the SummarizeDoc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummarizeDoc

`func (o *IngestParams) SetSummarizeDoc(v bool)`

SetSummarizeDoc sets SummarizeDoc field to given value.

### HasSummarizeDoc

`func (o *IngestParams) HasSummarizeDoc() bool`

HasSummarizeDoc returns a boolean if a field has been set.

### GetCustomScript

`func (o *IngestParams) GetCustomScript() string`

GetCustomScript returns the CustomScript field if non-nil, zero value otherwise.

### GetCustomScriptOk

`func (o *IngestParams) GetCustomScriptOk() (*string, bool)`

GetCustomScriptOk returns a tuple with the CustomScript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomScript

`func (o *IngestParams) SetCustomScript(v string)`

SetCustomScript sets CustomScript field to given value.

### HasCustomScript

`func (o *IngestParams) HasCustomScript() bool`

HasCustomScript returns a boolean if a field has been set.

### GetFileExtractor

`func (o *IngestParams) GetFileExtractor() []FileExtractor`

GetFileExtractor returns the FileExtractor field if non-nil, zero value otherwise.

### GetFileExtractorOk

`func (o *IngestParams) GetFileExtractorOk() (*[]FileExtractor, bool)`

GetFileExtractorOk returns a tuple with the FileExtractor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExtractor

`func (o *IngestParams) SetFileExtractor(v []FileExtractor)`

SetFileExtractor sets FileExtractor field to given value.

### HasFileExtractor

`func (o *IngestParams) HasFileExtractor() bool`

HasFileExtractor returns a boolean if a field has been set.

### GetApiKey

`func (o *IngestParams) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *IngestParams) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *IngestParams) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *IngestParams) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetDocMetadata

`func (o *IngestParams) GetDocMetadata() []Metadata`

GetDocMetadata returns the DocMetadata field if non-nil, zero value otherwise.

### GetDocMetadataOk

`func (o *IngestParams) GetDocMetadataOk() (*[]Metadata, bool)`

GetDocMetadataOk returns a tuple with the DocMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocMetadata

`func (o *IngestParams) SetDocMetadata(v []Metadata)`

SetDocMetadata sets DocMetadata field to given value.

### HasDocMetadata

`func (o *IngestParams) HasDocMetadata() bool`

HasDocMetadata returns a boolean if a field has been set.

### GetTableName

`func (o *IngestParams) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *IngestParams) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *IngestParams) SetTableName(v string)`

SetTableName sets TableName field to given value.

### HasTableName

`func (o *IngestParams) HasTableName() bool`

HasTableName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


