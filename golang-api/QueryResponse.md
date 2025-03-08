# QueryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TextResponse** | Pointer to **string** | Response from LLM for the user query. | [optional] 
**SqlResponse** | Pointer to [**SQLResponse**](SQLResponse.md) |  | [optional] 
**NoSqlResponse** | Pointer to [**NoSQLResponse**](NoSQLResponse.md) |  | [optional] 
**Metadata** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewQueryResponse

`func NewQueryResponse() *QueryResponse`

NewQueryResponse instantiates a new QueryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryResponseWithDefaults

`func NewQueryResponseWithDefaults() *QueryResponse`

NewQueryResponseWithDefaults instantiates a new QueryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTextResponse

`func (o *QueryResponse) GetTextResponse() string`

GetTextResponse returns the TextResponse field if non-nil, zero value otherwise.

### GetTextResponseOk

`func (o *QueryResponse) GetTextResponseOk() (*string, bool)`

GetTextResponseOk returns a tuple with the TextResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextResponse

`func (o *QueryResponse) SetTextResponse(v string)`

SetTextResponse sets TextResponse field to given value.

### HasTextResponse

`func (o *QueryResponse) HasTextResponse() bool`

HasTextResponse returns a boolean if a field has been set.

### GetSqlResponse

`func (o *QueryResponse) GetSqlResponse() SQLResponse`

GetSqlResponse returns the SqlResponse field if non-nil, zero value otherwise.

### GetSqlResponseOk

`func (o *QueryResponse) GetSqlResponseOk() (*SQLResponse, bool)`

GetSqlResponseOk returns a tuple with the SqlResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSqlResponse

`func (o *QueryResponse) SetSqlResponse(v SQLResponse)`

SetSqlResponse sets SqlResponse field to given value.

### HasSqlResponse

`func (o *QueryResponse) HasSqlResponse() bool`

HasSqlResponse returns a boolean if a field has been set.

### GetNoSqlResponse

`func (o *QueryResponse) GetNoSqlResponse() NoSQLResponse`

GetNoSqlResponse returns the NoSqlResponse field if non-nil, zero value otherwise.

### GetNoSqlResponseOk

`func (o *QueryResponse) GetNoSqlResponseOk() (*NoSQLResponse, bool)`

GetNoSqlResponseOk returns a tuple with the NoSqlResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoSqlResponse

`func (o *QueryResponse) SetNoSqlResponse(v NoSQLResponse)`

SetNoSqlResponse sets NoSqlResponse field to given value.

### HasNoSqlResponse

`func (o *QueryResponse) HasNoSqlResponse() bool`

HasNoSqlResponse returns a boolean if a field has been set.

### GetMetadata

`func (o *QueryResponse) GetMetadata() map[string]string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *QueryResponse) GetMetadataOk() (*map[string]string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *QueryResponse) SetMetadata(v map[string]string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *QueryResponse) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


