# TopkStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the statistic was genereated. | 
**UserName** | **string** | The user for which this statistic was generated. | 
**EmbedModelStats** | Pointer to [**[]TopkStatsInfo**](TopkStatsInfo.md) |  | [optional] 
**LlmModelStats** | Pointer to [**[]TopkStatsInfo**](TopkStatsInfo.md) |  | [optional] 

## Methods

### NewTopkStats

`func NewTopkStats(workspace string, userName string, ) *TopkStats`

NewTopkStats instantiates a new TopkStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTopkStatsWithDefaults

`func NewTopkStatsWithDefaults() *TopkStats`

NewTopkStatsWithDefaults instantiates a new TopkStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *TopkStats) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *TopkStats) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *TopkStats) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *TopkStats) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *TopkStats) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *TopkStats) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetEmbedModelStats

`func (o *TopkStats) GetEmbedModelStats() []TopkStatsInfo`

GetEmbedModelStats returns the EmbedModelStats field if non-nil, zero value otherwise.

### GetEmbedModelStatsOk

`func (o *TopkStats) GetEmbedModelStatsOk() (*[]TopkStatsInfo, bool)`

GetEmbedModelStatsOk returns a tuple with the EmbedModelStats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedModelStats

`func (o *TopkStats) SetEmbedModelStats(v []TopkStatsInfo)`

SetEmbedModelStats sets EmbedModelStats field to given value.

### HasEmbedModelStats

`func (o *TopkStats) HasEmbedModelStats() bool`

HasEmbedModelStats returns a boolean if a field has been set.

### GetLlmModelStats

`func (o *TopkStats) GetLlmModelStats() []TopkStatsInfo`

GetLlmModelStats returns the LlmModelStats field if non-nil, zero value otherwise.

### GetLlmModelStatsOk

`func (o *TopkStats) GetLlmModelStatsOk() (*[]TopkStatsInfo, bool)`

GetLlmModelStatsOk returns a tuple with the LlmModelStats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLlmModelStats

`func (o *TopkStats) SetLlmModelStats(v []TopkStatsInfo)`

SetLlmModelStats sets LlmModelStats field to given value.

### HasLlmModelStats

`func (o *TopkStats) HasLlmModelStats() bool`

HasLlmModelStats returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


