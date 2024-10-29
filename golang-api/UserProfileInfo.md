# UserProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Name of the workspace. | 
**UserName** | **string** | Name of the user. | 
**CostTags** | Pointer to **string** | The cost tags to be associated with this user operations. | [optional] 
**ModelProfiles** | Pointer to **[]string** | The list of model profiles that are enabled for this user. | [optional] 
**VectordbProfiles** | Pointer to **[]string** | The list of VectorDB profiles that are enabled for this user. | [optional] 
**CreatedAt** | **int64** | Timestamp of the user profile creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the user profile. | 

## Methods

### NewUserProfileInfo

`func NewUserProfileInfo(workspace string, userName string, createdAt int64, lastUpdate int64, ) *UserProfileInfo`

NewUserProfileInfo instantiates a new UserProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserProfileInfoWithDefaults

`func NewUserProfileInfoWithDefaults() *UserProfileInfo`

NewUserProfileInfoWithDefaults instantiates a new UserProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *UserProfileInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *UserProfileInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *UserProfileInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetUserName

`func (o *UserProfileInfo) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *UserProfileInfo) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *UserProfileInfo) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetCostTags

`func (o *UserProfileInfo) GetCostTags() string`

GetCostTags returns the CostTags field if non-nil, zero value otherwise.

### GetCostTagsOk

`func (o *UserProfileInfo) GetCostTagsOk() (*string, bool)`

GetCostTagsOk returns a tuple with the CostTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostTags

`func (o *UserProfileInfo) SetCostTags(v string)`

SetCostTags sets CostTags field to given value.

### HasCostTags

`func (o *UserProfileInfo) HasCostTags() bool`

HasCostTags returns a boolean if a field has been set.

### GetModelProfiles

`func (o *UserProfileInfo) GetModelProfiles() []string`

GetModelProfiles returns the ModelProfiles field if non-nil, zero value otherwise.

### GetModelProfilesOk

`func (o *UserProfileInfo) GetModelProfilesOk() (*[]string, bool)`

GetModelProfilesOk returns a tuple with the ModelProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelProfiles

`func (o *UserProfileInfo) SetModelProfiles(v []string)`

SetModelProfiles sets ModelProfiles field to given value.

### HasModelProfiles

`func (o *UserProfileInfo) HasModelProfiles() bool`

HasModelProfiles returns a boolean if a field has been set.

### GetVectordbProfiles

`func (o *UserProfileInfo) GetVectordbProfiles() []string`

GetVectordbProfiles returns the VectordbProfiles field if non-nil, zero value otherwise.

### GetVectordbProfilesOk

`func (o *UserProfileInfo) GetVectordbProfilesOk() (*[]string, bool)`

GetVectordbProfilesOk returns a tuple with the VectordbProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfiles

`func (o *UserProfileInfo) SetVectordbProfiles(v []string)`

SetVectordbProfiles sets VectordbProfiles field to given value.

### HasVectordbProfiles

`func (o *UserProfileInfo) HasVectordbProfiles() bool`

HasVectordbProfiles returns a boolean if a field has been set.

### GetCreatedAt

`func (o *UserProfileInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UserProfileInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UserProfileInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *UserProfileInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *UserProfileInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *UserProfileInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


