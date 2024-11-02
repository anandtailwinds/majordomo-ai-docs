# QueryParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TopK** | Pointer to **int32** | The number of vector db matches to consider for llm context | [optional] [default to 2]
**Temperature** | Pointer to **float32** | The temperature of the LLM processing, the higher the more creative the LLM is. | [optional] 
**DocMetadata** | Pointer to **map[string]string** | Dictionary of metadata key/value pairs that are to be inserted into the vector database along with the chunks. This is useful while retrieval to restrict the relevant chunks. | [optional] 
**QueryMode** | Pointer to [**QueryModes**](QueryModes.md) |  | [optional] 

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

### GetTemperature

`func (o *QueryParams) GetTemperature() float32`

GetTemperature returns the Temperature field if non-nil, zero value otherwise.

### GetTemperatureOk

`func (o *QueryParams) GetTemperatureOk() (*float32, bool)`

GetTemperatureOk returns a tuple with the Temperature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemperature

`func (o *QueryParams) SetTemperature(v float32)`

SetTemperature sets Temperature field to given value.

### HasTemperature

`func (o *QueryParams) HasTemperature() bool`

HasTemperature returns a boolean if a field has been set.

### GetDocMetadata

`func (o *QueryParams) GetDocMetadata() map[string]string`

GetDocMetadata returns the DocMetadata field if non-nil, zero value otherwise.

### GetDocMetadataOk

`func (o *QueryParams) GetDocMetadataOk() (*map[string]string, bool)`

GetDocMetadataOk returns a tuple with the DocMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocMetadata

`func (o *QueryParams) SetDocMetadata(v map[string]string)`

SetDocMetadata sets DocMetadata field to given value.

### HasDocMetadata

`func (o *QueryParams) HasDocMetadata() bool`

HasDocMetadata returns a boolean if a field has been set.

### GetQueryMode

`func (o *QueryParams) GetQueryMode() QueryModes`

GetQueryMode returns the QueryMode field if non-nil, zero value otherwise.

### GetQueryModeOk

`func (o *QueryParams) GetQueryModeOk() (*QueryModes, bool)`

GetQueryModeOk returns a tuple with the QueryMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryMode

`func (o *QueryParams) SetQueryMode(v QueryModes)`

SetQueryMode sets QueryMode field to given value.

### HasQueryMode

`func (o *QueryParams) HasQueryMode() bool`

HasQueryMode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


