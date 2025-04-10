# Workflow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**WorkflowType** | [**WorkflowTypes**](WorkflowTypes.md) |  | 
**Contents** | Pointer to **string** | Describes the work done by the workflow. | [optional] 
**UserName** | **string** | Name of the user triggering the workflow. | 
**Workspace** | **string** | Workspace in which the workflow is triggered. | 
**Steps** | [**[]WorkflowStep**](WorkflowStep.md) | Workflow specific data. | 

## Methods

### NewWorkflow

`func NewWorkflow(name string, workflowType WorkflowTypes, userName string, workspace string, steps []WorkflowStep, ) *Workflow`

NewWorkflow instantiates a new Workflow object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowWithDefaults

`func NewWorkflowWithDefaults() *Workflow`

NewWorkflowWithDefaults instantiates a new Workflow object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

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

`func (o *Workflow) GetWorkflowType() WorkflowTypes`

GetWorkflowType returns the WorkflowType field if non-nil, zero value otherwise.

### GetWorkflowTypeOk

`func (o *Workflow) GetWorkflowTypeOk() (*WorkflowTypes, bool)`

GetWorkflowTypeOk returns a tuple with the WorkflowType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflowType

`func (o *Workflow) SetWorkflowType(v WorkflowTypes)`

SetWorkflowType sets WorkflowType field to given value.


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

### GetUserName

`func (o *Workflow) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *Workflow) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *Workflow) SetUserName(v string)`

SetUserName sets UserName field to given value.


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



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


