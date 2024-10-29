# ModelProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**ModelProvider** | [**ModelProviders**](ModelProviders.md) |  | 
**AllowedModels** | Pointer to **[]string** | List of models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**AccessKey** | **string** | Access Key for accessing the model. | 

## Methods

### NewModelProfile

`func NewModelProfile(name string, modelProvider ModelProviders, accessKey string, ) *ModelProfile`

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


### GetModelProvider

`func (o *ModelProfile) GetModelProvider() ModelProviders`

GetModelProvider returns the ModelProvider field if non-nil, zero value otherwise.

### GetModelProviderOk

`func (o *ModelProfile) GetModelProviderOk() (*ModelProviders, bool)`

GetModelProviderOk returns a tuple with the ModelProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelProvider

`func (o *ModelProfile) SetModelProvider(v ModelProviders)`

SetModelProvider sets ModelProvider field to given value.


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

### GetAccessKey

`func (o *ModelProfile) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *ModelProfile) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *ModelProfile) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


