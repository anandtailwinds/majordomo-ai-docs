# ModelProfileScope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**EmbeddingModels** | Pointer to **[]string** | List of embedding models available for the user. | [optional] 
**LlmModels** | Pointer to **[]string** | List of LLM models available for the user. | [optional] 

## Methods

### NewModelProfileScope

`func NewModelProfileScope(name string, ) *ModelProfileScope`

NewModelProfileScope instantiates a new ModelProfileScope object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelProfileScopeWithDefaults

`func NewModelProfileScopeWithDefaults() *ModelProfileScope`

NewModelProfileScopeWithDefaults instantiates a new ModelProfileScope object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ModelProfileScope) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelProfileScope) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelProfileScope) SetName(v string)`

SetName sets Name field to given value.


### GetEmbeddingModels

`func (o *ModelProfileScope) GetEmbeddingModels() []string`

GetEmbeddingModels returns the EmbeddingModels field if non-nil, zero value otherwise.

### GetEmbeddingModelsOk

`func (o *ModelProfileScope) GetEmbeddingModelsOk() (*[]string, bool)`

GetEmbeddingModelsOk returns a tuple with the EmbeddingModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModels

`func (o *ModelProfileScope) SetEmbeddingModels(v []string)`

SetEmbeddingModels sets EmbeddingModels field to given value.

### HasEmbeddingModels

`func (o *ModelProfileScope) HasEmbeddingModels() bool`

HasEmbeddingModels returns a boolean if a field has been set.

### GetLlmModels

`func (o *ModelProfileScope) GetLlmModels() []string`

GetLlmModels returns the LlmModels field if non-nil, zero value otherwise.

### GetLlmModelsOk

`func (o *ModelProfileScope) GetLlmModelsOk() (*[]string, bool)`

GetLlmModelsOk returns a tuple with the LlmModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModels

`func (o *ModelProfileScope) SetLlmModels(v []string)`

SetLlmModels sets LlmModels field to given value.

### HasLlmModels

`func (o *ModelProfileScope) HasLlmModels() bool`

HasLlmModels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


