# ChatHistoryList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Chats** | Pointer to [**[]ChatHistoryInfo**](ChatHistoryInfo.md) | The list of chats along with their last updated timestamp. | [optional] 

## Methods

### NewChatHistoryList

`func NewChatHistoryList() *ChatHistoryList`

NewChatHistoryList instantiates a new ChatHistoryList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatHistoryListWithDefaults

`func NewChatHistoryListWithDefaults() *ChatHistoryList`

NewChatHistoryListWithDefaults instantiates a new ChatHistoryList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChats

`func (o *ChatHistoryList) GetChats() []ChatHistoryInfo`

GetChats returns the Chats field if non-nil, zero value otherwise.

### GetChatsOk

`func (o *ChatHistoryList) GetChatsOk() (*[]ChatHistoryInfo, bool)`

GetChatsOk returns a tuple with the Chats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChats

`func (o *ChatHistoryList) SetChats(v []ChatHistoryInfo)`

SetChats sets Chats field to given value.

### HasChats

`func (o *ChatHistoryList) HasChats() bool`

HasChats returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


