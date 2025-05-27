# InferenceProfileCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace to run the command in. | 
**Name** | **string** | The name of the inference profile. | 
**Command** | [**DeploymentCommands**](DeploymentCommands.md) |  | 
**Params** | Pointer to **map[string]interface{}** | The additional arameters for the command, depends on each command.   &lt;b&gt;DEPLOYMENT_COMMAND_POD_LOGS&lt;/b&gt;  pod_name : The name of the POD for which to retrieve the logs.  | [optional] 

## Methods

### NewInferenceProfileCommand

`func NewInferenceProfileCommand(workspace string, name string, command DeploymentCommands, ) *InferenceProfileCommand`

NewInferenceProfileCommand instantiates a new InferenceProfileCommand object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInferenceProfileCommandWithDefaults

`func NewInferenceProfileCommandWithDefaults() *InferenceProfileCommand`

NewInferenceProfileCommandWithDefaults instantiates a new InferenceProfileCommand object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *InferenceProfileCommand) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *InferenceProfileCommand) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *InferenceProfileCommand) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *InferenceProfileCommand) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *InferenceProfileCommand) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *InferenceProfileCommand) SetName(v string)`

SetName sets Name field to given value.


### GetCommand

`func (o *InferenceProfileCommand) GetCommand() DeploymentCommands`

GetCommand returns the Command field if non-nil, zero value otherwise.

### GetCommandOk

`func (o *InferenceProfileCommand) GetCommandOk() (*DeploymentCommands, bool)`

GetCommandOk returns a tuple with the Command field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommand

`func (o *InferenceProfileCommand) SetCommand(v DeploymentCommands)`

SetCommand sets Command field to given value.


### GetParams

`func (o *InferenceProfileCommand) GetParams() map[string]interface{}`

GetParams returns the Params field if non-nil, zero value otherwise.

### GetParamsOk

`func (o *InferenceProfileCommand) GetParamsOk() (*map[string]interface{}, bool)`

GetParamsOk returns a tuple with the Params field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParams

`func (o *InferenceProfileCommand) SetParams(v map[string]interface{})`

SetParams sets Params field to given value.

### HasParams

`func (o *InferenceProfileCommand) HasParams() bool`

HasParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


