# MonitorProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the monitor profile. | 
**Provider** | [**MonitorProviders**](MonitorProviders.md) |  | 
**AccessInfo** | Pointer to [**MonitorAccessInfo**](MonitorAccessInfo.md) |  | [optional] 
**AccessKey** | [**MonitorAccessKey**](MonitorAccessKey.md) |  | 
**CreatedBy** | **string** | Identifies the user who created this monitor profile. | 
**CreatedAt** | **int64** | Timestamp of the monitor profile creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the monitor profile. | 

## Methods

### NewMonitorProfileInfo

`func NewMonitorProfileInfo(name string, provider MonitorProviders, accessKey MonitorAccessKey, createdBy string, createdAt int64, lastUpdate int64, ) *MonitorProfileInfo`

NewMonitorProfileInfo instantiates a new MonitorProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMonitorProfileInfoWithDefaults

`func NewMonitorProfileInfoWithDefaults() *MonitorProfileInfo`

NewMonitorProfileInfoWithDefaults instantiates a new MonitorProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MonitorProfileInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MonitorProfileInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MonitorProfileInfo) SetName(v string)`

SetName sets Name field to given value.


### GetProvider

`func (o *MonitorProfileInfo) GetProvider() MonitorProviders`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *MonitorProfileInfo) GetProviderOk() (*MonitorProviders, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *MonitorProfileInfo) SetProvider(v MonitorProviders)`

SetProvider sets Provider field to given value.


### GetAccessInfo

`func (o *MonitorProfileInfo) GetAccessInfo() MonitorAccessInfo`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *MonitorProfileInfo) GetAccessInfoOk() (*MonitorAccessInfo, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *MonitorProfileInfo) SetAccessInfo(v MonitorAccessInfo)`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *MonitorProfileInfo) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.

### GetAccessKey

`func (o *MonitorProfileInfo) GetAccessKey() MonitorAccessKey`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *MonitorProfileInfo) GetAccessKeyOk() (*MonitorAccessKey, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *MonitorProfileInfo) SetAccessKey(v MonitorAccessKey)`

SetAccessKey sets AccessKey field to given value.


### GetCreatedBy

`func (o *MonitorProfileInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *MonitorProfileInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *MonitorProfileInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *MonitorProfileInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *MonitorProfileInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *MonitorProfileInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *MonitorProfileInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *MonitorProfileInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *MonitorProfileInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


