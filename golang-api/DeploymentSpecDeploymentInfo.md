# DeploymentSpecDeploymentInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainerName** | Pointer to **string** | The type of model source, such as container or weights. | [optional] 
**Ports** | Pointer to **[]string** | The type of model source, such as container or weights. | [optional] 
**EnvVars** | Pointer to **map[string]string** | Environment vars for the container. | [optional] 
**ModelSource** | Pointer to [**ModelSources**](ModelSources.md) |  | [optional] 

## Methods

### NewDeploymentSpecDeploymentInfo

`func NewDeploymentSpecDeploymentInfo() *DeploymentSpecDeploymentInfo`

NewDeploymentSpecDeploymentInfo instantiates a new DeploymentSpecDeploymentInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeploymentSpecDeploymentInfoWithDefaults

`func NewDeploymentSpecDeploymentInfoWithDefaults() *DeploymentSpecDeploymentInfo`

NewDeploymentSpecDeploymentInfoWithDefaults instantiates a new DeploymentSpecDeploymentInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContainerName

`func (o *DeploymentSpecDeploymentInfo) GetContainerName() string`

GetContainerName returns the ContainerName field if non-nil, zero value otherwise.

### GetContainerNameOk

`func (o *DeploymentSpecDeploymentInfo) GetContainerNameOk() (*string, bool)`

GetContainerNameOk returns a tuple with the ContainerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainerName

`func (o *DeploymentSpecDeploymentInfo) SetContainerName(v string)`

SetContainerName sets ContainerName field to given value.

### HasContainerName

`func (o *DeploymentSpecDeploymentInfo) HasContainerName() bool`

HasContainerName returns a boolean if a field has been set.

### GetPorts

`func (o *DeploymentSpecDeploymentInfo) GetPorts() []string`

GetPorts returns the Ports field if non-nil, zero value otherwise.

### GetPortsOk

`func (o *DeploymentSpecDeploymentInfo) GetPortsOk() (*[]string, bool)`

GetPortsOk returns a tuple with the Ports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPorts

`func (o *DeploymentSpecDeploymentInfo) SetPorts(v []string)`

SetPorts sets Ports field to given value.

### HasPorts

`func (o *DeploymentSpecDeploymentInfo) HasPorts() bool`

HasPorts returns a boolean if a field has been set.

### GetEnvVars

`func (o *DeploymentSpecDeploymentInfo) GetEnvVars() map[string]string`

GetEnvVars returns the EnvVars field if non-nil, zero value otherwise.

### GetEnvVarsOk

`func (o *DeploymentSpecDeploymentInfo) GetEnvVarsOk() (*map[string]string, bool)`

GetEnvVarsOk returns a tuple with the EnvVars field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvVars

`func (o *DeploymentSpecDeploymentInfo) SetEnvVars(v map[string]string)`

SetEnvVars sets EnvVars field to given value.

### HasEnvVars

`func (o *DeploymentSpecDeploymentInfo) HasEnvVars() bool`

HasEnvVars returns a boolean if a field has been set.

### GetModelSource

`func (o *DeploymentSpecDeploymentInfo) GetModelSource() ModelSources`

GetModelSource returns the ModelSource field if non-nil, zero value otherwise.

### GetModelSourceOk

`func (o *DeploymentSpecDeploymentInfo) GetModelSourceOk() (*ModelSources, bool)`

GetModelSourceOk returns a tuple with the ModelSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelSource

`func (o *DeploymentSpecDeploymentInfo) SetModelSource(v ModelSources)`

SetModelSource sets ModelSource field to given value.

### HasModelSource

`func (o *DeploymentSpecDeploymentInfo) HasModelSource() bool`

HasModelSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


