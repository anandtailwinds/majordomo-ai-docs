# Workspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the workspace. | 
**WorkerName** | **string** | Name of the worker associated with the workspace. | 
**MonitorProfile** | Pointer to **string** | The monitoring profile enabled for this workspace. | [optional] 

## Methods

### NewWorkspace

`func NewWorkspace(name string, workerName string, ) *Workspace`

NewWorkspace instantiates a new Workspace object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkspaceWithDefaults

`func NewWorkspaceWithDefaults() *Workspace`

NewWorkspaceWithDefaults instantiates a new Workspace object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Workspace) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workspace) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workspace) SetName(v string)`

SetName sets Name field to given value.


### GetWorkerName

`func (o *Workspace) GetWorkerName() string`

GetWorkerName returns the WorkerName field if non-nil, zero value otherwise.

### GetWorkerNameOk

`func (o *Workspace) GetWorkerNameOk() (*string, bool)`

GetWorkerNameOk returns a tuple with the WorkerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkerName

`func (o *Workspace) SetWorkerName(v string)`

SetWorkerName sets WorkerName field to given value.


### GetMonitorProfile

`func (o *Workspace) GetMonitorProfile() string`

GetMonitorProfile returns the MonitorProfile field if non-nil, zero value otherwise.

### GetMonitorProfileOk

`func (o *Workspace) GetMonitorProfileOk() (*string, bool)`

GetMonitorProfileOk returns a tuple with the MonitorProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonitorProfile

`func (o *Workspace) SetMonitorProfile(v string)`

SetMonitorProfile sets MonitorProfile field to given value.

### HasMonitorProfile

`func (o *Workspace) HasMonitorProfile() bool`

HasMonitorProfile returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


