# TestInferenceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatusCode** | **int32** | HTTP Status Code of the original test inference operation. | 
**RequestId** | **string** | Echo of the request ID | 
**Response** | **map[string]interface{}** | Response for the test request. | 
**Latency** | **int64** | The time taken for executing the request. | 

## Methods

### NewTestInferenceInfo

`func NewTestInferenceInfo(statusCode int32, requestId string, response map[string]interface{}, latency int64, ) *TestInferenceInfo`

NewTestInferenceInfo instantiates a new TestInferenceInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestInferenceInfoWithDefaults

`func NewTestInferenceInfoWithDefaults() *TestInferenceInfo`

NewTestInferenceInfoWithDefaults instantiates a new TestInferenceInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatusCode

`func (o *TestInferenceInfo) GetStatusCode() int32`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *TestInferenceInfo) GetStatusCodeOk() (*int32, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *TestInferenceInfo) SetStatusCode(v int32)`

SetStatusCode sets StatusCode field to given value.


### GetRequestId

`func (o *TestInferenceInfo) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TestInferenceInfo) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TestInferenceInfo) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetResponse

`func (o *TestInferenceInfo) GetResponse() map[string]interface{}`

GetResponse returns the Response field if non-nil, zero value otherwise.

### GetResponseOk

`func (o *TestInferenceInfo) GetResponseOk() (*map[string]interface{}, bool)`

GetResponseOk returns a tuple with the Response field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponse

`func (o *TestInferenceInfo) SetResponse(v map[string]interface{})`

SetResponse sets Response field to given value.


### GetLatency

`func (o *TestInferenceInfo) GetLatency() int64`

GetLatency returns the Latency field if non-nil, zero value otherwise.

### GetLatencyOk

`func (o *TestInferenceInfo) GetLatencyOk() (*int64, bool)`

GetLatencyOk returns a tuple with the Latency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatency

`func (o *TestInferenceInfo) SetLatency(v int64)`

SetLatency sets Latency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


