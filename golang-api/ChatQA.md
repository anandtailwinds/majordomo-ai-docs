# ChatQA

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uid** | **string** | A unique identifier for the question and answer. | 
**Question** | **string** | The user question for which completion or answer is sought. | 
**Answer** | **string** | The answer obtained from Gen AI. | 

## Methods

### NewChatQA

`func NewChatQA(uid string, question string, answer string, ) *ChatQA`

NewChatQA instantiates a new ChatQA object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChatQAWithDefaults

`func NewChatQAWithDefaults() *ChatQA`

NewChatQAWithDefaults instantiates a new ChatQA object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUid

`func (o *ChatQA) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *ChatQA) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *ChatQA) SetUid(v string)`

SetUid sets Uid field to given value.


### GetQuestion

`func (o *ChatQA) GetQuestion() string`

GetQuestion returns the Question field if non-nil, zero value otherwise.

### GetQuestionOk

`func (o *ChatQA) GetQuestionOk() (*string, bool)`

GetQuestionOk returns a tuple with the Question field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuestion

`func (o *ChatQA) SetQuestion(v string)`

SetQuestion sets Question field to given value.


### GetAnswer

`func (o *ChatQA) GetAnswer() string`

GetAnswer returns the Answer field if non-nil, zero value otherwise.

### GetAnswerOk

`func (o *ChatQA) GetAnswerOk() (*string, bool)`

GetAnswerOk returns a tuple with the Answer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnswer

`func (o *ChatQA) SetAnswer(v string)`

SetAnswer sets Answer field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


