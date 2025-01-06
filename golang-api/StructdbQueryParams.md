# StructdbQueryParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataStoreName** | **string** | The name of the data store to use for the SQL database tables. | 
**EmbeddingModelProfile** | Pointer to **string** | The name of the model profile to use for accessing the embedding models. | [optional] 
**EmbeddingModel** | Pointer to **string** | The embedding model to be used. | [optional] 
**LlmModelProfile** | **string** | The name of the model profile to use for accessing the LLM models. | 
**LlmModel** | **string** | The LLM model to be used. | 

## Methods

### NewStructdbQueryParams

`func NewStructdbQueryParams(dataStoreName string, llmModelProfile string, llmModel string, ) *StructdbQueryParams`

NewStructdbQueryParams instantiates a new StructdbQueryParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStructdbQueryParamsWithDefaults

`func NewStructdbQueryParamsWithDefaults() *StructdbQueryParams`

NewStructdbQueryParamsWithDefaults instantiates a new StructdbQueryParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataStoreName

`func (o *StructdbQueryParams) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *StructdbQueryParams) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *StructdbQueryParams) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetEmbeddingModelProfile

`func (o *StructdbQueryParams) GetEmbeddingModelProfile() string`

GetEmbeddingModelProfile returns the EmbeddingModelProfile field if non-nil, zero value otherwise.

### GetEmbeddingModelProfileOk

`func (o *StructdbQueryParams) GetEmbeddingModelProfileOk() (*string, bool)`

GetEmbeddingModelProfileOk returns a tuple with the EmbeddingModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelProfile

`func (o *StructdbQueryParams) SetEmbeddingModelProfile(v string)`

SetEmbeddingModelProfile sets EmbeddingModelProfile field to given value.

### HasEmbeddingModelProfile

`func (o *StructdbQueryParams) HasEmbeddingModelProfile() bool`

HasEmbeddingModelProfile returns a boolean if a field has been set.

### GetEmbeddingModel

`func (o *StructdbQueryParams) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *StructdbQueryParams) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *StructdbQueryParams) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *StructdbQueryParams) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.

### GetLlmModelProfile

`func (o *StructdbQueryParams) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *StructdbQueryParams) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *StructdbQueryParams) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModel

`func (o *StructdbQueryParams) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *StructdbQueryParams) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *StructdbQueryParams) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


