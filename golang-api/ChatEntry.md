# ChatEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChatId** | **string** | Unique identifier for the chat. | 
**Messages** | [**[]ChatMessage**](ChatMessage.md) | The list of chat messages in this chat. | 

## Methods

### NewChatEntry

`func NewChatEntry(chatId string, messages []ChatMessage, ) *ChatEntry`

NewChatEntry instantiates a new ChatEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatEntryWithDefaults

`func NewChatEntryWithDefaults() *ChatEntry`

NewChatEntryWithDefaults instantiates a new ChatEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChatId

`func (o *ChatEntry) GetChatId() string`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *ChatEntry) GetChatIdOk() (*string, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *ChatEntry) SetChatId(v string)`

SetChatId sets ChatId field to given value.


### GetMessages

`func (o *ChatEntry) GetMessages() []ChatMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *ChatEntry) GetMessagesOk() (*[]ChatMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *ChatEntry) SetMessages(v []ChatMessage)`

SetMessages sets Messages field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


