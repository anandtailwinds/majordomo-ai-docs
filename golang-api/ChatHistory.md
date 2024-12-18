# ChatHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Previous name of the chat history. | 
**NewName** | Pointer to **string** | New name of the chat history. | [optional] 
**QaList** | Pointer to [**[]ChatQA**](ChatQA.md) | History of question answer interactions of the user. | [optional] 
**Notes** | Pointer to **string** | User notes for the chat history. This can contain information such as model used, parameters used etc. and can be populated upto 250 characters. | [optional] 

## Methods

### NewChatHistory

`func NewChatHistory(name string, ) *ChatHistory`

NewChatHistory instantiates a new ChatHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatHistoryWithDefaults

`func NewChatHistoryWithDefaults() *ChatHistory`

NewChatHistoryWithDefaults instantiates a new ChatHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

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


### GetNewName

`func (o *ChatHistory) GetNewName() string`

GetNewName returns the NewName field if non-nil, zero value otherwise.

### GetNewNameOk

`func (o *ChatHistory) GetNewNameOk() (*string, bool)`

GetNewNameOk returns a tuple with the NewName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewName

`func (o *ChatHistory) SetNewName(v string)`

SetNewName sets NewName field to given value.

### HasNewName

`func (o *ChatHistory) HasNewName() bool`

HasNewName returns a boolean if a field has been set.

### GetQaList

`func (o *ChatHistory) GetQaList() []ChatQA`

GetQaList returns the QaList field if non-nil, zero value otherwise.

### GetQaListOk

`func (o *ChatHistory) GetQaListOk() (*[]ChatQA, bool)`

GetQaListOk returns a tuple with the QaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQaList

`func (o *ChatHistory) SetQaList(v []ChatQA)`

SetQaList sets QaList field to given value.

### HasQaList

`func (o *ChatHistory) HasQaList() bool`

HasQaList returns a boolean if a field has been set.

### GetNotes

`func (o *ChatHistory) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ChatHistory) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ChatHistory) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ChatHistory) HasNotes() bool`

HasNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


