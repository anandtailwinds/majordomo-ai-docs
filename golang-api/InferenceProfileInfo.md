# InferenceProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**InferenceProfile**](InferenceProfile.md) |  | 
**LastCommand** | [**DeploymentCommands**](DeploymentCommands.md) |  | 
**CurrentStatus** | [**DeploymentStatus**](DeploymentStatus.md) |  | 
**ExecutionSuccess** | **int64** | The level of execution success in last run, updated after each message specifying the progress level from worker is received.  | 
**Logs** | Pointer to **[]string** | The logs from the deployment. | [optional] 
**CreatedBy** | **string** | The username who created this model profile | 
**CreatedAt** | **int64** | Timestamp of the model profile creation | 
**LastUpdate** | **int64** | Timestamp of the last update to the model profile | 

## Methods

### NewInferenceProfileInfo

`func NewInferenceProfileInfo(config InferenceProfile, lastCommand DeploymentCommands, currentStatus DeploymentStatus, executionSuccess int64, createdBy string, createdAt int64, lastUpdate int64, ) *InferenceProfileInfo`

NewInferenceProfileInfo instantiates a new InferenceProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInferenceProfileInfoWithDefaults

`func NewInferenceProfileInfoWithDefaults() *InferenceProfileInfo`

NewInferenceProfileInfoWithDefaults instantiates a new InferenceProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *InferenceProfileInfo) GetConfig() InferenceProfile`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *InferenceProfileInfo) GetConfigOk() (*InferenceProfile, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *InferenceProfileInfo) SetConfig(v InferenceProfile)`

SetConfig sets Config field to given value.


### GetLastCommand

`func (o *InferenceProfileInfo) GetLastCommand() DeploymentCommands`

GetLastCommand returns the LastCommand field if non-nil, zero value otherwise.

### GetLastCommandOk

`func (o *InferenceProfileInfo) GetLastCommandOk() (*DeploymentCommands, bool)`

GetLastCommandOk returns a tuple with the LastCommand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastCommand

`func (o *InferenceProfileInfo) SetLastCommand(v DeploymentCommands)`

SetLastCommand sets LastCommand field to given value.


### GetCurrentStatus

`func (o *InferenceProfileInfo) GetCurrentStatus() DeploymentStatus`

GetCurrentStatus returns the CurrentStatus field if non-nil, zero value otherwise.

### GetCurrentStatusOk

`func (o *InferenceProfileInfo) GetCurrentStatusOk() (*DeploymentStatus, bool)`

GetCurrentStatusOk returns a tuple with the CurrentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStatus

`func (o *InferenceProfileInfo) SetCurrentStatus(v DeploymentStatus)`

SetCurrentStatus sets CurrentStatus field to given value.


### GetExecutionSuccess

`func (o *InferenceProfileInfo) GetExecutionSuccess() int64`

GetExecutionSuccess returns the ExecutionSuccess field if non-nil, zero value otherwise.

### GetExecutionSuccessOk

`func (o *InferenceProfileInfo) GetExecutionSuccessOk() (*int64, bool)`

GetExecutionSuccessOk returns a tuple with the ExecutionSuccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExecutionSuccess

`func (o *InferenceProfileInfo) SetExecutionSuccess(v int64)`

SetExecutionSuccess sets ExecutionSuccess field to given value.


### GetLogs

`func (o *InferenceProfileInfo) GetLogs() []string`

GetLogs returns the Logs field if non-nil, zero value otherwise.

### GetLogsOk

`func (o *InferenceProfileInfo) GetLogsOk() (*[]string, bool)`

GetLogsOk returns a tuple with the Logs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogs

`func (o *InferenceProfileInfo) SetLogs(v []string)`

SetLogs sets Logs field to given value.

### HasLogs

`func (o *InferenceProfileInfo) HasLogs() bool`

HasLogs returns a boolean if a field has been set.

### GetCreatedBy

`func (o *InferenceProfileInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *InferenceProfileInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *InferenceProfileInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *InferenceProfileInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *InferenceProfileInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *InferenceProfileInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *InferenceProfileInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *InferenceProfileInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *InferenceProfileInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


