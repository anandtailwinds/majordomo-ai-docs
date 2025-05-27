# ModelConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model catalog. | 
**Workspace** | **string** | The workspace that contains the model catalog. | 
**Description** | **string** | Describe the model and its use here. | 
**ModelPackage** | [**ModelPackages**](ModelPackages.md) |  | 
**ToolName** | Pointer to **string** | The application profile containing information about the model storage.  | [optional] 
**StorageProfileName** | Pointer to **string** | The storage profile containing information about the model storage.  | [optional] 
**ModelInfo** | Pointer to **map[string]interface{}** | Parameters required for accessing the model.  image_name:  Name of the container image that serves the model.  | [optional] 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewModelConfig

`func NewModelConfig(name string, workspace string, description string, modelPackage ModelPackages, ) *ModelConfig`

NewModelConfig instantiates a new ModelConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelConfigWithDefaults

`func NewModelConfigWithDefaults() *ModelConfig`

NewModelConfigWithDefaults instantiates a new ModelConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ModelConfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelConfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelConfig) SetName(v string)`

SetName sets Name field to given value.


### GetWorkspace

`func (o *ModelConfig) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *ModelConfig) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *ModelConfig) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetDescription

`func (o *ModelConfig) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelConfig) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelConfig) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetModelPackage

`func (o *ModelConfig) GetModelPackage() ModelPackages`

GetModelPackage returns the ModelPackage field if non-nil, zero value otherwise.

### GetModelPackageOk

`func (o *ModelConfig) GetModelPackageOk() (*ModelPackages, bool)`

GetModelPackageOk returns a tuple with the ModelPackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelPackage

`func (o *ModelConfig) SetModelPackage(v ModelPackages)`

SetModelPackage sets ModelPackage field to given value.


### GetToolName

`func (o *ModelConfig) GetToolName() string`

GetToolName returns the ToolName field if non-nil, zero value otherwise.

### GetToolNameOk

`func (o *ModelConfig) GetToolNameOk() (*string, bool)`

GetToolNameOk returns a tuple with the ToolName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolName

`func (o *ModelConfig) SetToolName(v string)`

SetToolName sets ToolName field to given value.

### HasToolName

`func (o *ModelConfig) HasToolName() bool`

HasToolName returns a boolean if a field has been set.

### GetStorageProfileName

`func (o *ModelConfig) GetStorageProfileName() string`

GetStorageProfileName returns the StorageProfileName field if non-nil, zero value otherwise.

### GetStorageProfileNameOk

`func (o *ModelConfig) GetStorageProfileNameOk() (*string, bool)`

GetStorageProfileNameOk returns a tuple with the StorageProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageProfileName

`func (o *ModelConfig) SetStorageProfileName(v string)`

SetStorageProfileName sets StorageProfileName field to given value.

### HasStorageProfileName

`func (o *ModelConfig) HasStorageProfileName() bool`

HasStorageProfileName returns a boolean if a field has been set.

### GetModelInfo

`func (o *ModelConfig) GetModelInfo() map[string]interface{}`

GetModelInfo returns the ModelInfo field if non-nil, zero value otherwise.

### GetModelInfoOk

`func (o *ModelConfig) GetModelInfoOk() (*map[string]interface{}, bool)`

GetModelInfoOk returns a tuple with the ModelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelInfo

`func (o *ModelConfig) SetModelInfo(v map[string]interface{})`

SetModelInfo sets ModelInfo field to given value.

### HasModelInfo

`func (o *ModelConfig) HasModelInfo() bool`

HasModelInfo returns a boolean if a field has been set.

### GetSharedUsers

`func (o *ModelConfig) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *ModelConfig) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *ModelConfig) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *ModelConfig) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


