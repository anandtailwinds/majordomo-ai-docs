# ModelProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**Provider** | [**ModelProviders**](ModelProviders.md) |  | 
**AllowedModels** | Pointer to **[]string** | List of models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**AccessInfo** | Pointer to [**ModelAccessInfo**](ModelAccessInfo.md) |  | [optional] 
**AccessKey** | Pointer to [**ModelAccessKey**](ModelAccessKey.md) |  | [optional] 

## Methods

### NewModelProfile

`func NewModelProfile(name string, provider ModelProviders, ) *ModelProfile`

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


### GetAllowedModels

`func (o *ModelProfile) GetAllowedModels() []string`

GetAllowedModels returns the AllowedModels field if non-nil, zero value otherwise.

### GetAllowedModelsOk

`func (o *ModelProfile) GetAllowedModelsOk() (*[]string, bool)`

GetAllowedModelsOk returns a tuple with the AllowedModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedModels

`func (o *ModelProfile) SetAllowedModels(v []string)`

SetAllowedModels sets AllowedModels field to given value.

### HasAllowedModels

`func (o *ModelProfile) HasAllowedModels() bool`

HasAllowedModels returns a boolean if a field has been set.

### GetAccessInfo

`func (o *ModelProfile) GetAccessInfo() ModelAccessInfo`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *ModelProfile) GetAccessInfoOk() (*ModelAccessInfo, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *ModelProfile) SetAccessInfo(v ModelAccessInfo)`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *ModelProfile) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.

### GetAccessKey

`func (o *ModelProfile) GetAccessKey() ModelAccessKey`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *ModelProfile) GetAccessKeyOk() (*ModelAccessKey, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *ModelProfile) SetAccessKey(v ModelAccessKey)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *ModelProfile) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


