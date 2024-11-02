# ModelProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**Provider** | Pointer to [**ModelProviders**](ModelProviders.md) |  | [optional] 
**AllowedModels** | Pointer to **[]string** | List of models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**Endpoint** | Pointer to [**ModelEndpoints**](ModelEndpoints.md) |  | [optional] 
**AccessKey** | **string** | Access Key for accessing the model | 
**CreatedBy** | **string** | The username who created this model profile | 
**CreatedAt** | **int64** | Timestamp of the model profile creation | 
**LastUpdate** | **int64** | Timestamp of the last update to the model profile | 

## Methods

### NewModelProfileInfo

`func NewModelProfileInfo(name string, accessKey string, createdBy string, createdAt int64, lastUpdate int64, ) *ModelProfileInfo`

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

### GetAllowedModels

`func (o *ModelProfileInfo) GetAllowedModels() []string`

GetAllowedModels returns the AllowedModels field if non-nil, zero value otherwise.

### GetAllowedModelsOk

`func (o *ModelProfileInfo) GetAllowedModelsOk() (*[]string, bool)`

GetAllowedModelsOk returns a tuple with the AllowedModels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedModels

`func (o *ModelProfileInfo) SetAllowedModels(v []string)`

SetAllowedModels sets AllowedModels field to given value.

### HasAllowedModels

`func (o *ModelProfileInfo) HasAllowedModels() bool`

HasAllowedModels returns a boolean if a field has been set.

### GetEndpoint

`func (o *ModelProfileInfo) GetEndpoint() ModelEndpoints`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *ModelProfileInfo) GetEndpointOk() (*ModelEndpoints, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *ModelProfileInfo) SetEndpoint(v ModelEndpoints)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *ModelProfileInfo) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetAccessKey

`func (o *ModelProfileInfo) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *ModelProfileInfo) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *ModelProfileInfo) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.


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


