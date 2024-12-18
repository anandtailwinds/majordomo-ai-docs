# VectordbStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the vector database. | 
**EmbeddingModelProfile** | **string** | Name of the Model profile. This profile determines the provider from which the embedding model is accessed. | 
**VectordbProfile** | **string** | Name of the Vector DB profile. This profile determines the provider from which the vector database is accessed. | 
**EmbeddingModel** | **string** | The embedding model to be used while ingesting data. This is mandatory parameter in case of vector database. | 
**LlmModelProfile** | Pointer to **string** | Name of the Model profile. This profile determines the provider from which the LLM model is accessed. | [optional] 
**LlmModel** | Pointer to **string** | The LLM model to be used if any specialized operations during the ingestion such as summarization. | [optional] 

## Methods

### NewVectordbStore

`func NewVectordbStore(name string, embeddingModelProfile string, vectordbProfile string, embeddingModel string, ) *VectordbStore`

NewVectordbStore instantiates a new VectordbStore object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectordbStoreWithDefaults

`func NewVectordbStoreWithDefaults() *VectordbStore`

NewVectordbStoreWithDefaults instantiates a new VectordbStore object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *VectordbStore) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VectordbStore) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VectordbStore) SetName(v string)`

SetName sets Name field to given value.


### GetEmbeddingModelProfile

`func (o *VectordbStore) GetEmbeddingModelProfile() string`

GetEmbeddingModelProfile returns the EmbeddingModelProfile field if non-nil, zero value otherwise.

### GetEmbeddingModelProfileOk

`func (o *VectordbStore) GetEmbeddingModelProfileOk() (*string, bool)`

GetEmbeddingModelProfileOk returns a tuple with the EmbeddingModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelProfile

`func (o *VectordbStore) SetEmbeddingModelProfile(v string)`

SetEmbeddingModelProfile sets EmbeddingModelProfile field to given value.


### GetVectordbProfile

`func (o *VectordbStore) GetVectordbProfile() string`

GetVectordbProfile returns the VectordbProfile field if non-nil, zero value otherwise.

### GetVectordbProfileOk

`func (o *VectordbStore) GetVectordbProfileOk() (*string, bool)`

GetVectordbProfileOk returns a tuple with the VectordbProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfile

`func (o *VectordbStore) SetVectordbProfile(v string)`

SetVectordbProfile sets VectordbProfile field to given value.


### GetEmbeddingModel

`func (o *VectordbStore) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *VectordbStore) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *VectordbStore) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.


### GetLlmModelProfile

`func (o *VectordbStore) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *VectordbStore) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *VectordbStore) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.

### HasLlmModelProfile

`func (o *VectordbStore) HasLlmModelProfile() bool`

HasLlmModelProfile returns a boolean if a field has been set.

### GetLlmModel

`func (o *VectordbStore) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *VectordbStore) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *VectordbStore) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.

### HasLlmModel

`func (o *VectordbStore) HasLlmModel() bool`

HasLlmModel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


