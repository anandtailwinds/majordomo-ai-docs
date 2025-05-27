# InferenceStatusInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InferenceName** | **string** | The name of the inference. | 
**Status** | **string** | The current status of the inference. | 
**Host** | **string** | The host for the inference. | 
**Url** | **string** | The URL for the inference. | 

## Methods

### NewInferenceStatusInfo

`func NewInferenceStatusInfo(inferenceName string, status string, host string, url string, ) *InferenceStatusInfo`

NewInferenceStatusInfo instantiates a new InferenceStatusInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInferenceStatusInfoWithDefaults

`func NewInferenceStatusInfoWithDefaults() *InferenceStatusInfo`

NewInferenceStatusInfoWithDefaults instantiates a new InferenceStatusInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInferenceName

`func (o *InferenceStatusInfo) GetInferenceName() string`

GetInferenceName returns the InferenceName field if non-nil, zero value otherwise.

### GetInferenceNameOk

`func (o *InferenceStatusInfo) GetInferenceNameOk() (*string, bool)`

GetInferenceNameOk returns a tuple with the InferenceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInferenceName

`func (o *InferenceStatusInfo) SetInferenceName(v string)`

SetInferenceName sets InferenceName field to given value.


### GetStatus

`func (o *InferenceStatusInfo) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InferenceStatusInfo) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InferenceStatusInfo) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetHost

`func (o *InferenceStatusInfo) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *InferenceStatusInfo) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *InferenceStatusInfo) SetHost(v string)`

SetHost sets Host field to given value.


### GetUrl

`func (o *InferenceStatusInfo) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *InferenceStatusInfo) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *InferenceStatusInfo) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


