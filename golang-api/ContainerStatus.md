# ContainerStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainerList** | [**[]ContainerStatusInfo**](ContainerStatusInfo.md) | The list of container status information. | 

## Methods

### NewContainerStatus

`func NewContainerStatus(containerList []ContainerStatusInfo, ) *ContainerStatus`

NewContainerStatus instantiates a new ContainerStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContainerStatusWithDefaults

`func NewContainerStatusWithDefaults() *ContainerStatus`

NewContainerStatusWithDefaults instantiates a new ContainerStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContainerList

`func (o *ContainerStatus) GetContainerList() []ContainerStatusInfo`

GetContainerList returns the ContainerList field if non-nil, zero value otherwise.

### GetContainerListOk

`func (o *ContainerStatus) GetContainerListOk() (*[]ContainerStatusInfo, bool)`

GetContainerListOk returns a tuple with the ContainerList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainerList

`func (o *ContainerStatus) SetContainerList(v []ContainerStatusInfo)`

SetContainerList sets ContainerList field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


