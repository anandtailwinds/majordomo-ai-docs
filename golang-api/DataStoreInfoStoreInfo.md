# DataStoreInfoStoreInfo

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

### NewDataStoreInfoStoreInfo

`func NewDataStoreInfoStoreInfo(vectordbProfile string, embeddingModel string, subType DataStoreSubTypes, connectString string, databaseName string, tableName string, ) *DataStoreInfoStoreInfo`

NewDataStoreInfoStoreInfo instantiates a new DataStoreInfoStoreInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreInfoStoreInfoWithDefaults

`func NewDataStoreInfoStoreInfoWithDefaults() *DataStoreInfoStoreInfo`

NewDataStoreInfoStoreInfoWithDefaults instantiates a new DataStoreInfoStoreInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVectordbProfile

`func (o *DataStoreInfoStoreInfo) GetVectordbProfile() string`

GetVectordbProfile returns the VectordbProfile field if non-nil, zero value otherwise.

### GetVectordbProfileOk

`func (o *DataStoreInfoStoreInfo) GetVectordbProfileOk() (*string, bool)`

GetVectordbProfileOk returns a tuple with the VectordbProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfile

`func (o *DataStoreInfoStoreInfo) SetVectordbProfile(v string)`

SetVectordbProfile sets VectordbProfile field to given value.


### GetEmbeddingModel

`func (o *DataStoreInfoStoreInfo) GetEmbeddingModel() string`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *DataStoreInfoStoreInfo) GetEmbeddingModelOk() (*string, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *DataStoreInfoStoreInfo) SetEmbeddingModel(v string)`

SetEmbeddingModel sets EmbeddingModel field to given value.


### GetShared

`func (o *DataStoreInfoStoreInfo) GetShared() bool`

GetShared returns the Shared field if non-nil, zero value otherwise.

### GetSharedOk

`func (o *DataStoreInfoStoreInfo) GetSharedOk() (*bool, bool)`

GetSharedOk returns a tuple with the Shared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShared

`func (o *DataStoreInfoStoreInfo) SetShared(v bool)`

SetShared sets Shared field to given value.

### HasShared

`func (o *DataStoreInfoStoreInfo) HasShared() bool`

HasShared returns a boolean if a field has been set.

### GetSubType

`func (o *DataStoreInfoStoreInfo) GetSubType() DataStoreSubTypes`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *DataStoreInfoStoreInfo) GetSubTypeOk() (*DataStoreSubTypes, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *DataStoreInfoStoreInfo) SetSubType(v DataStoreSubTypes)`

SetSubType sets SubType field to given value.


### GetConnectString

`func (o *DataStoreInfoStoreInfo) GetConnectString() string`

GetConnectString returns the ConnectString field if non-nil, zero value otherwise.

### GetConnectStringOk

`func (o *DataStoreInfoStoreInfo) GetConnectStringOk() (*string, bool)`

GetConnectStringOk returns a tuple with the ConnectString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectString

`func (o *DataStoreInfoStoreInfo) SetConnectString(v string)`

SetConnectString sets ConnectString field to given value.


### GetDatabaseName

`func (o *DataStoreInfoStoreInfo) GetDatabaseName() string`

GetDatabaseName returns the DatabaseName field if non-nil, zero value otherwise.

### GetDatabaseNameOk

`func (o *DataStoreInfoStoreInfo) GetDatabaseNameOk() (*string, bool)`

GetDatabaseNameOk returns a tuple with the DatabaseName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabaseName

`func (o *DataStoreInfoStoreInfo) SetDatabaseName(v string)`

SetDatabaseName sets DatabaseName field to given value.


### GetTableName

`func (o *DataStoreInfoStoreInfo) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *DataStoreInfoStoreInfo) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *DataStoreInfoStoreInfo) SetTableName(v string)`

SetTableName sets TableName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


