# MonitorProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the monitor profile. | 
**Workspace** | **string** | The workspace for the monitor profile. | 
**Provider** | [**MonitorProviders**](MonitorProviders.md) |  | 
**AccessInfo** | **map[string]interface{}** | The information to access the monitoring tool. The parameters required for  specific tools are given below.  &lt;b&gt;LANGFUSE&lt;/b&gt;  host :  The host name where the Langfuse server is running.  public_key :  The public key used to access the monitoring tool.  secret_key :  The secret key used to access the monitoring tool.  | 

## Methods

### NewMonitorProfile

`func NewMonitorProfile(name string, workspace string, provider MonitorProviders, accessInfo map[string]interface{}, ) *MonitorProfile`

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


### GetWorkspace

`func (o *MonitorProfile) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *MonitorProfile) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *MonitorProfile) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


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


### GetAccessInfo

`func (o *MonitorProfile) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *MonitorProfile) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *MonitorProfile) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


