# Org.OpenAPITools.Model.DataStore
This is the data store specification that is used for creating and updating a data store. Data stores can be of different types including a vector database. Some parameters are mandatory based on the type of database chosen and it will be indicated along with the parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**Name** | **string** | Name of the data store. | 
**Contents** | **string** | Description of the data store. This can be optionally included in queries. | [optional] 
**StoreType** | **DataStoreTypes** |  | 
**VectordbStore** | [**VectordbStore**](VectordbStore.md) |  | [optional] 
**StructdbStore** | [**StructdbStore**](StructdbStore.md) |  | [optional] 
**SharedUsers** | **List&lt;string&gt;** | The list of users this profile is shared with. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

