# ModelProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**Provider** | Pointer to [**ModelProviders**](ModelProviders.md) |  | [optional] 
**Workspace** | **string** | The workspace that contains the model profile. | 
**EmbeddingModels** | Pointer to **[]string** | List of embedding models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**LlmModels** | Pointer to **[]string** | List of LLM models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**AccessInfo** | Pointer to [**ModelAccessInfo**](ModelAccessInfo.md) |  | [optional] 
**AccessKey** | Pointer to [**ModelAccessKey**](ModelAccessKey.md) |  | [optional] 
**CreatedBy** | **string** | The username who created this model profile | 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 
**CreatedAt** | **int64** | Timestamp of the model profile creation | 
**LastUpdate** | **int64** | Timestamp of the last update to the model profile | 

## Methods

### NewModelProfileInfo

`func NewModelProfileInfo(name string, workspace string, createdBy string, createdAt int64, lastUpdate int64, ) *ModelProfileInfo`

NewModelProfileInfo instantiates a new ModelProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelProfileInfoWithDefaults

`func NewModelProfileInfoWithDefaults() *ModelProfileInfo`

NewModelProfileInfoWithDefaults instantiates a new ModelProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ModelProfileInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelProfileInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelProfileInfo) SetName(v string)`

SetName sets Name field to given value.


### GetProvider

`func (o *ModelProfileInfo) GetProvider() ModelProviders`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *ModelProfileInfo) GetProviderOk() (*ModelProviders, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *ModelProfileInfo) SetProvider(v ModelProviders)`

SetProvider sets Provider field to given value.

### HasProvider

`func (o *ModelProfileInfo) HasProvider() bool`

HasProvider returns a boolean if a field has been set.

### GetWorkspace

`func (o *ModelProfileInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *ModelProfileInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *ModelProfileInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetEmbeddingModels

`func (o *ModelProfileInfo) GetEmbeddingModels() []string`

GetEmbeddingModels returns the EmbeddingModels field if non-nil, zero value otherwise.

### GetEmbeddingModelsOk

`func (o *ModelProfileInfo) GetEmbeddingModelsOk() (*[]string, bool)`

GetEmbeddingModelsOk returns a tuple with the EmbeddingModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModels

`func (o *ModelProfileInfo) SetEmbeddingModels(v []string)`

SetEmbeddingModels sets EmbeddingModels field to given value.

### HasEmbeddingModels

`func (o *ModelProfileInfo) HasEmbeddingModels() bool`

HasEmbeddingModels returns a boolean if a field has been set.

### GetLlmModels

`func (o *ModelProfileInfo) GetLlmModels() []string`

GetLlmModels returns the LlmModels field if non-nil, zero value otherwise.

### GetLlmModelsOk

`func (o *ModelProfileInfo) GetLlmModelsOk() (*[]string, bool)`

GetLlmModelsOk returns a tuple with the LlmModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModels

`func (o *ModelProfileInfo) SetLlmModels(v []string)`

SetLlmModels sets LlmModels field to given value.

### HasLlmModels

`func (o *ModelProfileInfo) HasLlmModels() bool`

HasLlmModels returns a boolean if a field has been set.

### GetAccessInfo

`func (o *ModelProfileInfo) GetAccessInfo() ModelAccessInfo`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *ModelProfileInfo) GetAccessInfoOk() (*ModelAccessInfo, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *ModelProfileInfo) SetAccessInfo(v ModelAccessInfo)`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *ModelProfileInfo) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.

### GetAccessKey

`func (o *ModelProfileInfo) GetAccessKey() ModelAccessKey`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *ModelProfileInfo) GetAccessKeyOk() (*ModelAccessKey, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *ModelProfileInfo) SetAccessKey(v ModelAccessKey)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *ModelProfileInfo) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ModelProfileInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ModelProfileInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ModelProfileInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetSharedUsers

`func (o *ModelProfileInfo) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *ModelProfileInfo) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *ModelProfileInfo) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *ModelProfileInfo) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ModelProfileInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelProfileInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelProfileInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *ModelProfileInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *ModelProfileInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *ModelProfileInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


