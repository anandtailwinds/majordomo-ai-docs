# LookupVectordbStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmbeddingModelInfo** | [**ModelInfo**](ModelInfo.md) |  | 
**VectordbInfo** | [**VectordbInfo**](VectordbInfo.md) |  | 
**QueryString** | **string** | Query string | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewLookupVectordbStep

`func NewLookupVectordbStep(embeddingModelInfo ModelInfo, vectordbInfo VectordbInfo, queryString string, ) *LookupVectordbStep`

NewLookupVectordbStep instantiates a new LookupVectordbStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLookupVectordbStepWithDefaults

`func NewLookupVectordbStepWithDefaults() *LookupVectordbStep`

NewLookupVectordbStepWithDefaults instantiates a new LookupVectordbStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmbeddingModelInfo

`func (o *LookupVectordbStep) GetEmbeddingModelInfo() ModelInfo`

GetEmbeddingModelInfo returns the EmbeddingModelInfo field if non-nil, zero value otherwise.

### GetEmbeddingModelInfoOk

`func (o *LookupVectordbStep) GetEmbeddingModelInfoOk() (*ModelInfo, bool)`

GetEmbeddingModelInfoOk returns a tuple with the EmbeddingModelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelInfo

`func (o *LookupVectordbStep) SetEmbeddingModelInfo(v ModelInfo)`

SetEmbeddingModelInfo sets EmbeddingModelInfo field to given value.


### GetVectordbInfo

`func (o *LookupVectordbStep) GetVectordbInfo() VectordbInfo`

GetVectordbInfo returns the VectordbInfo field if non-nil, zero value otherwise.

### GetVectordbInfoOk

`func (o *LookupVectordbStep) GetVectordbInfoOk() (*VectordbInfo, bool)`

GetVectordbInfoOk returns a tuple with the VectordbInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbInfo

`func (o *LookupVectordbStep) SetVectordbInfo(v VectordbInfo)`

SetVectordbInfo sets VectordbInfo field to given value.


### GetQueryString

`func (o *LookupVectordbStep) GetQueryString() string`

GetQueryString returns the QueryString field if non-nil, zero value otherwise.

### GetQueryStringOk

`func (o *LookupVectordbStep) GetQueryStringOk() (*string, bool)`

GetQueryStringOk returns a tuple with the QueryString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryString

`func (o *LookupVectordbStep) SetQueryString(v string)`

SetQueryString sets QueryString field to given value.


### GetQueryParams

`func (o *LookupVectordbStep) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *LookupVectordbStep) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *LookupVectordbStep) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *LookupVectordbStep) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


