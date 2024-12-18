# VectordbProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the Vectordb profile | 
**Provider** | [**VectordbProviders**](VectordbProviders.md) |  | 
**Workspace** | **string** | The workspace that contains the vectordb profile. | 
**AccessKey** | Pointer to [**VectordbAccessKey**](VectordbAccessKey.md) |  | [optional] 
**AccessInfo** | Pointer to [**VectordbAccessInfo**](VectordbAccessInfo.md) |  | [optional] 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewVectordbProfile

`func NewVectordbProfile(name string, provider VectordbProviders, workspace string, ) *VectordbProfile`

NewVectordbProfile instantiates a new VectordbProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectordbProfileWithDefaults

`func NewVectordbProfileWithDefaults() *VectordbProfile`

NewVectordbProfileWithDefaults instantiates a new VectordbProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *VectordbProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VectordbProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VectordbProfile) SetName(v string)`

SetName sets Name field to given value.


### GetProvider

`func (o *VectordbProfile) GetProvider() VectordbProviders`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *VectordbProfile) GetProviderOk() (*VectordbProviders, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *VectordbProfile) SetProvider(v VectordbProviders)`

SetProvider sets Provider field to given value.


### GetWorkspace

`func (o *VectordbProfile) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *VectordbProfile) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *VectordbProfile) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetAccessKey

`func (o *VectordbProfile) GetAccessKey() VectordbAccessKey`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *VectordbProfile) GetAccessKeyOk() (*VectordbAccessKey, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *VectordbProfile) SetAccessKey(v VectordbAccessKey)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *VectordbProfile) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetAccessInfo

`func (o *VectordbProfile) GetAccessInfo() VectordbAccessInfo`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *VectordbProfile) GetAccessInfoOk() (*VectordbAccessInfo, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *VectordbProfile) SetAccessInfo(v VectordbAccessInfo)`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *VectordbProfile) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.

### GetSharedUsers

`func (o *VectordbProfile) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *VectordbProfile) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *VectordbProfile) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *VectordbProfile) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


