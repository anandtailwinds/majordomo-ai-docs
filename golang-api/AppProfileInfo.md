# AppProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**AppProfile**](AppProfile.md) |  | 
**SupportedOperations** | Pointer to [**[]SupportedOperations**](SupportedOperations.md) | Application operations supported. | [optional] 
**CreatedBy** | **string** | The username who created this model profile | 
**CreatedAt** | **int64** | Timestamp of the model profile creation | 
**LastUpdate** | **int64** | Timestamp of the last update to the model profile | 

## Methods

### NewAppProfileInfo

`func NewAppProfileInfo(config AppProfile, createdBy string, createdAt int64, lastUpdate int64, ) *AppProfileInfo`

NewAppProfileInfo instantiates a new AppProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppProfileInfoWithDefaults

`func NewAppProfileInfoWithDefaults() *AppProfileInfo`

NewAppProfileInfoWithDefaults instantiates a new AppProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *AppProfileInfo) GetConfig() AppProfile`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *AppProfileInfo) GetConfigOk() (*AppProfile, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *AppProfileInfo) SetConfig(v AppProfile)`

SetConfig sets Config field to given value.


### GetSupportedOperations

`func (o *AppProfileInfo) GetSupportedOperations() []SupportedOperations`

GetSupportedOperations returns the SupportedOperations field if non-nil, zero value otherwise.

### GetSupportedOperationsOk

`func (o *AppProfileInfo) GetSupportedOperationsOk() (*[]SupportedOperations, bool)`

GetSupportedOperationsOk returns a tuple with the SupportedOperations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedOperations

`func (o *AppProfileInfo) SetSupportedOperations(v []SupportedOperations)`

SetSupportedOperations sets SupportedOperations field to given value.

### HasSupportedOperations

`func (o *AppProfileInfo) HasSupportedOperations() bool`

HasSupportedOperations returns a boolean if a field has been set.

### GetCreatedBy

`func (o *AppProfileInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *AppProfileInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *AppProfileInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *AppProfileInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *AppProfileInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *AppProfileInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *AppProfileInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *AppProfileInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *AppProfileInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


