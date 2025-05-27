# WorkflowRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this workflow belongs to. | 
**Name** | **string** | Name of the workflow. | 
**RunArgs** | Pointer to **map[string]interface{}** | The arguments for the workflow run. | [optional] 

## Methods

### NewWorkflowRun

`func NewWorkflowRun(workspace string, name string, ) *WorkflowRun`

NewWorkflowRun instantiates a new WorkflowRun object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowRunWithDefaults

`func NewWorkflowRunWithDefaults() *WorkflowRun`

NewWorkflowRunWithDefaults instantiates a new WorkflowRun object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *WorkflowRun) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *WorkflowRun) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *WorkflowRun) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *WorkflowRun) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowRun) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowRun) SetName(v string)`

SetName sets Name field to given value.


### GetRunArgs

`func (o *WorkflowRun) GetRunArgs() map[string]interface{}`

GetRunArgs returns the RunArgs field if non-nil, zero value otherwise.

### GetRunArgsOk

`func (o *WorkflowRun) GetRunArgsOk() (*map[string]interface{}, bool)`

GetRunArgsOk returns a tuple with the RunArgs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunArgs

`func (o *WorkflowRun) SetRunArgs(v map[string]interface{})`

SetRunArgs sets RunArgs field to given value.

### HasRunArgs

`func (o *WorkflowRun) HasRunArgs() bool`

HasRunArgs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


