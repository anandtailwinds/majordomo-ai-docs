# DataStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**Name** | **string** | Name of the data store. | 
**StoreType** | [**DataStoreTypes**](DataStoreTypes.md) |  | 
**AppProfileName** | **string** | Name of the application profile. | 
**Contents** | Pointer to **string** | Description of the data store. This can be optionally included in queries. | [optional] 
**InstanceInfo** | Pointer to **map[string]interface{}** | Information about the vector data store. | [optional] 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewDataStore

`func NewDataStore(workspace string, name string, storeType DataStoreTypes, appProfileName string, ) *DataStore`

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


### GetAppProfileName

`func (o *DataStore) GetAppProfileName() string`

GetAppProfileName returns the AppProfileName field if non-nil, zero value otherwise.

### GetAppProfileNameOk

`func (o *DataStore) GetAppProfileNameOk() (*string, bool)`

GetAppProfileNameOk returns a tuple with the AppProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppProfileName

`func (o *DataStore) SetAppProfileName(v string)`

SetAppProfileName sets AppProfileName field to given value.


### GetContents

`func (o *DataStore) GetContents() string`

GetContents returns the Contents field if non-nil, zero value otherwise.

### GetContentsOk

`func (o *DataStore) GetContentsOk() (*string, bool)`

GetContentsOk returns a tuple with the Contents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContents

`func (o *DataStore) SetContents(v string)`

SetContents sets Contents field to given value.

### HasContents

`func (o *DataStore) HasContents() bool`

HasContents returns a boolean if a field has been set.

### GetInstanceInfo

`func (o *DataStore) GetInstanceInfo() map[string]interface{}`

GetInstanceInfo returns the InstanceInfo field if non-nil, zero value otherwise.

### GetInstanceInfoOk

`func (o *DataStore) GetInstanceInfoOk() (*map[string]interface{}, bool)`

GetInstanceInfoOk returns a tuple with the InstanceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceInfo

`func (o *DataStore) SetInstanceInfo(v map[string]interface{})`

SetInstanceInfo sets InstanceInfo field to given value.

### HasInstanceInfo

`func (o *DataStore) HasInstanceInfo() bool`

HasInstanceInfo returns a boolean if a field has been set.

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


