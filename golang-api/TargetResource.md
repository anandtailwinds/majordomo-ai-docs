# TargetResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace that contains the target resource. | 
**Name** | **string** | Name of the target resource. | 
**TargetType** | [**TargetResourceTypes**](TargetResourceTypes.md) |  | 
**AccessInfo** | **map[string]interface{}** | Parameters required for accessing the target resource.  &lt;b&gt;Target type is TARGET_TYPE_CPU or TARGET_TYPE_GPU&lt;/b&gt;:  host_name: Specify the hostname or IP address of the resource.  user_name: The username to use while doing a SSH connection to the resource.  ssh_key: The SSH key to use while connecting with the resource. Can be a pointer to a keyvault containing the credentials.  &lt;b&gt;Target type is TARGET_TYPE_KSERVE_CLUSTER (Azure)&lt;/b&gt;:  subcription_id: The subscription ID to use while accessing the cluster. This is optional if the subscription_id is same as the one where the worker is provisioned.  resource_group: The name of the resource group in which the cluster is present.  cluster_name: The name of the Kubernetes cluster.  cluster_access_id: The cluster access ID.  cluster_access_rg: The resource group of the Managed Profile to use for accessing the cluster.  cluster_access_client_id: The Managed Profile name to use while accessing the cluster. The worker should be able to assume this role.  &lt;b&gt;Target type is TARGET_TYPE_KSERVE_CLUSTER (AWS)&lt;/b&gt;:  cluster_role: The name of the IAM role to use while accessing the cluster.  cluster_name: The name of the Kubernetes cluster.  region: The region in which the cluster is present.  access_key_id: The access key id to use while trying to assume the cluster_role IAM role.  secret_access_key: The secret access key to use while trying to assume the cluster_role IAM role.  | 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewTargetResource

`func NewTargetResource(workspace string, name string, targetType TargetResourceTypes, accessInfo map[string]interface{}, ) *TargetResource`

NewTargetResource instantiates a new TargetResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTargetResourceWithDefaults

`func NewTargetResourceWithDefaults() *TargetResource`

NewTargetResourceWithDefaults instantiates a new TargetResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *TargetResource) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *TargetResource) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *TargetResource) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *TargetResource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TargetResource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TargetResource) SetName(v string)`

SetName sets Name field to given value.


### GetTargetType

`func (o *TargetResource) GetTargetType() TargetResourceTypes`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *TargetResource) GetTargetTypeOk() (*TargetResourceTypes, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *TargetResource) SetTargetType(v TargetResourceTypes)`

SetTargetType sets TargetType field to given value.


### GetAccessInfo

`func (o *TargetResource) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *TargetResource) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *TargetResource) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.


### GetSharedUsers

`func (o *TargetResource) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *TargetResource) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *TargetResource) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *TargetResource) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


