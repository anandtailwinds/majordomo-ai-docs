# InferenceProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the inference deployment. | 
**Workspace** | **string** | Workspace in which the data store is present. | 
**ModelName** | **string** | Details of the model in the model catalog to be deployed.  | 
**TargetResourceName** | **string** | Details of the target resource in which the model is deployed.  | 
**RuntimeInfo** | Pointer to **map[string]interface{}** |  Optional parameters for deployment.  &lt;b&gt;Target type is TARGET_TYPE_CPU or TARGET_TYPE_GPU&lt;/b&gt;:  container_name: The name of the run time container that will be running the model.  ports: The list of ports to expose for the model container.  volumes: The volumes to mount onto the model container. The volume should be present in the compute resource that runs the container.  &lt;b&gt;Common for all target types&lt;/b&gt;  environment: The env vars to be added to the model container.  cmd_override: The new command to override the CMD of the model container.  &lt;b&gt;Target type is TARGET_TYPE_KSERVE_CLUSTER&lt;/b&gt;:  namespace: The Kubernetes namespace in which to run the inference.  min_scale: The minimum number of instances of the model to be run in the cluster.  max_scale: The maximum number of instances of the model to be run in the cluster.  target: The number of concurrent requests a pod can handle before scaling occurs.  | [optional] 
**Tags** | Pointer to **[]string** | Tags to describe the infra where it is running or what its purpose is. | [optional] 

## Methods

### NewInferenceProfile

`func NewInferenceProfile(name string, workspace string, modelName string, targetResourceName string, ) *InferenceProfile`

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


### GetModelName

`func (o *InferenceProfile) GetModelName() string`

GetModelName returns the ModelName field if non-nil, zero value otherwise.

### GetModelNameOk

`func (o *InferenceProfile) GetModelNameOk() (*string, bool)`

GetModelNameOk returns a tuple with the ModelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelName

`func (o *InferenceProfile) SetModelName(v string)`

SetModelName sets ModelName field to given value.


### GetTargetResourceName

`func (o *InferenceProfile) GetTargetResourceName() string`

GetTargetResourceName returns the TargetResourceName field if non-nil, zero value otherwise.

### GetTargetResourceNameOk

`func (o *InferenceProfile) GetTargetResourceNameOk() (*string, bool)`

GetTargetResourceNameOk returns a tuple with the TargetResourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetResourceName

`func (o *InferenceProfile) SetTargetResourceName(v string)`

SetTargetResourceName sets TargetResourceName field to given value.


### GetRuntimeInfo

`func (o *InferenceProfile) GetRuntimeInfo() map[string]interface{}`

GetRuntimeInfo returns the RuntimeInfo field if non-nil, zero value otherwise.

### GetRuntimeInfoOk

`func (o *InferenceProfile) GetRuntimeInfoOk() (*map[string]interface{}, bool)`

GetRuntimeInfoOk returns a tuple with the RuntimeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuntimeInfo

`func (o *InferenceProfile) SetRuntimeInfo(v map[string]interface{})`

SetRuntimeInfo sets RuntimeInfo field to given value.

### HasRuntimeInfo

`func (o *InferenceProfile) HasRuntimeInfo() bool`

HasRuntimeInfo returns a boolean if a field has been set.

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


