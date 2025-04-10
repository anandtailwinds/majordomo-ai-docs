# ModelInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ModelName** | **string** | Name of the model. | 
**ModelProvider** | [**ModelProviders**](ModelProviders.md) |  | 
**InferenceApi** | Pointer to [**InferenceApis**](InferenceApis.md) |  | [optional] 
**AccessInfo** | Pointer to **map[string]interface{}** | Any endpoint that is to be specified to reach the provider. | [optional] 

## Methods

### NewModelInfo

`func NewModelInfo(modelName string, modelProvider ModelProviders, ) *ModelInfo`

NewModelInfo instantiates a new ModelInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelInfoWithDefaults

`func NewModelInfoWithDefaults() *ModelInfo`

NewModelInfoWithDefaults instantiates a new ModelInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModelName

`func (o *ModelInfo) GetModelName() string`

GetModelName returns the ModelName field if non-nil, zero value otherwise.

### GetModelNameOk

`func (o *ModelInfo) GetModelNameOk() (*string, bool)`

GetModelNameOk returns a tuple with the ModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelName

`func (o *ModelInfo) SetModelName(v string)`

SetModelName sets ModelName field to given value.


### GetModelProvider

`func (o *ModelInfo) GetModelProvider() ModelProviders`

GetModelProvider returns the ModelProvider field if non-nil, zero value otherwise.

### GetModelProviderOk

`func (o *ModelInfo) GetModelProviderOk() (*ModelProviders, bool)`

GetModelProviderOk returns a tuple with the ModelProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelProvider

`func (o *ModelInfo) SetModelProvider(v ModelProviders)`

SetModelProvider sets ModelProvider field to given value.


### GetInferenceApi

`func (o *ModelInfo) GetInferenceApi() InferenceApis`

GetInferenceApi returns the InferenceApi field if non-nil, zero value otherwise.

### GetInferenceApiOk

`func (o *ModelInfo) GetInferenceApiOk() (*InferenceApis, bool)`

GetInferenceApiOk returns a tuple with the InferenceApi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInferenceApi

`func (o *ModelInfo) SetInferenceApi(v InferenceApis)`

SetInferenceApi sets InferenceApi field to given value.

### HasInferenceApi

`func (o *ModelInfo) HasInferenceApi() bool`

HasInferenceApi returns a boolean if a field has been set.

### GetAccessInfo

`func (o *ModelInfo) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *ModelInfo) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *ModelInfo) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *ModelInfo) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


