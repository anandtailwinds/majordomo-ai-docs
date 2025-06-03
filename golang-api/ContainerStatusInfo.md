# ContainerStatusInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the container. | 
**ImageName** | **string** | The name of the container image. | 
**StartedAt** | Pointer to **time.Time** | The time at which the container was started. | [optional] 
**Status** | **string** | The current status of the container. | 

## Methods

### NewContainerStatusInfo

`func NewContainerStatusInfo(name string, imageName string, status string, ) *ContainerStatusInfo`

NewContainerStatusInfo instantiates a new ContainerStatusInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContainerStatusInfoWithDefaults

`func NewContainerStatusInfoWithDefaults() *ContainerStatusInfo`

NewContainerStatusInfoWithDefaults instantiates a new ContainerStatusInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ContainerStatusInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ContainerStatusInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ContainerStatusInfo) SetName(v string)`

SetName sets Name field to given value.


### GetImageName

`func (o *ContainerStatusInfo) GetImageName() string`

GetImageName returns the ImageName field if non-nil, zero value otherwise.

### GetImageNameOk

`func (o *ContainerStatusInfo) GetImageNameOk() (*string, bool)`

GetImageNameOk returns a tuple with the ImageName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageName

`func (o *ContainerStatusInfo) SetImageName(v string)`

SetImageName sets ImageName field to given value.


### GetStartedAt

`func (o *ContainerStatusInfo) GetStartedAt() time.Time`

GetStartedAt returns the StartedAt field if non-nil, zero value otherwise.

### GetStartedAtOk

`func (o *ContainerStatusInfo) GetStartedAtOk() (*time.Time, bool)`

GetStartedAtOk returns a tuple with the StartedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartedAt

`func (o *ContainerStatusInfo) SetStartedAt(v time.Time)`

SetStartedAt sets StartedAt field to given value.

### HasStartedAt

`func (o *ContainerStatusInfo) HasStartedAt() bool`

HasStartedAt returns a boolean if a field has been set.

### GetStatus

`func (o *ContainerStatusInfo) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ContainerStatusInfo) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ContainerStatusInfo) SetStatus(v string)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


