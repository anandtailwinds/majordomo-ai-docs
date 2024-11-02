# DeleteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeletedRecords** | Pointer to **int64** | The total number of deleted records. | [optional] 
**Response** | Pointer to **string** | Any message that is returned as a result of the operation. | [optional] 

## Methods

### NewDeleteResponse

`func NewDeleteResponse() *DeleteResponse`

NewDeleteResponse instantiates a new DeleteResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteResponseWithDefaults

`func NewDeleteResponseWithDefaults() *DeleteResponse`

NewDeleteResponseWithDefaults instantiates a new DeleteResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeletedRecords

`func (o *DeleteResponse) GetDeletedRecords() int64`

GetDeletedRecords returns the DeletedRecords field if non-nil, zero value otherwise.

### GetDeletedRecordsOk

`func (o *DeleteResponse) GetDeletedRecordsOk() (*int64, bool)`

GetDeletedRecordsOk returns a tuple with the DeletedRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedRecords

`func (o *DeleteResponse) SetDeletedRecords(v int64)`

SetDeletedRecords sets DeletedRecords field to given value.

### HasDeletedRecords

`func (o *DeleteResponse) HasDeletedRecords() bool`

HasDeletedRecords returns a boolean if a field has been set.

### GetResponse

`func (o *DeleteResponse) GetResponse() string`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *DeleteResponse) GetResponseOk() (*string, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *DeleteResponse) SetResponse(v string)`

SetResponse sets Response field to given value.

### HasResponse

`func (o *DeleteResponse) HasResponse() bool`

HasResponse returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


