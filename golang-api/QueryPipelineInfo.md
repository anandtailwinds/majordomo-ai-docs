# QueryPipelineInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**QueryPipeline**](QueryPipeline.md) |  | 
**CreatedBy** | **string** | The user who created the query pipeline. | 
**CreatedAt** | **int64** | Timestamp of the query pipeline creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the query pipeline. | 

## Methods

### NewQueryPipelineInfo

`func NewQueryPipelineInfo(config QueryPipeline, createdBy string, createdAt int64, lastUpdate int64, ) *QueryPipelineInfo`

NewQueryPipelineInfo instantiates a new QueryPipelineInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryPipelineInfoWithDefaults

`func NewQueryPipelineInfoWithDefaults() *QueryPipelineInfo`

NewQueryPipelineInfoWithDefaults instantiates a new QueryPipelineInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *QueryPipelineInfo) GetConfig() QueryPipeline`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *QueryPipelineInfo) GetConfigOk() (*QueryPipeline, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *QueryPipelineInfo) SetConfig(v QueryPipeline)`

SetConfig sets Config field to given value.


### GetCreatedBy

`func (o *QueryPipelineInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *QueryPipelineInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *QueryPipelineInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *QueryPipelineInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *QueryPipelineInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *QueryPipelineInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *QueryPipelineInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *QueryPipelineInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *QueryPipelineInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


