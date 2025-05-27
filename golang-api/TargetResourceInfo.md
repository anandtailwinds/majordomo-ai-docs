# TargetResourceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**TargetResource**](TargetResource.md) |  | 
**CreatedBy** | **string** | The username who created this target resource | 
**CreatedAt** | **int64** | Timestamp of the target resource creation | 
**LastUpdate** | **int64** | Timestamp of the last update to the target resource | 

## Methods

### NewTargetResourceInfo

`func NewTargetResourceInfo(config TargetResource, createdBy string, createdAt int64, lastUpdate int64, ) *TargetResourceInfo`

NewTargetResourceInfo instantiates a new TargetResourceInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTargetResourceInfoWithDefaults

`func NewTargetResourceInfoWithDefaults() *TargetResourceInfo`

NewTargetResourceInfoWithDefaults instantiates a new TargetResourceInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *TargetResourceInfo) GetConfig() TargetResource`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *TargetResourceInfo) GetConfigOk() (*TargetResource, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *TargetResourceInfo) SetConfig(v TargetResource)`

SetConfig sets Config field to given value.


### GetCreatedBy

`func (o *TargetResourceInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *TargetResourceInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *TargetResourceInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *TargetResourceInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TargetResourceInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TargetResourceInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *TargetResourceInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *TargetResourceInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *TargetResourceInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


