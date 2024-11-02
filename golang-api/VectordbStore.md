# VectordbStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VectordbProfile** | **string** | Name of the Vector DB profile. This is mandatory parameter in case of vector database. | 
**EmbeddingModel** | **string** | The embedding model to be used while ingesting data. This is mandatory parameter in case of vector database. | 
**Shared** | Pointer to **bool** | This describes whether the data store is shared with others in the account for query purposes. | [optional] [default to false]

## Methods

### NewVectordbStore

`func NewVectordbStore(vectordbProfile string, embeddingModel string, ) *VectordbStore`

NewVectordbStore instantiates a new VectordbStore object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectordbStoreWithDefaults

`func NewVectordbStoreWithDefaults() *VectordbStore`

NewVectordbStoreWithDefaults instantiates a new VectordbStore object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

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


### GetShared

`func (o *VectordbStore) GetShared() bool`

GetShared returns the Shared field if non-nil, zero value otherwise.

### GetSharedOk

`func (o *VectordbStore) GetSharedOk() (*bool, bool)`

GetSharedOk returns a tuple with the Shared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShared

`func (o *VectordbStore) SetShared(v bool)`

SetShared sets Shared field to given value.

### HasShared

`func (o *VectordbStore) HasShared() bool`

HasShared returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


