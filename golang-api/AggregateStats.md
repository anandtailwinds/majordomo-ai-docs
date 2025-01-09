# AggregateStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the log was genereated. | 
**UserName** | **string** | The user for which this log was generated. | 
**AggrStats** | Pointer to [**[]AggregateStatsInfo**](AggregateStatsInfo.md) |  | [optional] 

## Methods

### NewAggregateStats

`func NewAggregateStats(workspace string, userName string, ) *AggregateStats`

NewAggregateStats instantiates a new AggregateStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAggregateStatsWithDefaults

`func NewAggregateStatsWithDefaults() *AggregateStats`

NewAggregateStatsWithDefaults instantiates a new AggregateStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *AggregateStats) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *AggregateStats) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *AggregateStats) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *AggregateStats) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *AggregateStats) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *AggregateStats) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetAggrStats

`func (o *AggregateStats) GetAggrStats() []AggregateStatsInfo`

GetAggrStats returns the AggrStats field if non-nil, zero value otherwise.

### GetAggrStatsOk

`func (o *AggregateStats) GetAggrStatsOk() (*[]AggregateStatsInfo, bool)`

GetAggrStatsOk returns a tuple with the AggrStats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggrStats

`func (o *AggregateStats) SetAggrStats(v []AggregateStatsInfo)`

SetAggrStats sets AggrStats field to given value.

### HasAggrStats

`func (o *AggregateStats) HasAggrStats() bool`

HasAggrStats returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


