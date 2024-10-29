# MonitorProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the monitor profile. | 
**Provider** | [**MonitorProviders**](MonitorProviders.md) |  | 
**AccessKey** | **string** | Access Key for accessing the monitoring tool. | 
**Endpoint** | **string** | URL of the monitoring tool endpoint. | 

## Methods

### NewMonitorProfile

`func NewMonitorProfile(name string, provider MonitorProviders, accessKey string, endpoint string, ) *MonitorProfile`

NewMonitorProfile instantiates a new MonitorProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMonitorProfileWithDefaults

`func NewMonitorProfileWithDefaults() *MonitorProfile`

NewMonitorProfileWithDefaults instantiates a new MonitorProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MonitorProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MonitorProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MonitorProfile) SetName(v string)`

SetName sets Name field to given value.


### GetProvider

`func (o *MonitorProfile) GetProvider() MonitorProviders`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *MonitorProfile) GetProviderOk() (*MonitorProviders, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *MonitorProfile) SetProvider(v MonitorProviders)`

SetProvider sets Provider field to given value.


### GetAccessKey

`func (o *MonitorProfile) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *MonitorProfile) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *MonitorProfile) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.


### GetEndpoint

`func (o *MonitorProfile) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *MonitorProfile) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *MonitorProfile) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


