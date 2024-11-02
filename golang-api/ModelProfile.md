# ModelProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**Provider** | [**ModelProviders**](ModelProviders.md) |  | 
**Endpoint** | Pointer to [**ModelEndpoints**](ModelEndpoints.md) |  | [optional] 
**AllowedModels** | Pointer to **[]string** | List of models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**AccessKey** | **string** | Access Key for accessing the model. It is possible to specify the access key as a secret value using either of the following formats {Azure:KeyVault-Name:Key} or {AWS:SecretName:Key} or {AWS:Region:SecretName:Key}. | 

## Methods

### NewModelProfile

`func NewModelProfile(name string, provider ModelProviders, accessKey string, ) *ModelProfile`

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


### GetEndpoint

`func (o *ModelProfile) GetEndpoint() ModelEndpoints`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *ModelProfile) GetEndpointOk() (*ModelEndpoints, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *ModelProfile) SetEndpoint(v ModelEndpoints)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *ModelProfile) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

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


