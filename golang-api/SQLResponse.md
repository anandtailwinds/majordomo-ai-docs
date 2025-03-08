# SQLResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Columns** | Pointer to **[]string** |  | [optional] 
**Data** | Pointer to **[][]interface{}** |  | [optional] 

## Methods

### NewSQLResponse

`func NewSQLResponse() *SQLResponse`

NewSQLResponse instantiates a new SQLResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSQLResponseWithDefaults

`func NewSQLResponseWithDefaults() *SQLResponse`

NewSQLResponseWithDefaults instantiates a new SQLResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColumns

`func (o *SQLResponse) GetColumns() []string`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *SQLResponse) GetColumnsOk() (*[]string, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *SQLResponse) SetColumns(v []string)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *SQLResponse) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetData

`func (o *SQLResponse) GetData() [][]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SQLResponse) GetDataOk() (*[][]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SQLResponse) SetData(v [][]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *SQLResponse) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


