# InferenceCommandStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **bool** | The result of the inference profile command. | 
**Message** | **string** | The message returned for the inference profile command operation. | 

## Methods

### NewInferenceCommandStatusResponse

`func NewInferenceCommandStatusResponse(status bool, message string, ) *InferenceCommandStatusResponse`

NewInferenceCommandStatusResponse instantiates a new InferenceCommandStatusResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInferenceCommandStatusResponseWithDefaults

`func NewInferenceCommandStatusResponseWithDefaults() *InferenceCommandStatusResponse`

NewInferenceCommandStatusResponseWithDefaults instantiates a new InferenceCommandStatusResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *InferenceCommandStatusResponse) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InferenceCommandStatusResponse) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InferenceCommandStatusResponse) SetStatus(v bool)`

SetStatus sets Status field to given value.


### GetMessage

`func (o *InferenceCommandStatusResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *InferenceCommandStatusResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *InferenceCommandStatusResponse) SetMessage(v string)`

SetMessage sets Message field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


