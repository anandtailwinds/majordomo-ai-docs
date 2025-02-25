# ChatInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChatId** | **string** | Unique identifier for the chat. | 
**ChatName** | Pointer to **string** | Name of the chat history. | [optional] 

## Methods

### NewChatInfo

`func NewChatInfo(chatId string, ) *ChatInfo`

NewChatInfo instantiates a new ChatInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatInfoWithDefaults

`func NewChatInfoWithDefaults() *ChatInfo`

NewChatInfoWithDefaults instantiates a new ChatInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChatId

`func (o *ChatInfo) GetChatId() string`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *ChatInfo) GetChatIdOk() (*string, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *ChatInfo) SetChatId(v string)`

SetChatId sets ChatId field to given value.


### GetChatName

`func (o *ChatInfo) GetChatName() string`

GetChatName returns the ChatName field if non-nil, zero value otherwise.

### GetChatNameOk

`func (o *ChatInfo) GetChatNameOk() (*string, bool)`

GetChatNameOk returns a tuple with the ChatName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatName

`func (o *ChatInfo) SetChatName(v string)`

SetChatName sets ChatName field to given value.

### HasChatName

`func (o *ChatInfo) HasChatName() bool`

HasChatName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


