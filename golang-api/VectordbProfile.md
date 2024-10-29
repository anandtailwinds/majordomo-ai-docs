# VectordbProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the Vectordb profile | 
**Provider** | [**VectordbProviders**](VectordbProviders.md) |  | 
**AccessKey** | Pointer to **string** | Access Key for accessing the Vectordb | [optional] 
**Endpoint** | [**VectordbEndpoint**](VectordbEndpoint.md) |  | 
**Readonly** | **bool** | If this condition is set to true, then only read operations are permitted to this vector database. This can be used by administrators to restrict users from modifying the contents arbitrarily. | [default to false]

## Methods

### NewVectordbProfile

`func NewVectordbProfile(name string, provider VectordbProviders, endpoint VectordbEndpoint, readonly bool, ) *VectordbProfile`

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

`func (o *VectordbProfile) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *VectordbProfile) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *VectordbProfile) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *VectordbProfile) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetEndpoint

`func (o *VectordbProfile) GetEndpoint() VectordbEndpoint`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *VectordbProfile) GetEndpointOk() (*VectordbEndpoint, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *VectordbProfile) SetEndpoint(v VectordbEndpoint)`

SetEndpoint sets Endpoint field to given value.


### GetReadonly

`func (o *VectordbProfile) GetReadonly() bool`

GetReadonly returns the Readonly field if non-nil, zero value otherwise.

### GetReadonlyOk

`func (o *VectordbProfile) GetReadonlyOk() (*bool, bool)`

GetReadonlyOk returns a tuple with the Readonly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReadonly

`func (o *VectordbProfile) SetReadonly(v bool)`

SetReadonly sets Readonly field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


