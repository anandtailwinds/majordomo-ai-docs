# UserScope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the workspace. | 
**ModelProfiles** | Pointer to [**[]ModelProfileScope**](ModelProfileScope.md) | List of model profiles permitted for the user. | [optional] 
**VectordbProfiles** | Pointer to **[]string** | List of vectordb profiles permitted for the user. | [optional] 
**MonitorProfiles** | Pointer to **[]string** | List of monitor profiles permitted for the user. | [optional] 
**DataStores** | Pointer to [**[]DataStoreScope**](DataStoreScope.md) | List of data stores permitted for the user. | [optional] 
**QueryPipelines** | Pointer to **[]string** | List of data stores in each workspace that is created by the user. | [optional] 

## Methods

### NewUserScope

`func NewUserScope(name string, ) *UserScope`

NewUserScope instantiates a new UserScope object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserScopeWithDefaults

`func NewUserScopeWithDefaults() *UserScope`

NewUserScopeWithDefaults instantiates a new UserScope object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UserScope) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserScope) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserScope) SetName(v string)`

SetName sets Name field to given value.


### GetModelProfiles

`func (o *UserScope) GetModelProfiles() []ModelProfileScope`

GetModelProfiles returns the ModelProfiles field if non-nil, zero value otherwise.

### GetModelProfilesOk

`func (o *UserScope) GetModelProfilesOk() (*[]ModelProfileScope, bool)`

GetModelProfilesOk returns a tuple with the ModelProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelProfiles

`func (o *UserScope) SetModelProfiles(v []ModelProfileScope)`

SetModelProfiles sets ModelProfiles field to given value.

### HasModelProfiles

`func (o *UserScope) HasModelProfiles() bool`

HasModelProfiles returns a boolean if a field has been set.

### GetVectordbProfiles

`func (o *UserScope) GetVectordbProfiles() []string`

GetVectordbProfiles returns the VectordbProfiles field if non-nil, zero value otherwise.

### GetVectordbProfilesOk

`func (o *UserScope) GetVectordbProfilesOk() (*[]string, bool)`

GetVectordbProfilesOk returns a tuple with the VectordbProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfiles

`func (o *UserScope) SetVectordbProfiles(v []string)`

SetVectordbProfiles sets VectordbProfiles field to given value.

### HasVectordbProfiles

`func (o *UserScope) HasVectordbProfiles() bool`

HasVectordbProfiles returns a boolean if a field has been set.

### GetMonitorProfiles

`func (o *UserScope) GetMonitorProfiles() []string`

GetMonitorProfiles returns the MonitorProfiles field if non-nil, zero value otherwise.

### GetMonitorProfilesOk

`func (o *UserScope) GetMonitorProfilesOk() (*[]string, bool)`

GetMonitorProfilesOk returns a tuple with the MonitorProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonitorProfiles

`func (o *UserScope) SetMonitorProfiles(v []string)`

SetMonitorProfiles sets MonitorProfiles field to given value.

### HasMonitorProfiles

`func (o *UserScope) HasMonitorProfiles() bool`

HasMonitorProfiles returns a boolean if a field has been set.

### GetDataStores

`func (o *UserScope) GetDataStores() []DataStoreScope`

GetDataStores returns the DataStores field if non-nil, zero value otherwise.

### GetDataStoresOk

`func (o *UserScope) GetDataStoresOk() (*[]DataStoreScope, bool)`

GetDataStoresOk returns a tuple with the DataStores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStores

`func (o *UserScope) SetDataStores(v []DataStoreScope)`

SetDataStores sets DataStores field to given value.

### HasDataStores

`func (o *UserScope) HasDataStores() bool`

HasDataStores returns a boolean if a field has been set.

### GetQueryPipelines

`func (o *UserScope) GetQueryPipelines() []string`

GetQueryPipelines returns the QueryPipelines field if non-nil, zero value otherwise.

### GetQueryPipelinesOk

`func (o *UserScope) GetQueryPipelinesOk() (*[]string, bool)`

GetQueryPipelinesOk returns a tuple with the QueryPipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryPipelines

`func (o *UserScope) SetQueryPipelines(v []string)`

SetQueryPipelines sets QueryPipelines field to given value.

### HasQueryPipelines

`func (o *UserScope) HasQueryPipelines() bool`

HasQueryPipelines returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


