# VectordbProfileInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the Vectordb profile. | 
**Provider** | [**VectordbProviders**](VectordbProviders.md) |  | 
**AccessInfo** | Pointer to [**VectordbAccessInfo**](VectordbAccessInfo.md) |  | [optional] 
**AccessKey** | Pointer to [**VectordbAccessKey**](VectordbAccessKey.md) |  | [optional] 
**ReadOnly** | Pointer to **bool** | If this condition is set to true, then only read operations are permitted to this vector database. This can be used by administrators to restrict users from modifying the contents arbitrarily. | [optional] 
**CreatedBy** | **string** | The name of the user who created this Vectordb profile. | 
**CreatedAt** | **int64** | Timestamp of the Vectordb profile creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the Vectordb profile. | 

## Methods

### NewVectordbProfileInfo

`func NewVectordbProfileInfo(name string, provider VectordbProviders, createdBy string, createdAt int64, lastUpdate int64, ) *VectordbProfileInfo`

NewVectordbProfileInfo instantiates a new VectordbProfileInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectordbProfileInfoWithDefaults

`func NewVectordbProfileInfoWithDefaults() *VectordbProfileInfo`

NewVectordbProfileInfoWithDefaults instantiates a new VectordbProfileInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *VectordbProfileInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *VectordbProfileInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *VectordbProfileInfo) SetName(v string)`

SetName sets Name field to given value.


### GetProvider

`func (o *VectordbProfileInfo) GetProvider() VectordbProviders`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *VectordbProfileInfo) GetProviderOk() (*VectordbProviders, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *VectordbProfileInfo) SetProvider(v VectordbProviders)`

SetProvider sets Provider field to given value.


### GetAccessInfo

`func (o *VectordbProfileInfo) GetAccessInfo() VectordbAccessInfo`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *VectordbProfileInfo) GetAccessInfoOk() (*VectordbAccessInfo, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *VectordbProfileInfo) SetAccessInfo(v VectordbAccessInfo)`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *VectordbProfileInfo) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.

### GetAccessKey

`func (o *VectordbProfileInfo) GetAccessKey() VectordbAccessKey`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *VectordbProfileInfo) GetAccessKeyOk() (*VectordbAccessKey, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *VectordbProfileInfo) SetAccessKey(v VectordbAccessKey)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *VectordbProfileInfo) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetReadOnly

`func (o *VectordbProfileInfo) GetReadOnly() bool`

GetReadOnly returns the ReadOnly field if non-nil, zero value otherwise.

### GetReadOnlyOk

`func (o *VectordbProfileInfo) GetReadOnlyOk() (*bool, bool)`

GetReadOnlyOk returns a tuple with the ReadOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadOnly

`func (o *VectordbProfileInfo) SetReadOnly(v bool)`

SetReadOnly sets ReadOnly field to given value.

### HasReadOnly

`func (o *VectordbProfileInfo) HasReadOnly() bool`

HasReadOnly returns a boolean if a field has been set.

### GetCreatedBy

`func (o *VectordbProfileInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *VectordbProfileInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *VectordbProfileInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *VectordbProfileInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *VectordbProfileInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *VectordbProfileInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *VectordbProfileInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *VectordbProfileInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *VectordbProfileInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


