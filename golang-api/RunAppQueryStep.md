# RunAppQueryStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppInfo** | [**AppInfo**](AppInfo.md) |  | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewRunAppQueryStep

`func NewRunAppQueryStep(appInfo AppInfo, ) *RunAppQueryStep`

NewRunAppQueryStep instantiates a new RunAppQueryStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRunAppQueryStepWithDefaults

`func NewRunAppQueryStepWithDefaults() *RunAppQueryStep`

NewRunAppQueryStepWithDefaults instantiates a new RunAppQueryStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppInfo

`func (o *RunAppQueryStep) GetAppInfo() AppInfo`

GetAppInfo returns the AppInfo field if non-nil, zero value otherwise.

### GetAppInfoOk

`func (o *RunAppQueryStep) GetAppInfoOk() (*AppInfo, bool)`

GetAppInfoOk returns a tuple with the AppInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppInfo

`func (o *RunAppQueryStep) SetAppInfo(v AppInfo)`

SetAppInfo sets AppInfo field to given value.


### GetQueryParams

`func (o *RunAppQueryStep) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *RunAppQueryStep) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *RunAppQueryStep) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *RunAppQueryStep) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


