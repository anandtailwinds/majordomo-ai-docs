# DataStoreStoreInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VectordbProfile** | **string** | Name of the Vector DB profile. This is mandatory parameter in case of vector database. | 
**EmbeddingModel** | **string** | The embedding model to be used while ingesting data. This is mandatory parameter in case of vector database. | 
**Shared** | Pointer to **bool** | This describes whether the data store is shared with others in the account for query purposes. | [optional] [default to false]
**SubType** | [**DataStoreSubTypes**](DataStoreSubTypes.md) |  | 
**ConnectString** | **string** | The endpoint of the structure database such as SQL/MongoDB. This string can contain keystore specification for any sensitive information. This is a mandatory parameter for structured and image databases. | 
**DatabaseName** | **string** | The name of the database in the structured database This is a mandatory parameter for structured and image databases. | 
**TableName** | **string** | The name of the table in the structured database. This is a mandatory parameter for structured and image databases. | 

## Methods

### NewDataStoreStoreInfo

`func NewDataStoreStoreInfo(vectordbProfile string, embeddingModel string, subType DataStoreSubTypes, connectString string, databaseName string, tableName string, ) *DataStoreStoreInfo`

NewDataStoreStoreInfo instantiates a new DataStoreStoreInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreStoreInfoWithDefaults

`func NewDataStoreStoreInfoWithDefaults() *DataStoreStoreInfo`

NewDataStoreStoreInfoWithDefaults instantiates a new DataStoreStoreInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVectordbProfile

`func (o *DataStoreStoreInfo) GetVectordbProfile() string`

GetVectordbProfile returns the VectordbProfile field if non-nil, zero value otherwise.

### GetVectordbProfileOk

`func (o *DataStoreStoreInfo) GetVectordbProfileOk() (*string, bool)`

GetVectordbProfileOk returns a tuple with the VectordbProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfile

`func (o *DataStoreStoreInfo) SetVectordbProfile(v string)`

SetVectordbProfile sets VectordbProfile field to given value.


### GetEmbeddingModel

`func (o *DataStoreStoreInfo) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *DataStoreStoreInfo) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *DataStoreStoreInfo) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.


### GetShared

`func (o *DataStoreStoreInfo) GetShared() bool`

GetShared returns the Shared field if non-nil, zero value otherwise.

### GetSharedOk

`func (o *DataStoreStoreInfo) GetSharedOk() (*bool, bool)`

GetSharedOk returns a tuple with the Shared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShared

`func (o *DataStoreStoreInfo) SetShared(v bool)`

SetShared sets Shared field to given value.

### HasShared

`func (o *DataStoreStoreInfo) HasShared() bool`

HasShared returns a boolean if a field has been set.

### GetSubType

`func (o *DataStoreStoreInfo) GetSubType() DataStoreSubTypes`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *DataStoreStoreInfo) GetSubTypeOk() (*DataStoreSubTypes, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *DataStoreStoreInfo) SetSubType(v DataStoreSubTypes)`

SetSubType sets SubType field to given value.


### GetConnectString

`func (o *DataStoreStoreInfo) GetConnectString() string`

GetConnectString returns the ConnectString field if non-nil, zero value otherwise.

### GetConnectStringOk

`func (o *DataStoreStoreInfo) GetConnectStringOk() (*string, bool)`

GetConnectStringOk returns a tuple with the ConnectString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectString

`func (o *DataStoreStoreInfo) SetConnectString(v string)`

SetConnectString sets ConnectString field to given value.


### GetDatabaseName

`func (o *DataStoreStoreInfo) GetDatabaseName() string`

GetDatabaseName returns the DatabaseName field if non-nil, zero value otherwise.

### GetDatabaseNameOk

`func (o *DataStoreStoreInfo) GetDatabaseNameOk() (*string, bool)`

GetDatabaseNameOk returns a tuple with the DatabaseName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabaseName

`func (o *DataStoreStoreInfo) SetDatabaseName(v string)`

SetDatabaseName sets DatabaseName field to given value.


### GetTableName

`func (o *DataStoreStoreInfo) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *DataStoreStoreInfo) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *DataStoreStoreInfo) SetTableName(v string)`

SetTableName sets TableName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


