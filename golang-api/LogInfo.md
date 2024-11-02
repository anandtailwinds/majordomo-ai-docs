# LogInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspce in which the log was genereated. | 
**UserName** | **string** | The user for which this log was generated. | 
**LogLevel** | [**LogLevels**](LogLevels.md) |  | 
**Topic** | **string** | The topic of the log message. | 
**Timestamp** | **int64** | The timestamp of the generated log message. | 
**Message** | **string** | The log message generated for the user. | 

## Methods

### NewLogInfo

`func NewLogInfo(workspace string, userName string, logLevel LogLevels, topic string, timestamp int64, message string, ) *LogInfo`

NewLogInfo instantiates a new LogInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLogInfoWithDefaults

`func NewLogInfoWithDefaults() *LogInfo`

NewLogInfoWithDefaults instantiates a new LogInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *LogInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *LogInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *LogInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *LogInfo) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *LogInfo) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *LogInfo) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetLogLevel

`func (o *LogInfo) GetLogLevel() LogLevels`

GetLogLevel returns the LogLevel field if non-nil, zero value otherwise.

### GetLogLevelOk

`func (o *LogInfo) GetLogLevelOk() (*LogLevels, bool)`

GetLogLevelOk returns a tuple with the LogLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevel

`func (o *LogInfo) SetLogLevel(v LogLevels)`

SetLogLevel sets LogLevel field to given value.


### GetTopic

`func (o *LogInfo) GetTopic() string`

GetTopic returns the Topic field if non-nil, zero value otherwise.

### GetTopicOk

`func (o *LogInfo) GetTopicOk() (*string, bool)`

GetTopicOk returns a tuple with the Topic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopic

`func (o *LogInfo) SetTopic(v string)`

SetTopic sets Topic field to given value.


### GetTimestamp

`func (o *LogInfo) GetTimestamp() int64`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *LogInfo) GetTimestampOk() (*int64, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *LogInfo) SetTimestamp(v int64)`

SetTimestamp sets Timestamp field to given value.


### GetMessage

`func (o *LogInfo) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *LogInfo) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *LogInfo) SetMessage(v string)`

SetMessage sets Message field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


