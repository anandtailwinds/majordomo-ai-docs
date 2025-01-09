# TopkStatsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the model for which the statistic is generated. | 
**Tokens** | **int64** | The total number of tokens used by the model. | 

## Methods

### NewTopkStatsInfo

`func NewTopkStatsInfo(name string, tokens int64, ) *TopkStatsInfo`

NewTopkStatsInfo instantiates a new TopkStatsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTopkStatsInfoWithDefaults

`func NewTopkStatsInfoWithDefaults() *TopkStatsInfo`

NewTopkStatsInfoWithDefaults instantiates a new TopkStatsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TopkStatsInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TopkStatsInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TopkStatsInfo) SetName(v string)`

SetName sets Name field to given value.


### GetTokens

`func (o *TopkStatsInfo) GetTokens() int64`

GetTokens returns the Tokens field if non-nil, zero value otherwise.

### GetTokensOk

`func (o *TopkStatsInfo) GetTokensOk() (*int64, bool)`

GetTokensOk returns a tuple with the Tokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokens

`func (o *TopkStatsInfo) SetTokens(v int64)`

SetTokens sets Tokens field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


