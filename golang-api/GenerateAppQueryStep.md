# GenerateAppQueryStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppInfo** | [**AppInfo**](AppInfo.md) |  | 
**EmbeddingModelInfo** | Pointer to [**ModelInfo**](ModelInfo.md) |  | [optional] 
**LlmModelInfo** | [**ModelInfo**](ModelInfo.md) |  | 
**QueryString** | **string** | Query string | 
**QueryParams** | Pointer to [**QueryParams**](QueryParams.md) |  | [optional] 

## Methods

### NewGenerateAppQueryStep

`func NewGenerateAppQueryStep(appInfo AppInfo, llmModelInfo ModelInfo, queryString string, ) *GenerateAppQueryStep`

NewGenerateAppQueryStep instantiates a new GenerateAppQueryStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenerateAppQueryStepWithDefaults

`func NewGenerateAppQueryStepWithDefaults() *GenerateAppQueryStep`

NewGenerateAppQueryStepWithDefaults instantiates a new GenerateAppQueryStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppInfo

`func (o *GenerateAppQueryStep) GetAppInfo() AppInfo`

GetAppInfo returns the AppInfo field if non-nil, zero value otherwise.

### GetAppInfoOk

`func (o *GenerateAppQueryStep) GetAppInfoOk() (*AppInfo, bool)`

GetAppInfoOk returns a tuple with the AppInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppInfo

`func (o *GenerateAppQueryStep) SetAppInfo(v AppInfo)`

SetAppInfo sets AppInfo field to given value.


### GetEmbeddingModelInfo

`func (o *GenerateAppQueryStep) GetEmbeddingModelInfo() ModelInfo`

GetEmbeddingModelInfo returns the EmbeddingModelInfo field if non-nil, zero value otherwise.

### GetEmbeddingModelInfoOk

`func (o *GenerateAppQueryStep) GetEmbeddingModelInfoOk() (*ModelInfo, bool)`

GetEmbeddingModelInfoOk returns a tuple with the EmbeddingModelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModelInfo

`func (o *GenerateAppQueryStep) SetEmbeddingModelInfo(v ModelInfo)`

SetEmbeddingModelInfo sets EmbeddingModelInfo field to given value.

### HasEmbeddingModelInfo

`func (o *GenerateAppQueryStep) HasEmbeddingModelInfo() bool`

HasEmbeddingModelInfo returns a boolean if a field has been set.

### GetLlmModelInfo

`func (o *GenerateAppQueryStep) GetLlmModelInfo() ModelInfo`

GetLlmModelInfo returns the LlmModelInfo field if non-nil, zero value otherwise.

### GetLlmModelInfoOk

`func (o *GenerateAppQueryStep) GetLlmModelInfoOk() (*ModelInfo, bool)`

GetLlmModelInfoOk returns a tuple with the LlmModelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelInfo

`func (o *GenerateAppQueryStep) SetLlmModelInfo(v ModelInfo)`

SetLlmModelInfo sets LlmModelInfo field to given value.


### GetQueryString

`func (o *GenerateAppQueryStep) GetQueryString() string`

GetQueryString returns the QueryString field if non-nil, zero value otherwise.

### GetQueryStringOk

`func (o *GenerateAppQueryStep) GetQueryStringOk() (*string, bool)`

GetQueryStringOk returns a tuple with the QueryString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryString

`func (o *GenerateAppQueryStep) SetQueryString(v string)`

SetQueryString sets QueryString field to given value.


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


