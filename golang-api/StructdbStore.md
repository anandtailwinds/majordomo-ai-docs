# StructdbStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubType** | [**DataStoreSubTypes**](DataStoreSubTypes.md) |  | 
**ConnectString** | **string** | The endpoint of the structure database such as SQL/MongoDB. This string can contain keystore specification for any sensitive information. This is a mandatory parameter for structured and image databases. | 
**DatabaseName** | **string** | The name of the database in the structured database This is a mandatory parameter for structured and image databases. | 
**TableName** | **string** | The name of the table in the structured database. This is a mandatory parameter for structured and image databases. | 

## Methods

### NewStructdbStore

`func NewStructdbStore(subType DataStoreSubTypes, connectString string, databaseName string, tableName string, ) *StructdbStore`

NewStructdbStore instantiates a new StructdbStore object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStructdbStoreWithDefaults

`func NewStructdbStoreWithDefaults() *StructdbStore`

NewStructdbStoreWithDefaults instantiates a new StructdbStore object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubType

`func (o *StructdbStore) GetSubType() DataStoreSubTypes`

GetSubType returns the SubType field if non-nil, zero value otherwise.

### GetSubTypeOk

`func (o *StructdbStore) GetSubTypeOk() (*DataStoreSubTypes, bool)`

GetSubTypeOk returns a tuple with the SubType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubType

`func (o *StructdbStore) SetSubType(v DataStoreSubTypes)`

SetSubType sets SubType field to given value.


### GetConnectString

`func (o *StructdbStore) GetConnectString() string`

GetConnectString returns the ConnectString field if non-nil, zero value otherwise.

### GetConnectStringOk

`func (o *StructdbStore) GetConnectStringOk() (*string, bool)`

GetConnectStringOk returns a tuple with the ConnectString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectString

`func (o *StructdbStore) SetConnectString(v string)`

SetConnectString sets ConnectString field to given value.


### GetDatabaseName

`func (o *StructdbStore) GetDatabaseName() string`

GetDatabaseName returns the DatabaseName field if non-nil, zero value otherwise.

### GetDatabaseNameOk

`func (o *StructdbStore) GetDatabaseNameOk() (*string, bool)`

GetDatabaseNameOk returns a tuple with the DatabaseName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabaseName

`func (o *StructdbStore) SetDatabaseName(v string)`

SetDatabaseName sets DatabaseName field to given value.


### GetTableName

`func (o *StructdbStore) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *StructdbStore) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *StructdbStore) SetTableName(v string)`

SetTableName sets TableName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


