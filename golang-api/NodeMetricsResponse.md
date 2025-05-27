# NodeMetricsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Node** | **string** |  | 
**StartTime** | **time.Time** |  | 
**EndTime** | **time.Time** |  | 
**Step** | **string** |  | 
**Metrics** | [**map[string]MetricResult**](MetricResult.md) |  | 

## Methods

### NewNodeMetricsResponse

`func NewNodeMetricsResponse(node string, startTime time.Time, endTime time.Time, step string, metrics map[string]MetricResult, ) *NodeMetricsResponse`

NewNodeMetricsResponse instantiates a new NodeMetricsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNodeMetricsResponseWithDefaults

`func NewNodeMetricsResponseWithDefaults() *NodeMetricsResponse`

NewNodeMetricsResponseWithDefaults instantiates a new NodeMetricsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNode

`func (o *NodeMetricsResponse) GetNode() string`

GetNode returns the Node field if non-nil, zero value otherwise.

### GetNodeOk

`func (o *NodeMetricsResponse) GetNodeOk() (*string, bool)`

GetNodeOk returns a tuple with the Node field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNode

`func (o *NodeMetricsResponse) SetNode(v string)`

SetNode sets Node field to given value.


### GetStartTime

`func (o *NodeMetricsResponse) GetStartTime() time.Time`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *NodeMetricsResponse) GetStartTimeOk() (*time.Time, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *NodeMetricsResponse) SetStartTime(v time.Time)`

SetStartTime sets StartTime field to given value.


### GetEndTime

`func (o *NodeMetricsResponse) GetEndTime() time.Time`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *NodeMetricsResponse) GetEndTimeOk() (*time.Time, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *NodeMetricsResponse) SetEndTime(v time.Time)`

SetEndTime sets EndTime field to given value.


### GetStep

`func (o *NodeMetricsResponse) GetStep() string`

GetStep returns the Step field if non-nil, zero value otherwise.

### GetStepOk

`func (o *NodeMetricsResponse) GetStepOk() (*string, bool)`

GetStepOk returns a tuple with the Step field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStep

`func (o *NodeMetricsResponse) SetStep(v string)`

SetStep sets Step field to given value.


### GetMetrics

`func (o *NodeMetricsResponse) GetMetrics() map[string]MetricResult`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *NodeMetricsResponse) GetMetricsOk() (*map[string]MetricResult, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *NodeMetricsResponse) SetMetrics(v map[string]MetricResult)`

SetMetrics sets Metrics field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


