# InferenceProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the inference deployment. | 
**Workspace** | **string** | Workspace in which the data store is present. | 
**ModelSpec** | [**ModelSpec**](ModelSpec.md) |  | 
**DeploymentSpec** | [**DeploymentSpec**](DeploymentSpec.md) |  | 
**Tags** | Pointer to **[]string** | Tags to describe the infra where it is running or what its purpose is. | [optional] 

## Methods

### NewInferenceProfile

`func NewInferenceProfile(name string, workspace string, modelSpec ModelSpec, deploymentSpec DeploymentSpec, ) *InferenceProfile`

NewInferenceProfile instantiates a new InferenceProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInferenceProfileWithDefaults

`func NewInferenceProfileWithDefaults() *InferenceProfile`

NewInferenceProfileWithDefaults instantiates a new InferenceProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *InferenceProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *InferenceProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *InferenceProfile) SetName(v string)`

SetName sets Name field to given value.


### GetWorkspace

`func (o *InferenceProfile) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *InferenceProfile) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *InferenceProfile) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetModelSpec

`func (o *InferenceProfile) GetModelSpec() ModelSpec`

GetModelSpec returns the ModelSpec field if non-nil, zero value otherwise.

### GetModelSpecOk

`func (o *InferenceProfile) GetModelSpecOk() (*ModelSpec, bool)`

GetModelSpecOk returns a tuple with the ModelSpec field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelSpec

`func (o *InferenceProfile) SetModelSpec(v ModelSpec)`

SetModelSpec sets ModelSpec field to given value.


### GetDeploymentSpec

`func (o *InferenceProfile) GetDeploymentSpec() DeploymentSpec`

GetDeploymentSpec returns the DeploymentSpec field if non-nil, zero value otherwise.

### GetDeploymentSpecOk

`func (o *InferenceProfile) GetDeploymentSpecOk() (*DeploymentSpec, bool)`

GetDeploymentSpecOk returns a tuple with the DeploymentSpec field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeploymentSpec

`func (o *InferenceProfile) SetDeploymentSpec(v DeploymentSpec)`

SetDeploymentSpec sets DeploymentSpec field to given value.


### GetTags

`func (o *InferenceProfile) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *InferenceProfile) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *InferenceProfile) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *InferenceProfile) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


