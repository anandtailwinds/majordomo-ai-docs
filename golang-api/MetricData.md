# MetricData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Metric** | **map[string]interface{}** |  | 
**Values** | [**[]MetricValue**](MetricValue.md) |  | 

## Methods

### NewMetricData

`func NewMetricData(metric map[string]interface{}, values []MetricValue, ) *MetricData`

NewMetricData instantiates a new MetricData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricDataWithDefaults

`func NewMetricDataWithDefaults() *MetricData`

NewMetricDataWithDefaults instantiates a new MetricData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetric

`func (o *MetricData) GetMetric() map[string]interface{}`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *MetricData) GetMetricOk() (*map[string]interface{}, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *MetricData) SetMetric(v map[string]interface{})`

SetMetric sets Metric field to given value.


### GetValues

`func (o *MetricData) GetValues() []MetricValue`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *MetricData) GetValuesOk() (*[]MetricValue, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *MetricData) SetValues(v []MetricValue)`

SetValues sets Values field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


