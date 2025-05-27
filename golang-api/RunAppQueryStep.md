# RunAppQueryStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataStoreName** | **string** | The name of the data store to lookup. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewRunAppQueryStep

`func NewRunAppQueryStep(dataStoreName string, ) *RunAppQueryStep`

NewRunAppQueryStep instantiates a new RunAppQueryStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRunAppQueryStepWithDefaults

`func NewRunAppQueryStepWithDefaults() *RunAppQueryStep`

NewRunAppQueryStepWithDefaults instantiates a new RunAppQueryStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataStoreName

`func (o *RunAppQueryStep) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *RunAppQueryStep) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *RunAppQueryStep) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


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


