# DataStoreQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this data store is created in. | 
**DataStoreName** | **string** | Name of the data store. | 
**EmbeddingModel** | Pointer to **string** | The embedding model to be used. | [optional] 
**EmbeddingModelProfile** | Pointer to **string** | The name of the model profile to use for accessing the embedding models. | [optional] 
**LlmModelProfile** | **string** | The name of the model profile to use for accessing the LLM models. | 
**LlmModel** | **string** | The LLM model to be used. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 
**QueryString** | **string** | The actual query string for which the user wants a response to. | 

## Methods

### NewDataStoreQuery

`func NewDataStoreQuery(workspace string, dataStoreName string, llmModelProfile string, llmModel string, queryString string, ) *DataStoreQuery`

NewDataStoreQuery instantiates a new DataStoreQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreQueryWithDefaults

`func NewDataStoreQueryWithDefaults() *DataStoreQuery`

NewDataStoreQueryWithDefaults instantiates a new DataStoreQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *DataStoreQuery) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *DataStoreQuery) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *DataStoreQuery) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetDataStoreName

`func (o *DataStoreQuery) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *DataStoreQuery) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *DataStoreQuery) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetEmbeddingModel

`func (o *DataStoreQuery) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *DataStoreQuery) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *DataStoreQuery) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *DataStoreQuery) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.

### GetEmbeddingModelProfile

`func (o *DataStoreQuery) GetEmbeddingModelProfile() string`

GetEmbeddingModelProfile returns the EmbeddingModelProfile field if non-nil, zero value otherwise.

### GetEmbeddingModelProfileOk

`func (o *DataStoreQuery) GetEmbeddingModelProfileOk() (*string, bool)`

GetEmbeddingModelProfileOk returns a tuple with the EmbeddingModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelProfile

`func (o *DataStoreQuery) SetEmbeddingModelProfile(v string)`

SetEmbeddingModelProfile sets EmbeddingModelProfile field to given value.

### HasEmbeddingModelProfile

`func (o *DataStoreQuery) HasEmbeddingModelProfile() bool`

HasEmbeddingModelProfile returns a boolean if a field has been set.

### GetLlmModelProfile

`func (o *DataStoreQuery) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *DataStoreQuery) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *DataStoreQuery) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModel

`func (o *DataStoreQuery) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *DataStoreQuery) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *DataStoreQuery) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.


### GetQueryParams

`func (o *DataStoreQuery) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *DataStoreQuery) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *DataStoreQuery) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *DataStoreQuery) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.

### GetQueryString

`func (o *DataStoreQuery) GetQueryString() string`

GetQueryString returns the QueryString field if non-nil, zero value otherwise.

### GetQueryStringOk

`func (o *DataStoreQuery) GetQueryStringOk() (*string, bool)`

GetQueryStringOk returns a tuple with the QueryString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryString

`func (o *DataStoreQuery) SetQueryString(v string)`

SetQueryString sets QueryString field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


