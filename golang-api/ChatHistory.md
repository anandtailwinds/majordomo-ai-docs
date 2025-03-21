# ChatHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uid** | **string** | Unique identifier for the chat. | 
**Name** | Pointer to **string** | Name of the chat history. | [optional] 

## Methods

### NewChatHistory

`func NewChatHistory(uid string, ) *ChatHistory`

NewChatHistory instantiates a new ChatHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatHistoryWithDefaults

`func NewChatHistoryWithDefaults() *ChatHistory`

NewChatHistoryWithDefaults instantiates a new ChatHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUid

`func (o *ChatHistory) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *ChatHistory) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *ChatHistory) SetUid(v string)`

SetUid sets Uid field to given value.


### GetName

`func (o *ChatHistory) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChatHistory) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChatHistory) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ChatHistory) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


