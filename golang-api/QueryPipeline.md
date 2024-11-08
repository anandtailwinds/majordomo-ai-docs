# QueryPipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this query pipeline belongs to. | 
**Name** | **string** | Name of the query pipeline. | 
**DataStoreNames** | **[]string** | The type of the parent data store. | 
**EmbeddingModel** | **string** | The embedding model to be used | 
**LlmModel** | **string** | The LLM model to be used | 
**QueryType** | [**QueryTypes**](QueryTypes.md) |  | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewQueryPipeline

`func NewQueryPipeline(workspace string, name string, dataStoreNames []string, embeddingModel string, llmModel string, queryType QueryTypes, ) *QueryPipeline`

NewQueryPipeline instantiates a new QueryPipeline object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryPipelineWithDefaults

`func NewQueryPipelineWithDefaults() *QueryPipeline`

NewQueryPipelineWithDefaults instantiates a new QueryPipeline object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *QueryPipeline) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *QueryPipeline) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *QueryPipeline) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *QueryPipeline) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *QueryPipeline) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *QueryPipeline) SetName(v string)`

SetName sets Name field to given value.


### GetDataStoreNames

`func (o *QueryPipeline) GetDataStoreNames() []string`

GetDataStoreNames returns the DataStoreNames field if non-nil, zero value otherwise.

### GetDataStoreNamesOk

`func (o *QueryPipeline) GetDataStoreNamesOk() (*[]string, bool)`

GetDataStoreNamesOk returns a tuple with the DataStoreNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreNames

`func (o *QueryPipeline) SetDataStoreNames(v []string)`

SetDataStoreNames sets DataStoreNames field to given value.


### GetEmbeddingModel

`func (o *QueryPipeline) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *QueryPipeline) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *QueryPipeline) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.


### GetLlmModel

`func (o *QueryPipeline) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *QueryPipeline) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *QueryPipeline) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.


### GetQueryType

`func (o *QueryPipeline) GetQueryType() QueryTypes`

GetQueryType returns the QueryType field if non-nil, zero value otherwise.

### GetQueryTypeOk

`func (o *QueryPipeline) GetQueryTypeOk() (*QueryTypes, bool)`

GetQueryTypeOk returns a tuple with the QueryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryType

`func (o *QueryPipeline) SetQueryType(v QueryTypes)`

SetQueryType sets QueryType field to given value.


### GetQueryParams

`func (o *QueryPipeline) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *QueryPipeline) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *QueryPipeline) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *QueryPipeline) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


