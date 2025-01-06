# VectordbQueryParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataStoreName** | **string** | The name of the data store to use for the vector database. | 
**EmbeddingModelProfile** | **string** | The name of the model profile to use for accessing the embedding models. | 
**EmbeddingModel** | **string** | The embedding model to be used. | 
**LlmModelProfile** | **string** | The name of the model profile to use for accessing the LLM models. | 
**LlmModel** | **string** | The LLM model to be used. | 

## Methods

### NewVectordbQueryParams

`func NewVectordbQueryParams(dataStoreName string, embeddingModelProfile string, embeddingModel string, llmModelProfile string, llmModel string, ) *VectordbQueryParams`

NewVectordbQueryParams instantiates a new VectordbQueryParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectordbQueryParamsWithDefaults

`func NewVectordbQueryParamsWithDefaults() *VectordbQueryParams`

NewVectordbQueryParamsWithDefaults instantiates a new VectordbQueryParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataStoreName

`func (o *VectordbQueryParams) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *VectordbQueryParams) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *VectordbQueryParams) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetEmbeddingModelProfile

`func (o *VectordbQueryParams) GetEmbeddingModelProfile() string`

GetEmbeddingModelProfile returns the EmbeddingModelProfile field if non-nil, zero value otherwise.

### GetEmbeddingModelProfileOk

`func (o *VectordbQueryParams) GetEmbeddingModelProfileOk() (*string, bool)`

GetEmbeddingModelProfileOk returns a tuple with the EmbeddingModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelProfile

`func (o *VectordbQueryParams) SetEmbeddingModelProfile(v string)`

SetEmbeddingModelProfile sets EmbeddingModelProfile field to given value.


### GetEmbeddingModel

`func (o *VectordbQueryParams) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *VectordbQueryParams) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *VectordbQueryParams) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.


### GetLlmModelProfile

`func (o *VectordbQueryParams) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *VectordbQueryParams) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *VectordbQueryParams) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModel

`func (o *VectordbQueryParams) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *VectordbQueryParams) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *VectordbQueryParams) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


