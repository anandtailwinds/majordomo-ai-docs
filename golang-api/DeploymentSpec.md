# DeploymentSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeploymentType** | Pointer to [**DeploymentTypes**](DeploymentTypes.md) |  | [optional] 
**AccessInfo** | Pointer to **map[string]interface{}** | Access information for the deployment itself. | [optional] 
**DeploymentInfo** | Pointer to **map[string]interface{}** | Optional parameters for deployment. | [optional] 

## Methods

### NewDeploymentSpec

`func NewDeploymentSpec() *DeploymentSpec`

NewDeploymentSpec instantiates a new DeploymentSpec object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeploymentSpecWithDefaults

`func NewDeploymentSpecWithDefaults() *DeploymentSpec`

NewDeploymentSpecWithDefaults instantiates a new DeploymentSpec object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeploymentType

`func (o *DeploymentSpec) GetDeploymentType() DeploymentTypes`

GetDeploymentType returns the DeploymentType field if non-nil, zero value otherwise.

### GetDeploymentTypeOk

`func (o *DeploymentSpec) GetDeploymentTypeOk() (*DeploymentTypes, bool)`

GetDeploymentTypeOk returns a tuple with the DeploymentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeploymentType

`func (o *DeploymentSpec) SetDeploymentType(v DeploymentTypes)`

SetDeploymentType sets DeploymentType field to given value.

### HasDeploymentType

`func (o *DeploymentSpec) HasDeploymentType() bool`

HasDeploymentType returns a boolean if a field has been set.

### GetAccessInfo

`func (o *DeploymentSpec) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *DeploymentSpec) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *DeploymentSpec) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *DeploymentSpec) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.

### GetDeploymentInfo

`func (o *DeploymentSpec) GetDeploymentInfo() map[string]interface{}`

GetDeploymentInfo returns the DeploymentInfo field if non-nil, zero value otherwise.

### GetDeploymentInfoOk

`func (o *DeploymentSpec) GetDeploymentInfoOk() (*map[string]interface{}, bool)`

GetDeploymentInfoOk returns a tuple with the DeploymentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeploymentInfo

`func (o *DeploymentSpec) SetDeploymentInfo(v map[string]interface{})`

SetDeploymentInfo sets DeploymentInfo field to given value.

### HasDeploymentInfo

`func (o *DeploymentSpec) HasDeploymentInfo() bool`

HasDeploymentInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


