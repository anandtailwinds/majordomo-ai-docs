# DataStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspce in which the data store is present. | 
**UserName** | **string** | The user who created the data store. | 
**Name** | **string** | Name of the data store. | 
**Type** | [**DataStoreTypes**](DataStoreTypes.md) |  | 
**SubType** | Pointer to [**DataStoreSubTypes**](DataStoreSubTypes.md) |  | [optional] 
**VectordbProfile** | Pointer to **string** | Name of the Vector DB profile. | [optional] 
**VectordbEmbedding** | Pointer to **string** | The embedding model to be used while ingesting data (applies for vector DB only) | [optional] 
**StructdbUrl** | Pointer to **string** | The endpoint of the structure database such as SQL/MongoDB. | [optional] 
**StructdbName** | Pointer to **string** | The name of the database in the structured database. | [optional] 
**StructdbTable** | Pointer to **string** | The name of the table in the structured database. | [optional] 

## Methods

### NewDataStore

`func NewDataStore(workspace string, userName string, name string, type_ DataStoreTypes, ) *DataStore`

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


### GetUserName

`func (o *DataStore) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *DataStore) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *DataStore) SetUserName(v string)`

SetUserName sets UserName field to given value.


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


### GetType

`func (o *DataStore) GetType() DataStoreTypes`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DataStore) GetTypeOk() (*DataStoreTypes, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DataStore) SetType(v DataStoreTypes)`

SetType sets Type field to given value.


### GetSubType

`func (o *DataStore) GetSubType() DataStoreSubTypes`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *DataStore) GetSubTypeOk() (*DataStoreSubTypes, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *DataStore) SetSubType(v DataStoreSubTypes)`

SetSubType sets SubType field to given value.

### HasSubType

`func (o *DataStore) HasSubType() bool`

HasSubType returns a boolean if a field has been set.

### GetVectordbProfile

`func (o *DataStore) GetVectordbProfile() string`

GetVectordbProfile returns the VectordbProfile field if non-nil, zero value otherwise.

### GetVectordbProfileOk

`func (o *DataStore) GetVectordbProfileOk() (*string, bool)`

GetVectordbProfileOk returns a tuple with the VectordbProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfile

`func (o *DataStore) SetVectordbProfile(v string)`

SetVectordbProfile sets VectordbProfile field to given value.

### HasVectordbProfile

`func (o *DataStore) HasVectordbProfile() bool`

HasVectordbProfile returns a boolean if a field has been set.

### GetVectordbEmbedding

`func (o *DataStore) GetVectordbEmbedding() string`

GetVectordbEmbedding returns the VectordbEmbedding field if non-nil, zero value otherwise.

### GetVectordbEmbeddingOk

`func (o *DataStore) GetVectordbEmbeddingOk() (*string, bool)`

GetVectordbEmbeddingOk returns a tuple with the VectordbEmbedding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbEmbedding

`func (o *DataStore) SetVectordbEmbedding(v string)`

SetVectordbEmbedding sets VectordbEmbedding field to given value.

### HasVectordbEmbedding

`func (o *DataStore) HasVectordbEmbedding() bool`

HasVectordbEmbedding returns a boolean if a field has been set.

### GetStructdbUrl

`func (o *DataStore) GetStructdbUrl() string`

GetStructdbUrl returns the StructdbUrl field if non-nil, zero value otherwise.

### GetStructdbUrlOk

`func (o *DataStore) GetStructdbUrlOk() (*string, bool)`

GetStructdbUrlOk returns a tuple with the StructdbUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbUrl

`func (o *DataStore) SetStructdbUrl(v string)`

SetStructdbUrl sets StructdbUrl field to given value.

### HasStructdbUrl

`func (o *DataStore) HasStructdbUrl() bool`

HasStructdbUrl returns a boolean if a field has been set.

### GetStructdbName

`func (o *DataStore) GetStructdbName() string`

GetStructdbName returns the StructdbName field if non-nil, zero value otherwise.

### GetStructdbNameOk

`func (o *DataStore) GetStructdbNameOk() (*string, bool)`

GetStructdbNameOk returns a tuple with the StructdbName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbName

`func (o *DataStore) SetStructdbName(v string)`

SetStructdbName sets StructdbName field to given value.

### HasStructdbName

`func (o *DataStore) HasStructdbName() bool`

HasStructdbName returns a boolean if a field has been set.

### GetStructdbTable

`func (o *DataStore) GetStructdbTable() string`

GetStructdbTable returns the StructdbTable field if non-nil, zero value otherwise.

### GetStructdbTableOk

`func (o *DataStore) GetStructdbTableOk() (*string, bool)`

GetStructdbTableOk returns a tuple with the StructdbTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbTable

`func (o *DataStore) SetStructdbTable(v string)`

SetStructdbTable sets StructdbTable field to given value.

### HasStructdbTable

`func (o *DataStore) HasStructdbTable() bool`

HasStructdbTable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


