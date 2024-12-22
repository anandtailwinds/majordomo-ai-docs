# AllowedProfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the workspace. | 
**ModelProfiles** | Pointer to **[]string** | List of model profiles permitted for the user. | [optional] 
**VectordbProfiles** | Pointer to **[]string** | List of vectordb profiles permitted for the user. | [optional] 
**MonitorProfiles** | Pointer to **[]string** | List of monitor profiles permitted for the user. | [optional] 
**DataStores** | Pointer to [**[]DataStoreScope**](DataStoreScope.md) | List of data stores permitted for the user. | [optional] 
**QueryPipelines** | Pointer to **[]string** | List of data stores in each workspace that is created by the user. | [optional] 

## Methods

### NewAllowedProfiles

`func NewAllowedProfiles(name string, ) *AllowedProfiles`

NewAllowedProfiles instantiates a new AllowedProfiles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllowedProfilesWithDefaults

`func NewAllowedProfilesWithDefaults() *AllowedProfiles`

NewAllowedProfilesWithDefaults instantiates a new AllowedProfiles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AllowedProfiles) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AllowedProfiles) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AllowedProfiles) SetName(v string)`

SetName sets Name field to given value.


### GetModelProfiles

`func (o *AllowedProfiles) GetModelProfiles() []string`

GetModelProfiles returns the ModelProfiles field if non-nil, zero value otherwise.

### GetModelProfilesOk

`func (o *AllowedProfiles) GetModelProfilesOk() (*[]string, bool)`

GetModelProfilesOk returns a tuple with the ModelProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelProfiles

`func (o *AllowedProfiles) SetModelProfiles(v []string)`

SetModelProfiles sets ModelProfiles field to given value.

### HasModelProfiles

`func (o *AllowedProfiles) HasModelProfiles() bool`

HasModelProfiles returns a boolean if a field has been set.

### GetVectordbProfiles

`func (o *AllowedProfiles) GetVectordbProfiles() []string`

GetVectordbProfiles returns the VectordbProfiles field if non-nil, zero value otherwise.

### GetVectordbProfilesOk

`func (o *AllowedProfiles) GetVectordbProfilesOk() (*[]string, bool)`

GetVectordbProfilesOk returns a tuple with the VectordbProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfiles

`func (o *AllowedProfiles) SetVectordbProfiles(v []string)`

SetVectordbProfiles sets VectordbProfiles field to given value.

### HasVectordbProfiles

`func (o *AllowedProfiles) HasVectordbProfiles() bool`

HasVectordbProfiles returns a boolean if a field has been set.

### GetMonitorProfiles

`func (o *AllowedProfiles) GetMonitorProfiles() []string`

GetMonitorProfiles returns the MonitorProfiles field if non-nil, zero value otherwise.

### GetMonitorProfilesOk

`func (o *AllowedProfiles) GetMonitorProfilesOk() (*[]string, bool)`

GetMonitorProfilesOk returns a tuple with the MonitorProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonitorProfiles

`func (o *AllowedProfiles) SetMonitorProfiles(v []string)`

SetMonitorProfiles sets MonitorProfiles field to given value.

### HasMonitorProfiles

`func (o *AllowedProfiles) HasMonitorProfiles() bool`

HasMonitorProfiles returns a boolean if a field has been set.

### GetDataStores

`func (o *AllowedProfiles) GetDataStores() []DataStoreScope`

GetDataStores returns the DataStores field if non-nil, zero value otherwise.

### GetDataStoresOk

`func (o *AllowedProfiles) GetDataStoresOk() (*[]DataStoreScope, bool)`

GetDataStoresOk returns a tuple with the DataStores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStores

`func (o *AllowedProfiles) SetDataStores(v []DataStoreScope)`

SetDataStores sets DataStores field to given value.

### HasDataStores

`func (o *AllowedProfiles) HasDataStores() bool`

HasDataStores returns a boolean if a field has been set.

### GetQueryPipelines

`func (o *AllowedProfiles) GetQueryPipelines() []string`

GetQueryPipelines returns the QueryPipelines field if non-nil, zero value otherwise.

### GetQueryPipelinesOk

`func (o *AllowedProfiles) GetQueryPipelinesOk() (*[]string, bool)`

GetQueryPipelinesOk returns a tuple with the QueryPipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryPipelines

`func (o *AllowedProfiles) SetQueryPipelines(v []string)`

SetQueryPipelines sets QueryPipelines field to given value.

### HasQueryPipelines

`func (o *AllowedProfiles) HasQueryPipelines() bool`

HasQueryPipelines returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


