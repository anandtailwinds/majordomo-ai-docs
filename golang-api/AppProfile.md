# AppProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the application profile. | 
**Workspace** | **string** | The workspace that contains the model profile. | 
**AppType** | [**AppTypes**](AppTypes.md) |  | 
**AccessInfo** | **map[string]interface{}** | Credentials for application. | 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewAppProfile

`func NewAppProfile(name string, workspace string, appType AppTypes, accessInfo map[string]interface{}, ) *AppProfile`

NewAppProfile instantiates a new AppProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppProfileWithDefaults

`func NewAppProfileWithDefaults() *AppProfile`

NewAppProfileWithDefaults instantiates a new AppProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AppProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AppProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AppProfile) SetName(v string)`

SetName sets Name field to given value.


### GetWorkspace

`func (o *AppProfile) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *AppProfile) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *AppProfile) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetAppType

`func (o *AppProfile) GetAppType() AppTypes`

GetAppType returns the AppType field if non-nil, zero value otherwise.

### GetAppTypeOk

`func (o *AppProfile) GetAppTypeOk() (*AppTypes, bool)`

GetAppTypeOk returns a tuple with the AppType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppType

`func (o *AppProfile) SetAppType(v AppTypes)`

SetAppType sets AppType field to given value.


### GetAccessInfo

`func (o *AppProfile) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *AppProfile) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *AppProfile) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.


### GetSharedUsers

`func (o *AppProfile) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *AppProfile) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *AppProfile) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *AppProfile) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


