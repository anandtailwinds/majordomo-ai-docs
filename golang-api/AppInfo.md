# AppInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppType** | [**AppTypes**](AppTypes.md) |  | 
**AccessInfo** | **map[string]interface{}** | Any endpoint that is to be specified to reach the data store. | 
**InstanceInfo** | Pointer to **map[string]interface{}** | Information specific to the instance of the application. | [optional] 
**Contents** | Pointer to **string** | A description of the contents of the application store. This may be used to specify schema aor other nuances of a database etc. and is used during queries if present. | [optional] 

## Methods

### NewAppInfo

`func NewAppInfo(appType AppTypes, accessInfo map[string]interface{}, ) *AppInfo`

NewAppInfo instantiates a new AppInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppInfoWithDefaults

`func NewAppInfoWithDefaults() *AppInfo`

NewAppInfoWithDefaults instantiates a new AppInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppType

`func (o *AppInfo) GetAppType() AppTypes`

GetAppType returns the AppType field if non-nil, zero value otherwise.

### GetAppTypeOk

`func (o *AppInfo) GetAppTypeOk() (*AppTypes, bool)`

GetAppTypeOk returns a tuple with the AppType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppType

`func (o *AppInfo) SetAppType(v AppTypes)`

SetAppType sets AppType field to given value.


### GetAccessInfo

`func (o *AppInfo) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *AppInfo) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *AppInfo) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.


### GetInstanceInfo

`func (o *AppInfo) GetInstanceInfo() map[string]interface{}`

GetInstanceInfo returns the InstanceInfo field if non-nil, zero value otherwise.

### GetInstanceInfoOk

`func (o *AppInfo) GetInstanceInfoOk() (*map[string]interface{}, bool)`

GetInstanceInfoOk returns a tuple with the InstanceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceInfo

`func (o *AppInfo) SetInstanceInfo(v map[string]interface{})`

SetInstanceInfo sets InstanceInfo field to given value.

### HasInstanceInfo

`func (o *AppInfo) HasInstanceInfo() bool`

HasInstanceInfo returns a boolean if a field has been set.

### GetContents

`func (o *AppInfo) GetContents() string`

GetContents returns the Contents field if non-nil, zero value otherwise.

### GetContentsOk

`func (o *AppInfo) GetContentsOk() (*string, bool)`

GetContentsOk returns a tuple with the Contents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContents

`func (o *AppInfo) SetContents(v string)`

SetContents sets Contents field to given value.

### HasContents

`func (o *AppInfo) HasContents() bool`

HasContents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


