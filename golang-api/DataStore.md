# DataStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**Name** | **string** | Name of the data store. | 
**StoreType** | [**DataStoreTypes**](DataStoreTypes.md) |  | 
**VectordbStore** | Pointer to [**VectordbStore**](VectordbStore.md) |  | [optional] 
**StructdbStore** | Pointer to [**StructdbStore**](StructdbStore.md) |  | [optional] 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewDataStore

`func NewDataStore(workspace string, name string, storeType DataStoreTypes, ) *DataStore`

NewDataStore instantiates a new DataStore object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreWithDefaults

`func NewDataStoreWithDefaults() *DataStore`

NewDataStoreWithDefaults instantiates a new DataStore object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *DataStore) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *DataStore) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *DataStore) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *DataStore) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DataStore) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DataStore) SetName(v string)`

SetName sets Name field to given value.


### GetStoreType

`func (o *DataStore) GetStoreType() DataStoreTypes`

GetStoreType returns the StoreType field if non-nil, zero value otherwise.

### GetStoreTypeOk

`func (o *DataStore) GetStoreTypeOk() (*DataStoreTypes, bool)`

GetStoreTypeOk returns a tuple with the StoreType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoreType

`func (o *DataStore) SetStoreType(v DataStoreTypes)`

SetStoreType sets StoreType field to given value.


### GetVectordbStore

`func (o *DataStore) GetVectordbStore() VectordbStore`

GetVectordbStore returns the VectordbStore field if non-nil, zero value otherwise.

### GetVectordbStoreOk

`func (o *DataStore) GetVectordbStoreOk() (*VectordbStore, bool)`

GetVectordbStoreOk returns a tuple with the VectordbStore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbStore

`func (o *DataStore) SetVectordbStore(v VectordbStore)`

SetVectordbStore sets VectordbStore field to given value.

### HasVectordbStore

`func (o *DataStore) HasVectordbStore() bool`

HasVectordbStore returns a boolean if a field has been set.

### GetStructdbStore

`func (o *DataStore) GetStructdbStore() StructdbStore`

GetStructdbStore returns the StructdbStore field if non-nil, zero value otherwise.

### GetStructdbStoreOk

`func (o *DataStore) GetStructdbStoreOk() (*StructdbStore, bool)`

GetStructdbStoreOk returns a tuple with the StructdbStore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbStore

`func (o *DataStore) SetStructdbStore(v StructdbStore)`

SetStructdbStore sets StructdbStore field to given value.

### HasStructdbStore

`func (o *DataStore) HasStructdbStore() bool`

HasStructdbStore returns a boolean if a field has been set.

### GetSharedUsers

`func (o *DataStore) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *DataStore) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *DataStore) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *DataStore) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


