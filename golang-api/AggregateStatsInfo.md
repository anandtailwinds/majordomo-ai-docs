# AggregateStatsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmbedTokens** | Pointer to **int64** | The total number of tokens used for generating the embedding. | [optional] 
**PromptTokens** | Pointer to **int64** | The total number of tokens used for the prompt. | [optional] 
**CompletionTokens** | Pointer to **int64** | The total number of tokens used for the query completion. | [optional] 
**TotalFiles** | Pointer to **int64** | The total files consumed incase of an ingest operation. | [optional] 
**TotalSize** | Pointer to **int64** | The total size of content consumed incase of an ingest operation. | [optional] 
**Timestamp** | **string** | The timestamp of the generated log message. | 

## Methods

### NewAggregateStatsInfo

`func NewAggregateStatsInfo(timestamp string, ) *AggregateStatsInfo`

NewAggregateStatsInfo instantiates a new AggregateStatsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAggregateStatsInfoWithDefaults

`func NewAggregateStatsInfoWithDefaults() *AggregateStatsInfo`

NewAggregateStatsInfoWithDefaults instantiates a new AggregateStatsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmbedTokens

`func (o *AggregateStatsInfo) GetEmbedTokens() int64`

GetEmbedTokens returns the EmbedTokens field if non-nil, zero value otherwise.

### GetEmbedTokensOk

`func (o *AggregateStatsInfo) GetEmbedTokensOk() (*int64, bool)`

GetEmbedTokensOk returns a tuple with the EmbedTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedTokens

`func (o *AggregateStatsInfo) SetEmbedTokens(v int64)`

SetEmbedTokens sets EmbedTokens field to given value.

### HasEmbedTokens

`func (o *AggregateStatsInfo) HasEmbedTokens() bool`

HasEmbedTokens returns a boolean if a field has been set.

### GetPromptTokens

`func (o *AggregateStatsInfo) GetPromptTokens() int64`

GetPromptTokens returns the PromptTokens field if non-nil, zero value otherwise.

### GetPromptTokensOk

`func (o *AggregateStatsInfo) GetPromptTokensOk() (*int64, bool)`

GetPromptTokensOk returns a tuple with the PromptTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptTokens

`func (o *AggregateStatsInfo) SetPromptTokens(v int64)`

SetPromptTokens sets PromptTokens field to given value.

### HasPromptTokens

`func (o *AggregateStatsInfo) HasPromptTokens() bool`

HasPromptTokens returns a boolean if a field has been set.

### GetCompletionTokens

`func (o *AggregateStatsInfo) GetCompletionTokens() int64`

GetCompletionTokens returns the CompletionTokens field if non-nil, zero value otherwise.

### GetCompletionTokensOk

`func (o *AggregateStatsInfo) GetCompletionTokensOk() (*int64, bool)`

GetCompletionTokensOk returns a tuple with the CompletionTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionTokens

`func (o *AggregateStatsInfo) SetCompletionTokens(v int64)`

SetCompletionTokens sets CompletionTokens field to given value.

### HasCompletionTokens

`func (o *AggregateStatsInfo) HasCompletionTokens() bool`

HasCompletionTokens returns a boolean if a field has been set.

### GetTotalFiles

`func (o *AggregateStatsInfo) GetTotalFiles() int64`

GetTotalFiles returns the TotalFiles field if non-nil, zero value otherwise.

### GetTotalFilesOk

`func (o *AggregateStatsInfo) GetTotalFilesOk() (*int64, bool)`

GetTotalFilesOk returns a tuple with the TotalFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalFiles

`func (o *AggregateStatsInfo) SetTotalFiles(v int64)`

SetTotalFiles sets TotalFiles field to given value.

### HasTotalFiles

`func (o *AggregateStatsInfo) HasTotalFiles() bool`

HasTotalFiles returns a boolean if a field has been set.

### GetTotalSize

`func (o *AggregateStatsInfo) GetTotalSize() int64`

GetTotalSize returns the TotalSize field if non-nil, zero value otherwise.

### GetTotalSizeOk

`func (o *AggregateStatsInfo) GetTotalSizeOk() (*int64, bool)`

GetTotalSizeOk returns a tuple with the TotalSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSize

`func (o *AggregateStatsInfo) SetTotalSize(v int64)`

SetTotalSize sets TotalSize field to given value.

### HasTotalSize

`func (o *AggregateStatsInfo) HasTotalSize() bool`

HasTotalSize returns a boolean if a field has been set.

### GetTimestamp

`func (o *AggregateStatsInfo) GetTimestamp() string`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *AggregateStatsInfo) GetTimestampOk() (*string, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *AggregateStatsInfo) SetTimestamp(v string)`

SetTimestamp sets Timestamp field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


