# LLMQueryStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LlmModelInfo** | [**ModelInfo**](ModelInfo.md) |  | 
**QueryString** | **string** | Query string | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewLLMQueryStep

`func NewLLMQueryStep(llmModelInfo ModelInfo, queryString string, ) *LLMQueryStep`

NewLLMQueryStep instantiates a new LLMQueryStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLLMQueryStepWithDefaults

`func NewLLMQueryStepWithDefaults() *LLMQueryStep`

NewLLMQueryStepWithDefaults instantiates a new LLMQueryStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLlmModelInfo

`func (o *LLMQueryStep) GetLlmModelInfo() ModelInfo`

GetLlmModelInfo returns the LlmModelInfo field if non-nil, zero value otherwise.

### GetLlmModelInfoOk

`func (o *LLMQueryStep) GetLlmModelInfoOk() (*ModelInfo, bool)`

GetLlmModelInfoOk returns a tuple with the LlmModelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelInfo

`func (o *LLMQueryStep) SetLlmModelInfo(v ModelInfo)`

SetLlmModelInfo sets LlmModelInfo field to given value.


### GetQueryString

`func (o *LLMQueryStep) GetQueryString() string`

GetQueryString returns the QueryString field if non-nil, zero value otherwise.

### GetQueryStringOk

`func (o *LLMQueryStep) GetQueryStringOk() (*string, bool)`

GetQueryStringOk returns a tuple with the QueryString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryString

`func (o *LLMQueryStep) SetQueryString(v string)`

SetQueryString sets QueryString field to given value.


### GetQueryParams

`func (o *LLMQueryStep) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *LLMQueryStep) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *LLMQueryStep) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *LLMQueryStep) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


