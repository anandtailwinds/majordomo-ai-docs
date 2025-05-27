# LlmQueryStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LlmModelProfile** | **string** | The name of the LLM model profile to lookup. | 
**LlmModelName** | **string** | The name of the LLM model to use. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewLlmQueryStep

`func NewLlmQueryStep(llmModelProfile string, llmModelName string, ) *LlmQueryStep`

NewLlmQueryStep instantiates a new LlmQueryStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLlmQueryStepWithDefaults

`func NewLlmQueryStepWithDefaults() *LlmQueryStep`

NewLlmQueryStepWithDefaults instantiates a new LlmQueryStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLlmModelProfile

`func (o *LlmQueryStep) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *LlmQueryStep) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *LlmQueryStep) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModelName

`func (o *LlmQueryStep) GetLlmModelName() string`

GetLlmModelName returns the LlmModelName field if non-nil, zero value otherwise.

### GetLlmModelNameOk

`func (o *LlmQueryStep) GetLlmModelNameOk() (*string, bool)`

GetLlmModelNameOk returns a tuple with the LlmModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelName

`func (o *LlmQueryStep) SetLlmModelName(v string)`

SetLlmModelName sets LlmModelName field to given value.


### GetQueryParams

`func (o *LlmQueryStep) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *LlmQueryStep) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *LlmQueryStep) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *LlmQueryStep) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


