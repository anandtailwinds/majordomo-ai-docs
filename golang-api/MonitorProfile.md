# MonitorProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the monitor profile. | 
**Provider** | [**MonitorProviders**](MonitorProviders.md) |  | 
**AccessKey** | Pointer to [**MonitorAccessKey**](MonitorAccessKey.md) |  | [optional] 
**AccessInfo** | Pointer to [**MonitorAccessInfo**](MonitorAccessInfo.md) |  | [optional] 

## Methods

### NewMonitorProfile

`func NewMonitorProfile(name string, provider MonitorProviders, ) *MonitorProfile`

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

`func (o *MonitorProfile) GetAccessKey() MonitorAccessKey`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *MonitorProfile) GetAccessKeyOk() (*MonitorAccessKey, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *MonitorProfile) SetAccessKey(v MonitorAccessKey)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *MonitorProfile) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetAccessInfo

`func (o *MonitorProfile) GetAccessInfo() MonitorAccessInfo`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *MonitorProfile) GetAccessInfoOk() (*MonitorAccessInfo, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *MonitorProfile) SetAccessInfo(v MonitorAccessInfo)`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *MonitorProfile) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


