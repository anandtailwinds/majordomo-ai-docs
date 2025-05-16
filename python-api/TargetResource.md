# TargetResource

target resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | **str** | The workspace that contains the target resource. | 
**name** | **str** | Name of the target resource. | 
**target_type** | [**TargetResourceTypes**](TargetResourceTypes.md) |  | 
**access_info** | **Dict[str, object]** | Parameters required for accessing the target resource.  &lt;b&gt;Target type is TARGET_TYPE_CPU or TARGET_TYPE_GPU&lt;/b&gt;:  host_name: Specify the hostname or IP address of the resource.  user_name: The username to use while doing a SSH connection to the resource.  ssh_key: The SSH key to use while connecting with the resource. Can be a pointer to a keyvault containing the credentials.  &lt;b&gt;Target type is TARGET_TYPE_KSERVE_CLUSTER (Azure)&lt;/b&gt;:  subcription_id: The subscription ID to use while accessing the cluster. This is optional if the subscription_id is same as the one where the worker is provisioned.  resource_group: The name of the resource group in which the cluster is present.  cluster_name: The name of the Kubernetes cluster.  cluster_access_id: The cluster access ID.  cluster_access_rg: The resource group of the Managed Profile to use for accessing the cluster.  cluster_access_client_id: The Managed Profile name to use while accessing the cluster. The worker should be able to assume this role.  &lt;b&gt;Target type is TARGET_TYPE_KSERVE_CLUSTER (AWS)&lt;/b&gt;:  cluster_role: The name of the IAM role to use while accessing the cluster.  cluster_name: The name of the Kubernetes cluster.  region: The region in which the cluster is present.  access_key_id: The access key id to use while trying to assume the cluster_role IAM role.  secret_access_key: The secret access key to use while trying to assume the cluster_role IAM role.  | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.target_resource import TargetResource

# TODO update the JSON string below
json = "{}"
# create an instance of TargetResource from a JSON string
target_resource_instance = TargetResource.from_json(json)
# print the JSON string representation of the object
print(TargetResource.to_json())

# convert the object into a dict
target_resource_dict = target_resource_instance.to_dict()
# create an instance of TargetResource from a dict
target_resource_from_dict = TargetResource.from_dict(target_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


