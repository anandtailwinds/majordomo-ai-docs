# QueryParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TopK** | Pointer to **int32** | The number of vector db matches to consider for llm context | [optional] [default to 2]
**ModelTemperature** | Pointer to **float32** | The temperature of the LLM processing, the higher the more creative the LLM is. | [optional] 
**QueryMode** | Pointer to **string** |  | [optional] 

## Methods

### NewQueryParams

`func NewQueryParams() *QueryParams`

NewQueryParams instantiates a new QueryParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryParamsWithDefaults

`func NewQueryParamsWithDefaults() *QueryParams`

NewQueryParamsWithDefaults instantiates a new QueryParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTopK

`func (o *QueryParams) GetTopK() int32`

GetTopK returns the TopK field if non-nil, zero value otherwise.

### GetTopKOk

`func (o *QueryParams) GetTopKOk() (*int32, bool)`

GetTopKOk returns a tuple with the TopK field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopK

`func (o *QueryParams) SetTopK(v int32)`

SetTopK sets TopK field to given value.

### HasTopK

`func (o *QueryParams) HasTopK() bool`

HasTopK returns a boolean if a field has been set.

### GetModelTemperature

`func (o *QueryParams) GetModelTemperature() float32`

GetModelTemperature returns the ModelTemperature field if non-nil, zero value otherwise.

### GetModelTemperatureOk

`func (o *QueryParams) GetModelTemperatureOk() (*float32, bool)`

GetModelTemperatureOk returns a tuple with the ModelTemperature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelTemperature

`func (o *QueryParams) SetModelTemperature(v float32)`

SetModelTemperature sets ModelTemperature field to given value.

### HasModelTemperature

`func (o *QueryParams) HasModelTemperature() bool`

HasModelTemperature returns a boolean if a field has been set.

### GetQueryMode

`func (o *QueryParams) GetQueryMode() string`

GetQueryMode returns the QueryMode field if non-nil, zero value otherwise.

### GetQueryModeOk

`func (o *QueryParams) GetQueryModeOk() (*string, bool)`

GetQueryModeOk returns a tuple with the QueryMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryMode

`func (o *QueryParams) SetQueryMode(v string)`

SetQueryMode sets QueryMode field to given value.

### HasQueryMode

`func (o *QueryParams) HasQueryMode() bool`

HasQueryMode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


