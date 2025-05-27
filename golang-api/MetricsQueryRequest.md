# MetricsQueryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The name of the workspace | 
**MetricsType** | [**MetricType**](MetricType.md) |  | 
**MetricsFilter** | **map[string]interface{}** | Additional parameters for filtering the specific target resource. | 
**StartTime** | **time.Time** | Start time of the query range | 
**EndTime** | **time.Time** | End time of the query range | 
**Step** | **string** | Step interval (e.g., 30s, 1m) | 
**Metrics** | Pointer to **[]string** | List of metrics to query | [optional] 

## Methods

### NewMetricsQueryRequest

`func NewMetricsQueryRequest(workspace string, metricsType MetricType, metricsFilter map[string]interface{}, startTime time.Time, endTime time.Time, step string, ) *MetricsQueryRequest`

NewMetricsQueryRequest instantiates a new MetricsQueryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricsQueryRequestWithDefaults

`func NewMetricsQueryRequestWithDefaults() *MetricsQueryRequest`

NewMetricsQueryRequestWithDefaults instantiates a new MetricsQueryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *MetricsQueryRequest) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *MetricsQueryRequest) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *MetricsQueryRequest) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetMetricsType

`func (o *MetricsQueryRequest) GetMetricsType() MetricType`

GetMetricsType returns the MetricsType field if non-nil, zero value otherwise.

### GetMetricsTypeOk

`func (o *MetricsQueryRequest) GetMetricsTypeOk() (*MetricType, bool)`

GetMetricsTypeOk returns a tuple with the MetricsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricsType

`func (o *MetricsQueryRequest) SetMetricsType(v MetricType)`

SetMetricsType sets MetricsType field to given value.


### GetMetricsFilter

`func (o *MetricsQueryRequest) GetMetricsFilter() map[string]interface{}`

GetMetricsFilter returns the MetricsFilter field if non-nil, zero value otherwise.

### GetMetricsFilterOk

`func (o *MetricsQueryRequest) GetMetricsFilterOk() (*map[string]interface{}, bool)`

GetMetricsFilterOk returns a tuple with the MetricsFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricsFilter

`func (o *MetricsQueryRequest) SetMetricsFilter(v map[string]interface{})`

SetMetricsFilter sets MetricsFilter field to given value.


### GetStartTime

`func (o *MetricsQueryRequest) GetStartTime() time.Time`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *MetricsQueryRequest) GetStartTimeOk() (*time.Time, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *MetricsQueryRequest) SetStartTime(v time.Time)`

SetStartTime sets StartTime field to given value.


### GetEndTime

`func (o *MetricsQueryRequest) GetEndTime() time.Time`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *MetricsQueryRequest) GetEndTimeOk() (*time.Time, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *MetricsQueryRequest) SetEndTime(v time.Time)`

SetEndTime sets EndTime field to given value.


### GetStep

`func (o *MetricsQueryRequest) GetStep() string`

GetStep returns the Step field if non-nil, zero value otherwise.

### GetStepOk

`func (o *MetricsQueryRequest) GetStepOk() (*string, bool)`

GetStepOk returns a tuple with the Step field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStep

`func (o *MetricsQueryRequest) SetStep(v string)`

SetStep sets Step field to given value.


### GetMetrics

`func (o *MetricsQueryRequest) GetMetrics() []string`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *MetricsQueryRequest) GetMetricsOk() (*[]string, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *MetricsQueryRequest) SetMetrics(v []string)`

SetMetrics sets Metrics field to given value.

### HasMetrics

`func (o *MetricsQueryRequest) HasMetrics() bool`

HasMetrics returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


