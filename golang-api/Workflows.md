# Workflows

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workflows** | Pointer to [**[]WorkflowInfo**](WorkflowInfo.md) |  | [optional] 
**SharedProfiles** | Pointer to [**[]WorkflowInfo**](WorkflowInfo.md) |  | [optional] 

## Methods

### NewWorkflows

`func NewWorkflows() *Workflows`

NewWorkflows instantiates a new Workflows object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowsWithDefaults

`func NewWorkflowsWithDefaults() *Workflows`

NewWorkflowsWithDefaults instantiates a new Workflows object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkflows

`func (o *Workflows) GetWorkflows() []WorkflowInfo`

GetWorkflows returns the Workflows field if non-nil, zero value otherwise.

### GetWorkflowsOk

`func (o *Workflows) GetWorkflowsOk() (*[]WorkflowInfo, bool)`

GetWorkflowsOk returns a tuple with the Workflows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkflows

`func (o *Workflows) SetWorkflows(v []WorkflowInfo)`

SetWorkflows sets Workflows field to given value.

### HasWorkflows

`func (o *Workflows) HasWorkflows() bool`

HasWorkflows returns a boolean if a field has been set.

### GetSharedProfiles

`func (o *Workflows) GetSharedProfiles() []WorkflowInfo`

GetSharedProfiles returns the SharedProfiles field if non-nil, zero value otherwise.

### GetSharedProfilesOk

`func (o *Workflows) GetSharedProfilesOk() (*[]WorkflowInfo, bool)`

GetSharedProfilesOk returns a tuple with the SharedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedProfiles

`func (o *Workflows) SetSharedProfiles(v []WorkflowInfo)`

SetSharedProfiles sets SharedProfiles field to given value.

### HasSharedProfiles

`func (o *Workflows) HasSharedProfiles() bool`

HasSharedProfiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


