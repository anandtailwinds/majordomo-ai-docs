# ChatMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | Pointer to **string** | The role who initiated this particuar message. | [optional] 
**Content** | Pointer to **string** | The actual content of the chat message. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | The actual content of the chat message. | [optional] 

## Methods

### NewChatMessage

`func NewChatMessage() *ChatMessage`

NewChatMessage instantiates a new ChatMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatMessageWithDefaults

`func NewChatMessageWithDefaults() *ChatMessage`

NewChatMessageWithDefaults instantiates a new ChatMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *ChatMessage) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ChatMessage) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ChatMessage) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *ChatMessage) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetContent

`func (o *ChatMessage) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *ChatMessage) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *ChatMessage) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *ChatMessage) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetMetadata

`func (o *ChatMessage) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ChatMessage) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ChatMessage) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *ChatMessage) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


