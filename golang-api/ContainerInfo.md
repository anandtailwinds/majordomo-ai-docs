# ContainerInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainerName** | Pointer to **string** | The type of model source, such as container or weights. | [optional] 
**Ports** | Pointer to **[]string** | The type of model source, such as container or weights. | [optional] 
**EnvVars** | Pointer to **map[string]string** | Environment vars for the container. | [optional] 

## Methods

### NewContainerInfo

`func NewContainerInfo() *ContainerInfo`

NewContainerInfo instantiates a new ContainerInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContainerInfoWithDefaults

`func NewContainerInfoWithDefaults() *ContainerInfo`

NewContainerInfoWithDefaults instantiates a new ContainerInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContainerName

`func (o *ContainerInfo) GetContainerName() string`

GetContainerName returns the ContainerName field if non-nil, zero value otherwise.

### GetContainerNameOk

`func (o *ContainerInfo) GetContainerNameOk() (*string, bool)`

GetContainerNameOk returns a tuple with the ContainerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainerName

`func (o *ContainerInfo) SetContainerName(v string)`

SetContainerName sets ContainerName field to given value.

### HasContainerName

`func (o *ContainerInfo) HasContainerName() bool`

HasContainerName returns a boolean if a field has been set.

### GetPorts

`func (o *ContainerInfo) GetPorts() []string`

GetPorts returns the Ports field if non-nil, zero value otherwise.

### GetPortsOk

`func (o *ContainerInfo) GetPortsOk() (*[]string, bool)`

GetPortsOk returns a tuple with the Ports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPorts

`func (o *ContainerInfo) SetPorts(v []string)`

SetPorts sets Ports field to given value.

### HasPorts

`func (o *ContainerInfo) HasPorts() bool`

HasPorts returns a boolean if a field has been set.

### GetEnvVars

`func (o *ContainerInfo) GetEnvVars() map[string]string`

GetEnvVars returns the EnvVars field if non-nil, zero value otherwise.

### GetEnvVarsOk

`func (o *ContainerInfo) GetEnvVarsOk() (*map[string]string, bool)`

GetEnvVarsOk returns a tuple with the EnvVars field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvVars

`func (o *ContainerInfo) SetEnvVars(v map[string]string)`

SetEnvVars sets EnvVars field to given value.

### HasEnvVars

`func (o *ContainerInfo) HasEnvVars() bool`

HasEnvVars returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


