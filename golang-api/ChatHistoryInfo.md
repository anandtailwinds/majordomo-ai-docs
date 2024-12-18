# ChatHistoryInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | **string** | The user to whom these chats belong to. | 
**Name** | **string** | Name of the chat history. | 
**QaList** | Pointer to [**[]ChatQA**](ChatQA.md) | History of question answer interactions of the user. | [optional] 
**LastUpdate** | **int64** | Timestamp of the last update to the data store. | 
**Notes** | Pointer to **string** | User notes for the chat history. This can contain information such as model used, parameters used etc. and can be populated upto 250 characters. | [optional] 

## Methods

### NewChatHistoryInfo

`func NewChatHistoryInfo(createdBy string, name string, lastUpdate int64, ) *ChatHistoryInfo`

NewChatHistoryInfo instantiates a new ChatHistoryInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatHistoryInfoWithDefaults

`func NewChatHistoryInfoWithDefaults() *ChatHistoryInfo`

NewChatHistoryInfoWithDefaults instantiates a new ChatHistoryInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

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


### GetQaList

`func (o *ChatHistoryInfo) GetQaList() []ChatQA`

GetQaList returns the QaList field if non-nil, zero value otherwise.

### GetQaListOk

`func (o *ChatHistoryInfo) GetQaListOk() (*[]ChatQA, bool)`

GetQaListOk returns a tuple with the QaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQaList

`func (o *ChatHistoryInfo) SetQaList(v []ChatQA)`

SetQaList sets QaList field to given value.

### HasQaList

`func (o *ChatHistoryInfo) HasQaList() bool`

HasQaList returns a boolean if a field has been set.

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


### GetNotes

`func (o *ChatHistoryInfo) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ChatHistoryInfo) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ChatHistoryInfo) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ChatHistoryInfo) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


