# GenerateAppQueryStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DataStoreName** | **string** | The name of the data store to lookup. | 
**LlmModelProfile** | **string** | The name of the LLM model profile to lookup. | 
**LlmModelName** | **string** | The name of the LLM model to use. | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewGenerateAppQueryStep

`func NewGenerateAppQueryStep(dataStoreName string, llmModelProfile string, llmModelName string, ) *GenerateAppQueryStep`

NewGenerateAppQueryStep instantiates a new GenerateAppQueryStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenerateAppQueryStepWithDefaults

`func NewGenerateAppQueryStepWithDefaults() *GenerateAppQueryStep`

NewGenerateAppQueryStepWithDefaults instantiates a new GenerateAppQueryStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataStoreName

`func (o *GenerateAppQueryStep) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *GenerateAppQueryStep) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *GenerateAppQueryStep) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetLlmModelProfile

`func (o *GenerateAppQueryStep) GetLlmModelProfile() string`

GetLlmModelProfile returns the LlmModelProfile field if non-nil, zero value otherwise.

### GetLlmModelProfileOk

`func (o *GenerateAppQueryStep) GetLlmModelProfileOk() (*string, bool)`

GetLlmModelProfileOk returns a tuple with the LlmModelProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelProfile

`func (o *GenerateAppQueryStep) SetLlmModelProfile(v string)`

SetLlmModelProfile sets LlmModelProfile field to given value.


### GetLlmModelName

`func (o *GenerateAppQueryStep) GetLlmModelName() string`

GetLlmModelName returns the LlmModelName field if non-nil, zero value otherwise.

### GetLlmModelNameOk

`func (o *GenerateAppQueryStep) GetLlmModelNameOk() (*string, bool)`

GetLlmModelNameOk returns a tuple with the LlmModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelName

`func (o *GenerateAppQueryStep) SetLlmModelName(v string)`

SetLlmModelName sets LlmModelName field to given value.


### GetQueryParams

`func (o *GenerateAppQueryStep) GetQueryParams() QueryParams`

GetQueryParams returns the QueryParams field if non-nil, zero value otherwise.

### GetQueryParamsOk

`func (o *GenerateAppQueryStep) GetQueryParamsOk() (*QueryParams, bool)`

GetQueryParamsOk returns a tuple with the QueryParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryParams

`func (o *GenerateAppQueryStep) SetQueryParams(v QueryParams)`

SetQueryParams sets QueryParams field to given value.

### HasQueryParams

`func (o *GenerateAppQueryStep) HasQueryParams() bool`

HasQueryParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


