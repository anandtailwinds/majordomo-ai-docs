# TestInference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace for the test inference request. | 
**RequestId** | **string** | Unique identifier for the request | 
**RequestUrl** | **string** | The URL to test inference. | 
**RequestType** | Pointer to **string** | HTTP Request type | [optional] 
**Payload** | **map[string]interface{}** | The JSON payload to be used for testing. | 
**QueryParams** | Pointer to **map[string]string** | The JSON payload to be used for testing. | [optional] 
**PathParams** | Pointer to **map[string]string** | The JSON payload to be used for testing. | [optional] 
**Timeout** | Pointer to **int32** | Timeout in seconds | [optional] [default to 30]

## Methods

### NewTestInference

`func NewTestInference(workspace string, requestId string, requestUrl string, payload map[string]interface{}, ) *TestInference`

NewTestInference instantiates a new TestInference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestInferenceWithDefaults

`func NewTestInferenceWithDefaults() *TestInference`

NewTestInferenceWithDefaults instantiates a new TestInference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *TestInference) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *TestInference) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *TestInference) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetRequestId

`func (o *TestInference) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TestInference) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TestInference) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetRequestUrl

`func (o *TestInference) GetRequestUrl() string`

GetRequestUrl returns the RequestUrl field if non-nil, zero value otherwise.

### GetRequestUrlOk

`func (o *TestInference) GetRequestUrlOk() (*string, bool)`

GetRequestUrlOk returns a tuple with the RequestUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestUrl

`func (o *TestInference) SetRequestUrl(v string)`

SetRequestUrl sets RequestUrl field to given value.


### GetRequestType

`func (o *TestInference) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *TestInference) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *TestInference) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *TestInference) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetPayload

`func (o *TestInference) GetPayload() map[string]interface{}`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *TestInference) GetPayloadOk() (*map[string]interface{}, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *TestInference) SetPayload(v map[string]interface{})`

SetPayload sets Payload field to given value.


### GetQueryParams

`func (o *TestInference) GetQueryParams() map[string]string`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *TestInference) GetQueryParamsOk() (*map[string]string, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *TestInference) SetQueryParams(v map[string]string)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *TestInference) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.

### GetPathParams

`func (o *TestInference) GetPathParams() map[string]string`

GetPathParams returns the PathParams field if non-nil, zero value otherwise.

### GetPathParamsOk

`func (o *TestInference) GetPathParamsOk() (*map[string]string, bool)`

GetPathParamsOk returns a tuple with the PathParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPathParams

`func (o *TestInference) SetPathParams(v map[string]string)`

SetPathParams sets PathParams field to given value.

### HasPathParams

`func (o *TestInference) HasPathParams() bool`

HasPathParams returns a boolean if a field has been set.

### GetTimeout

`func (o *TestInference) GetTimeout() int32`

GetTimeout returns the Timeout field if non-nil, zero value otherwise.

### GetTimeoutOk

`func (o *TestInference) GetTimeoutOk() (*int32, bool)`

GetTimeoutOk returns a tuple with the Timeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeout

`func (o *TestInference) SetTimeout(v int32)`

SetTimeout sets Timeout field to given value.

### HasTimeout

`func (o *TestInference) HasTimeout() bool`

HasTimeout returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


