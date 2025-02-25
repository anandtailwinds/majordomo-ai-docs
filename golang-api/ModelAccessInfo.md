# ModelAccessInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Region** | Pointer to **string** | The region in case of cloud Provider. | [optional] 
**BaseUrl** | Pointer to **string** | The base URL for a self-hosted model. | [optional] 

## Methods

### NewModelAccessInfo

`func NewModelAccessInfo() *ModelAccessInfo`

NewModelAccessInfo instantiates a new ModelAccessInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelAccessInfoWithDefaults

`func NewModelAccessInfoWithDefaults() *ModelAccessInfo`

NewModelAccessInfoWithDefaults instantiates a new ModelAccessInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegion

`func (o *ModelAccessInfo) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *ModelAccessInfo) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *ModelAccessInfo) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *ModelAccessInfo) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetBaseUrl

`func (o *ModelAccessInfo) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *ModelAccessInfo) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *ModelAccessInfo) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.

### HasBaseUrl

`func (o *ModelAccessInfo) HasBaseUrl() bool`

HasBaseUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


