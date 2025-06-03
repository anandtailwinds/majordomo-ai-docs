# ChatMessage1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Timestamp** | Pointer to **int64** | A unique identifier for the question and answer. This is auto-generated. | [optional] 
**Role** | **string** | The user question for which completion or answer is sought. | 
**Content** | **string** | The answer obtained from Gen AI. | 

## Methods

### NewChatMessage1

`func NewChatMessage1(role string, content string, ) *ChatMessage1`

NewChatMessage1 instantiates a new ChatMessage1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatMessage1WithDefaults

`func NewChatMessage1WithDefaults() *ChatMessage1`

NewChatMessage1WithDefaults instantiates a new ChatMessage1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimestamp

`func (o *ChatMessage1) GetTimestamp() int64`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ChatMessage1) GetTimestampOk() (*int64, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ChatMessage1) SetTimestamp(v int64)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *ChatMessage1) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetRole

`func (o *ChatMessage1) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ChatMessage1) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ChatMessage1) SetRole(v string)`

SetRole sets Role field to given value.


### GetContent

`func (o *ChatMessage1) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ChatMessage1) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ChatMessage1) SetContent(v string)`

SetContent sets Content field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


