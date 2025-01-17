# UserInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | **string** | The user name. | 
**FirstName** | **string** | The first name of the user. | 
**LastName** | **string** | The last name of the user. | 
**MdApiKey** | Pointer to **string** | The Majordomo API key allocated to the user. | [optional] 
**Roles** | Pointer to **[]string** | The allowed user roles. | [optional] 

## Methods

### NewUserInfo

`func NewUserInfo(userName string, firstName string, lastName string, ) *UserInfo`

NewUserInfo instantiates a new UserInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserInfoWithDefaults

`func NewUserInfoWithDefaults() *UserInfo`

NewUserInfoWithDefaults instantiates a new UserInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *UserInfo) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *UserInfo) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *UserInfo) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetFirstName

`func (o *UserInfo) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *UserInfo) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *UserInfo) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.


### GetLastName

`func (o *UserInfo) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *UserInfo) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *UserInfo) SetLastName(v string)`

SetLastName sets LastName field to given value.


### GetMdApiKey

`func (o *UserInfo) GetMdApiKey() string`

GetMdApiKey returns the MdApiKey field if non-nil, zero value otherwise.

### GetMdApiKeyOk

`func (o *UserInfo) GetMdApiKeyOk() (*string, bool)`

GetMdApiKeyOk returns a tuple with the MdApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMdApiKey

`func (o *UserInfo) SetMdApiKey(v string)`

SetMdApiKey sets MdApiKey field to given value.

### HasMdApiKey

`func (o *UserInfo) HasMdApiKey() bool`

HasMdApiKey returns a boolean if a field has been set.

### GetRoles

`func (o *UserInfo) GetRoles() []string`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *UserInfo) GetRolesOk() (*[]string, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *UserInfo) SetRoles(v []string)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *UserInfo) HasRoles() bool`

HasRoles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


