# ErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Detail** | **string** | Details of the error. | 
**ErrorFields** | Pointer to **map[string]interface{}** | Error fields | [optional] 

## Methods

### NewErrorResponse

`func NewErrorResponse(detail string, ) *ErrorResponse`

NewErrorResponse instantiates a new ErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorResponseWithDefaults

`func NewErrorResponseWithDefaults() *ErrorResponse`

NewErrorResponseWithDefaults instantiates a new ErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetail

`func (o *ErrorResponse) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *ErrorResponse) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *ErrorResponse) SetDetail(v string)`

SetDetail sets Detail field to given value.


### GetErrorFields

`func (o *ErrorResponse) GetErrorFields() map[string]interface{}`

GetErrorFields returns the ErrorFields field if non-nil, zero value otherwise.

### GetErrorFieldsOk

`func (o *ErrorResponse) GetErrorFieldsOk() (*map[string]interface{}, bool)`

GetErrorFieldsOk returns a tuple with the ErrorFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorFields

`func (o *ErrorResponse) SetErrorFields(v map[string]interface{})`

SetErrorFields sets ErrorFields field to given value.

### HasErrorFields

`func (o *ErrorResponse) HasErrorFields() bool`

HasErrorFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


