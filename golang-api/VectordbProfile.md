# VectordbProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the Vectordb profile | 
**Provider** | [**VectordbProviders**](VectordbProviders.md) |  | 
**AccessKey** | Pointer to [**VectordbAccessKey**](VectordbAccessKey.md) |  | [optional] 
**AccessInfo** | Pointer to [**VectordbAccessInfo**](VectordbAccessInfo.md) |  | [optional] 
**ReadOnly** | Pointer to **bool** | If this condition is set to true, then only read operations are permitted to this vector database. This can be used by administrators to restrict users from modifying the contents arbitrarily. | [optional] [default to false]

## Methods

### NewVectordbProfile

`func NewVectordbProfile(name string, provider VectordbProviders, ) *VectordbProfile`

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

### GetReadOnly

`func (o *VectordbProfile) GetReadOnly() bool`

GetReadOnly returns the ReadOnly field if non-nil, zero value otherwise.

### GetReadOnlyOk

`func (o *VectordbProfile) GetReadOnlyOk() (*bool, bool)`

GetReadOnlyOk returns a tuple with the ReadOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadOnly

`func (o *VectordbProfile) SetReadOnly(v bool)`

SetReadOnly sets ReadOnly field to given value.

### HasReadOnly

`func (o *VectordbProfile) HasReadOnly() bool`

HasReadOnly returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


