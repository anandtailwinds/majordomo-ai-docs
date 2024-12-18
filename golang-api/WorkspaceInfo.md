# WorkspaceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the workspace. | 
**WorkerName** | **string** | Name of the worker associated with the workspace. | 
**MonitorProfile** | Pointer to **string** | The monitoring profile enabled for this workspace. | [optional] 
**CreatedBy** | **string** | The username who created this workspace. | 
**CreatedAt** | **int64** | Timestamp of the workspace creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the workspace. | 

## Methods

### NewWorkspaceInfo

`func NewWorkspaceInfo(name string, workerName string, createdBy string, createdAt int64, lastUpdate int64, ) *WorkspaceInfo`

NewWorkspaceInfo instantiates a new WorkspaceInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkspaceInfoWithDefaults

`func NewWorkspaceInfoWithDefaults() *WorkspaceInfo`

NewWorkspaceInfoWithDefaults instantiates a new WorkspaceInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *WorkspaceInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkspaceInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkspaceInfo) SetName(v string)`

SetName sets Name field to given value.


### GetWorkerName

`func (o *WorkspaceInfo) GetWorkerName() string`

GetWorkerName returns the WorkerName field if non-nil, zero value otherwise.

### GetWorkerNameOk

`func (o *WorkspaceInfo) GetWorkerNameOk() (*string, bool)`

GetWorkerNameOk returns a tuple with the WorkerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkerName

`func (o *WorkspaceInfo) SetWorkerName(v string)`

SetWorkerName sets WorkerName field to given value.


### GetMonitorProfile

`func (o *WorkspaceInfo) GetMonitorProfile() string`

GetMonitorProfile returns the MonitorProfile field if non-nil, zero value otherwise.

### GetMonitorProfileOk

`func (o *WorkspaceInfo) GetMonitorProfileOk() (*string, bool)`

GetMonitorProfileOk returns a tuple with the MonitorProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonitorProfile

`func (o *WorkspaceInfo) SetMonitorProfile(v string)`

SetMonitorProfile sets MonitorProfile field to given value.

### HasMonitorProfile

`func (o *WorkspaceInfo) HasMonitorProfile() bool`

HasMonitorProfile returns a boolean if a field has been set.

### GetCreatedBy

`func (o *WorkspaceInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *WorkspaceInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *WorkspaceInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *WorkspaceInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *WorkspaceInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *WorkspaceInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *WorkspaceInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *WorkspaceInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *WorkspaceInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


