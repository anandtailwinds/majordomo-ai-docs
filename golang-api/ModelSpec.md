# ModelSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceType** | [**ModelSources**](ModelSources.md) |  | 
**AppProfileName** | **string** | Application profile containing the model files.  | 
**ModelInfo** | **map[string]interface{}** | Access information for the model. | 

## Methods

### NewModelSpec

`func NewModelSpec(sourceType ModelSources, appProfileName string, modelInfo map[string]interface{}, ) *ModelSpec`

NewModelSpec instantiates a new ModelSpec object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelSpecWithDefaults

`func NewModelSpecWithDefaults() *ModelSpec`

NewModelSpecWithDefaults instantiates a new ModelSpec object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceType

`func (o *ModelSpec) GetSourceType() ModelSources`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *ModelSpec) GetSourceTypeOk() (*ModelSources, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *ModelSpec) SetSourceType(v ModelSources)`

SetSourceType sets SourceType field to given value.


### GetAppProfileName

`func (o *ModelSpec) GetAppProfileName() string`

GetAppProfileName returns the AppProfileName field if non-nil, zero value otherwise.

### GetAppProfileNameOk

`func (o *ModelSpec) GetAppProfileNameOk() (*string, bool)`

GetAppProfileNameOk returns a tuple with the AppProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppProfileName

`func (o *ModelSpec) SetAppProfileName(v string)`

SetAppProfileName sets AppProfileName field to given value.


### GetModelInfo

`func (o *ModelSpec) GetModelInfo() map[string]interface{}`

GetModelInfo returns the ModelInfo field if non-nil, zero value otherwise.

### GetModelInfoOk

`func (o *ModelSpec) GetModelInfoOk() (*map[string]interface{}, bool)`

GetModelInfoOk returns a tuple with the ModelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelInfo

`func (o *ModelSpec) SetModelInfo(v map[string]interface{})`

SetModelInfo sets ModelInfo field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


