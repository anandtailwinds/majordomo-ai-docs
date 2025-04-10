# ModelProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**Provider** | [**ModelProviders**](ModelProviders.md) |  | 
**InferenceApi** | Pointer to [**InferenceApis**](InferenceApis.md) |  | [optional] 
**Tags** | Pointer to **[]string** | Tags to describe the model where it is running or what its purpose is. | [optional] 
**Workspace** | **string** | The workspace that contains the model profile. | 
**EmbeddingModels** | Pointer to **[]string** | List of embedding models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**LlmModels** | Pointer to **[]string** | List of embedding models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**AccessInfo** | Pointer to **map[string]interface{}** | Credentials for application. | [optional] 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewModelProfile

`func NewModelProfile(name string, provider ModelProviders, workspace string, ) *ModelProfile`

NewModelProfile instantiates a new ModelProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelProfileWithDefaults

`func NewModelProfileWithDefaults() *ModelProfile`

NewModelProfileWithDefaults instantiates a new ModelProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ModelProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelProfile) SetName(v string)`

SetName sets Name field to given value.


### GetProvider

`func (o *ModelProfile) GetProvider() ModelProviders`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *ModelProfile) GetProviderOk() (*ModelProviders, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *ModelProfile) SetProvider(v ModelProviders)`

SetProvider sets Provider field to given value.


### GetInferenceApi

`func (o *ModelProfile) GetInferenceApi() InferenceApis`

GetInferenceApi returns the InferenceApi field if non-nil, zero value otherwise.

### GetInferenceApiOk

`func (o *ModelProfile) GetInferenceApiOk() (*InferenceApis, bool)`

GetInferenceApiOk returns a tuple with the InferenceApi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInferenceApi

`func (o *ModelProfile) SetInferenceApi(v InferenceApis)`

SetInferenceApi sets InferenceApi field to given value.

### HasInferenceApi

`func (o *ModelProfile) HasInferenceApi() bool`

HasInferenceApi returns a boolean if a field has been set.

### GetTags

`func (o *ModelProfile) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *ModelProfile) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *ModelProfile) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *ModelProfile) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetWorkspace

`func (o *ModelProfile) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *ModelProfile) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *ModelProfile) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetEmbeddingModels

`func (o *ModelProfile) GetEmbeddingModels() []string`

GetEmbeddingModels returns the EmbeddingModels field if non-nil, zero value otherwise.

### GetEmbeddingModelsOk

`func (o *ModelProfile) GetEmbeddingModelsOk() (*[]string, bool)`

GetEmbeddingModelsOk returns a tuple with the EmbeddingModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModels

`func (o *ModelProfile) SetEmbeddingModels(v []string)`

SetEmbeddingModels sets EmbeddingModels field to given value.

### HasEmbeddingModels

`func (o *ModelProfile) HasEmbeddingModels() bool`

HasEmbeddingModels returns a boolean if a field has been set.

### GetLlmModels

`func (o *ModelProfile) GetLlmModels() []string`

GetLlmModels returns the LlmModels field if non-nil, zero value otherwise.

### GetLlmModelsOk

`func (o *ModelProfile) GetLlmModelsOk() (*[]string, bool)`

GetLlmModelsOk returns a tuple with the LlmModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModels

`func (o *ModelProfile) SetLlmModels(v []string)`

SetLlmModels sets LlmModels field to given value.

### HasLlmModels

`func (o *ModelProfile) HasLlmModels() bool`

HasLlmModels returns a boolean if a field has been set.

### GetAccessInfo

`func (o *ModelProfile) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *ModelProfile) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *ModelProfile) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *ModelProfile) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.

### GetSharedUsers

`func (o *ModelProfile) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *ModelProfile) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *ModelProfile) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *ModelProfile) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


