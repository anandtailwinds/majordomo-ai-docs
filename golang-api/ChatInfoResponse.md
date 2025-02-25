# ChatInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChatId** | **string** | Unique identifier for the chat. | 
**ChatName** | **string** | Name of the chat history. | 
**CreatedBy** | **string** | Name of the user who created the chat conversations. | 
**LastUpdate** | **int64** | Timestamp of the last update to the chat history. | 

## Methods

### NewChatInfoResponse

`func NewChatInfoResponse(chatId string, chatName string, createdBy string, lastUpdate int64, ) *ChatInfoResponse`

NewChatInfoResponse instantiates a new ChatInfoResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatInfoResponseWithDefaults

`func NewChatInfoResponseWithDefaults() *ChatInfoResponse`

NewChatInfoResponseWithDefaults instantiates a new ChatInfoResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChatId

`func (o *ChatInfoResponse) GetChatId() string`

GetChatId returns the ChatId field if non-nil, zero value otherwise.

### GetChatIdOk

`func (o *ChatInfoResponse) GetChatIdOk() (*string, bool)`

GetChatIdOk returns a tuple with the ChatId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatId

`func (o *ChatInfoResponse) SetChatId(v string)`

SetChatId sets ChatId field to given value.


### GetChatName

`func (o *ChatInfoResponse) GetChatName() string`

GetChatName returns the ChatName field if non-nil, zero value otherwise.

### GetChatNameOk

`func (o *ChatInfoResponse) GetChatNameOk() (*string, bool)`

GetChatNameOk returns a tuple with the ChatName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChatName

`func (o *ChatInfoResponse) SetChatName(v string)`

SetChatName sets ChatName field to given value.


### GetCreatedBy

`func (o *ChatInfoResponse) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ChatInfoResponse) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ChatInfoResponse) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetLastUpdate

`func (o *ChatInfoResponse) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *ChatInfoResponse) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *ChatInfoResponse) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


