# TokenStatsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspce in which the log was genereated. | 
**UserName** | **string** | The user for which this log was generated. | 
**EmbedModel** | Pointer to **string** | The embedding model used in the operation. | [optional] 
**EmbedTokens** | Pointer to **int64** | The total number of tokens used for generating the embedding. | [optional] 
**LlmModel** | Pointer to **string** | The LLM model used in the operation. | [optional] 
**PromptTokens** | Pointer to **int64** | The total number of tokens used for the prompt. | [optional] 
**CompletionTokens** | Pointer to **int64** | The total number of tokens used for the query completion. | [optional] 
**TotalFiles** | Pointer to **int64** | The total files consumed incase of an ingest operation. | [optional] 
**TotalSize** | Pointer to **int64** | The total size of content consumed incase of an ingest operation. | [optional] 
**Latency** | Pointer to **float32** | The time taken to perform the underlying RAG operation. | [optional] 
**Timestamp** | **int64** | The timestamp of the generated log message. | 

## Methods

### NewTokenStatsInfo

`func NewTokenStatsInfo(workspace string, userName string, timestamp int64, ) *TokenStatsInfo`

NewTokenStatsInfo instantiates a new TokenStatsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenStatsInfoWithDefaults

`func NewTokenStatsInfoWithDefaults() *TokenStatsInfo`

NewTokenStatsInfoWithDefaults instantiates a new TokenStatsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *TokenStatsInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *TokenStatsInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *TokenStatsInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *TokenStatsInfo) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *TokenStatsInfo) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *TokenStatsInfo) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetEmbedModel

`func (o *TokenStatsInfo) GetEmbedModel() string`

GetEmbedModel returns the EmbedModel field if non-nil, zero value otherwise.

### GetEmbedModelOk

`func (o *TokenStatsInfo) GetEmbedModelOk() (*string, bool)`

GetEmbedModelOk returns a tuple with the EmbedModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedModel

`func (o *TokenStatsInfo) SetEmbedModel(v string)`

SetEmbedModel sets EmbedModel field to given value.

### HasEmbedModel

`func (o *TokenStatsInfo) HasEmbedModel() bool`

HasEmbedModel returns a boolean if a field has been set.

### GetEmbedTokens

`func (o *TokenStatsInfo) GetEmbedTokens() int64`

GetEmbedTokens returns the EmbedTokens field if non-nil, zero value otherwise.

### GetEmbedTokensOk

`func (o *TokenStatsInfo) GetEmbedTokensOk() (*int64, bool)`

GetEmbedTokensOk returns a tuple with the EmbedTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedTokens

`func (o *TokenStatsInfo) SetEmbedTokens(v int64)`

SetEmbedTokens sets EmbedTokens field to given value.

### HasEmbedTokens

`func (o *TokenStatsInfo) HasEmbedTokens() bool`

HasEmbedTokens returns a boolean if a field has been set.

### GetLlmModel

`func (o *TokenStatsInfo) GetLlmModel() string`

GetLlmModel returns the LlmModel field if non-nil, zero value otherwise.

### GetLlmModelOk

`func (o *TokenStatsInfo) GetLlmModelOk() (*string, bool)`

GetLlmModelOk returns a tuple with the LlmModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModel

`func (o *TokenStatsInfo) SetLlmModel(v string)`

SetLlmModel sets LlmModel field to given value.

### HasLlmModel

`func (o *TokenStatsInfo) HasLlmModel() bool`

HasLlmModel returns a boolean if a field has been set.

### GetPromptTokens

`func (o *TokenStatsInfo) GetPromptTokens() int64`

GetPromptTokens returns the PromptTokens field if non-nil, zero value otherwise.

### GetPromptTokensOk

`func (o *TokenStatsInfo) GetPromptTokensOk() (*int64, bool)`

GetPromptTokensOk returns a tuple with the PromptTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptTokens

`func (o *TokenStatsInfo) SetPromptTokens(v int64)`

SetPromptTokens sets PromptTokens field to given value.

### HasPromptTokens

`func (o *TokenStatsInfo) HasPromptTokens() bool`

HasPromptTokens returns a boolean if a field has been set.

### GetCompletionTokens

`func (o *TokenStatsInfo) GetCompletionTokens() int64`

GetCompletionTokens returns the CompletionTokens field if non-nil, zero value otherwise.

### GetCompletionTokensOk

`func (o *TokenStatsInfo) GetCompletionTokensOk() (*int64, bool)`

GetCompletionTokensOk returns a tuple with the CompletionTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionTokens

`func (o *TokenStatsInfo) SetCompletionTokens(v int64)`

SetCompletionTokens sets CompletionTokens field to given value.

### HasCompletionTokens

`func (o *TokenStatsInfo) HasCompletionTokens() bool`

HasCompletionTokens returns a boolean if a field has been set.

### GetTotalFiles

`func (o *TokenStatsInfo) GetTotalFiles() int64`

GetTotalFiles returns the TotalFiles field if non-nil, zero value otherwise.

### GetTotalFilesOk

`func (o *TokenStatsInfo) GetTotalFilesOk() (*int64, bool)`

GetTotalFilesOk returns a tuple with the TotalFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalFiles

`func (o *TokenStatsInfo) SetTotalFiles(v int64)`

SetTotalFiles sets TotalFiles field to given value.

### HasTotalFiles

`func (o *TokenStatsInfo) HasTotalFiles() bool`

HasTotalFiles returns a boolean if a field has been set.

### GetTotalSize

`func (o *TokenStatsInfo) GetTotalSize() int64`

GetTotalSize returns the TotalSize field if non-nil, zero value otherwise.

### GetTotalSizeOk

`func (o *TokenStatsInfo) GetTotalSizeOk() (*int64, bool)`

GetTotalSizeOk returns a tuple with the TotalSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSize

`func (o *TokenStatsInfo) SetTotalSize(v int64)`

SetTotalSize sets TotalSize field to given value.

### HasTotalSize

`func (o *TokenStatsInfo) HasTotalSize() bool`

HasTotalSize returns a boolean if a field has been set.

### GetLatency

`func (o *TokenStatsInfo) GetLatency() float32`

GetLatency returns the Latency field if non-nil, zero value otherwise.

### GetLatencyOk

`func (o *TokenStatsInfo) GetLatencyOk() (*float32, bool)`

GetLatencyOk returns a tuple with the Latency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatency

`func (o *TokenStatsInfo) SetLatency(v float32)`

SetLatency sets Latency field to given value.

### HasLatency

`func (o *TokenStatsInfo) HasLatency() bool`

HasLatency returns a boolean if a field has been set.

### GetTimestamp

`func (o *TokenStatsInfo) GetTimestamp() int64`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *TokenStatsInfo) GetTimestampOk() (*int64, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *TokenStatsInfo) SetTimestamp(v int64)`

SetTimestamp sets Timestamp field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


