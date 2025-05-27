# Workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the workflow is triggered. | 
**Name** | **string** | The id that uniquely identifies this workflow. | 
**WorkflowType** | **string** | The type of workflow, custom types are allowed as long as it is  supported in the worker.  | 
**WorkflowProvider** | Pointer to [**WorkflowProviders**](WorkflowProviders.md) |  | [optional] 
**Contents** | Pointer to **string** | Describes the work done by the workflow. | [optional] 
**Steps** | [**[]WorkflowStep**](WorkflowStep.md) | Workflow specific data. | 
**SharedUsers** | Pointer to **[]string** | The list of users this workflow is shared with. | [optional] 

## Methods

### NewWorkflow

`func NewWorkflow(workspace string, name string, workflowType string, steps []WorkflowStep, ) *Workflow`

NewWorkflow instantiates a new Workflow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowWithDefaults

`func NewWorkflowWithDefaults() *Workflow`

NewWorkflowWithDefaults instantiates a new Workflow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *Workflow) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *Workflow) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *Workflow) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *Workflow) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workflow) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workflow) SetName(v string)`

SetName sets Name field to given value.


### GetWorkflowType

`func (o *Workflow) GetWorkflowType() string`

GetWorkflowType returns the WorkflowType field if non-nil, zero value otherwise.

### GetWorkflowTypeOk

`func (o *Workflow) GetWorkflowTypeOk() (*string, bool)`

GetWorkflowTypeOk returns a tuple with the WorkflowType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowType

`func (o *Workflow) SetWorkflowType(v string)`

SetWorkflowType sets WorkflowType field to given value.


### GetWorkflowProvider

`func (o *Workflow) GetWorkflowProvider() WorkflowProviders`

GetWorkflowProvider returns the WorkflowProvider field if non-nil, zero value otherwise.

### GetWorkflowProviderOk

`func (o *Workflow) GetWorkflowProviderOk() (*WorkflowProviders, bool)`

GetWorkflowProviderOk returns a tuple with the WorkflowProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowProvider

`func (o *Workflow) SetWorkflowProvider(v WorkflowProviders)`

SetWorkflowProvider sets WorkflowProvider field to given value.

### HasWorkflowProvider

`func (o *Workflow) HasWorkflowProvider() bool`

HasWorkflowProvider returns a boolean if a field has been set.

### GetContents

`func (o *Workflow) GetContents() string`

GetContents returns the Contents field if non-nil, zero value otherwise.

### GetContentsOk

`func (o *Workflow) GetContentsOk() (*string, bool)`

GetContentsOk returns a tuple with the Contents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContents

`func (o *Workflow) SetContents(v string)`

SetContents sets Contents field to given value.

### HasContents

`func (o *Workflow) HasContents() bool`

HasContents returns a boolean if a field has been set.

### GetSteps

`func (o *Workflow) GetSteps() []WorkflowStep`

GetSteps returns the Steps field if non-nil, zero value otherwise.

### GetStepsOk

`func (o *Workflow) GetStepsOk() (*[]WorkflowStep, bool)`

GetStepsOk returns a tuple with the Steps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSteps

`func (o *Workflow) SetSteps(v []WorkflowStep)`

SetSteps sets Steps field to given value.


### GetSharedUsers

`func (o *Workflow) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *Workflow) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *Workflow) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *Workflow) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


