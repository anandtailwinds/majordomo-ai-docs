# UserProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Name of the workspace. | 
**UserName** | **string** | Name of the user. | 
**ModelProfiles** | Pointer to **[]string** | The list of model profiles that are enabled for this user. | [optional] 
**VectordbProfiles** | Pointer to **[]string** | The list of VectorDB profiles that are enabled for this user. | [optional] 

## Methods

### NewUserProfile

`func NewUserProfile(workspace string, userName string, ) *UserProfile`

NewUserProfile instantiates a new UserProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserProfileWithDefaults

`func NewUserProfileWithDefaults() *UserProfile`

NewUserProfileWithDefaults instantiates a new UserProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *UserProfile) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *UserProfile) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *UserProfile) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *UserProfile) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *UserProfile) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *UserProfile) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetModelProfiles

`func (o *UserProfile) GetModelProfiles() []string`

GetModelProfiles returns the ModelProfiles field if non-nil, zero value otherwise.

### GetModelProfilesOk

`func (o *UserProfile) GetModelProfilesOk() (*[]string, bool)`

GetModelProfilesOk returns a tuple with the ModelProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelProfiles

`func (o *UserProfile) SetModelProfiles(v []string)`

SetModelProfiles sets ModelProfiles field to given value.

### HasModelProfiles

`func (o *UserProfile) HasModelProfiles() bool`

HasModelProfiles returns a boolean if a field has been set.

### GetVectordbProfiles

`func (o *UserProfile) GetVectordbProfiles() []string`

GetVectordbProfiles returns the VectordbProfiles field if non-nil, zero value otherwise.

### GetVectordbProfilesOk

`func (o *UserProfile) GetVectordbProfilesOk() (*[]string, bool)`

GetVectordbProfilesOk returns a tuple with the VectordbProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfiles

`func (o *UserProfile) SetVectordbProfiles(v []string)`

SetVectordbProfiles sets VectordbProfiles field to given value.

### HasVectordbProfiles

`func (o *UserProfile) HasVectordbProfiles() bool`

HasVectordbProfiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


