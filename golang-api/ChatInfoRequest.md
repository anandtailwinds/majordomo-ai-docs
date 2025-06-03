# ChatInfoRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChatId** | **string** | Unique identifier for the chat. | 
**ChatName** | Pointer to **string** | Name of the chat history. | [optional] 
**Workspace** | **string** | Name of the workspace for the worker to reach the chat database. | 

## Methods

### NewChatInfoRequest

`func NewChatInfoRequest(chatId string, workspace string, ) *ChatInfoRequest`

NewChatInfoRequest instantiates a new ChatInfoRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatInfoRequestWithDefaults

`func NewChatInfoRequestWithDefaults() *ChatInfoRequest`

NewChatInfoRequestWithDefaults instantiates a new ChatInfoRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChatId

`func (o *ChatInfoRequest) GetChatId() string`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *ChatInfoRequest) GetChatIdOk() (*string, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *ChatInfoRequest) SetChatId(v string)`

SetChatId sets ChatId field to given value.


### GetChatName

`func (o *ChatInfoRequest) GetChatName() string`

GetChatName returns the ChatName field if non-nil, zero value otherwise.

### GetChatNameOk

`func (o *ChatInfoRequest) GetChatNameOk() (*string, bool)`

GetChatNameOk returns a tuple with the ChatName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatName

`func (o *ChatInfoRequest) SetChatName(v string)`

SetChatName sets ChatName field to given value.

### HasChatName

`func (o *ChatInfoRequest) HasChatName() bool`

HasChatName returns a boolean if a field has been set.

### GetWorkspace

`func (o *ChatInfoRequest) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *ChatInfoRequest) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *ChatInfoRequest) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


