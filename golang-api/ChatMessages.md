# ChatMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChatId** | **string** | Unique identifier for the chat. | 
**ChatName** | Pointer to **string** | Name of the chat history. | [optional] 
**CreatedBy** | **string** | Name of the user who created the chat conversations. | 
**LastUpdate** | **int64** | Timestamp of the last update to the chat history. | 
**Messages** | [**[]ChatMessage**](ChatMessage.md) | The list of chat messages in this chat. | 

## Methods

### NewChatMessages

`func NewChatMessages(chatId string, createdBy string, lastUpdate int64, messages []ChatMessage, ) *ChatMessages`

NewChatMessages instantiates a new ChatMessages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatMessagesWithDefaults

`func NewChatMessagesWithDefaults() *ChatMessages`

NewChatMessagesWithDefaults instantiates a new ChatMessages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChatId

`func (o *ChatMessages) GetChatId() string`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *ChatMessages) GetChatIdOk() (*string, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *ChatMessages) SetChatId(v string)`

SetChatId sets ChatId field to given value.


### GetChatName

`func (o *ChatMessages) GetChatName() string`

GetChatName returns the ChatName field if non-nil, zero value otherwise.

### GetChatNameOk

`func (o *ChatMessages) GetChatNameOk() (*string, bool)`

GetChatNameOk returns a tuple with the ChatName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatName

`func (o *ChatMessages) SetChatName(v string)`

SetChatName sets ChatName field to given value.

### HasChatName

`func (o *ChatMessages) HasChatName() bool`

HasChatName returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ChatMessages) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ChatMessages) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ChatMessages) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetLastUpdate

`func (o *ChatMessages) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *ChatMessages) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *ChatMessages) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.


### GetMessages

`func (o *ChatMessages) GetMessages() []ChatMessage`

GetMessages returns the Messages field if non-nil, zero value otherwise.

### GetMessagesOk

`func (o *ChatMessages) GetMessagesOk() (*[]ChatMessage, bool)`

GetMessagesOk returns a tuple with the Messages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessages

`func (o *ChatMessages) SetMessages(v []ChatMessage)`

SetMessages sets Messages field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


