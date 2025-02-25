# ChatHistoryInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uid** | **string** | Unique identifier for the chat. | 
**Name** | **string** | Name of the chat history. | 
**CreatedBy** | **string** | Name of the user who created the chat conversations. | 
**LastUpdate** | **int64** | Timestamp of the last update to the chat history. | 

## Methods

### NewChatHistoryInfo

`func NewChatHistoryInfo(uid string, name string, createdBy string, lastUpdate int64, ) *ChatHistoryInfo`

NewChatHistoryInfo instantiates a new ChatHistoryInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatHistoryInfoWithDefaults

`func NewChatHistoryInfoWithDefaults() *ChatHistoryInfo`

NewChatHistoryInfoWithDefaults instantiates a new ChatHistoryInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUid

`func (o *ChatHistoryInfo) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *ChatHistoryInfo) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *ChatHistoryInfo) SetUid(v string)`

SetUid sets Uid field to given value.


### GetName

`func (o *ChatHistoryInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChatHistoryInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChatHistoryInfo) SetName(v string)`

SetName sets Name field to given value.


### GetCreatedBy

`func (o *ChatHistoryInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ChatHistoryInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ChatHistoryInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetLastUpdate

`func (o *ChatHistoryInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *ChatHistoryInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *ChatHistoryInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


