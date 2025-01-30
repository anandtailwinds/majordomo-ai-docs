# Org.OpenAPITools.Model.DataStoreInfo
This contains configuration and operational information about a single data store and is returned for GET operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**Name** | **string** | Name of the data store. | 
**Contents** | **string** | Description of the data store. This can be optionally included in queries. | [optional] 
**CreatedBy** | **string** | The user who created the data store. | 
**SharedUsers** | **List&lt;string&gt;** | The list of users this profile is shared with. | [optional] 
**ReadOnly** | **bool** | Flag to indicate whether the data store is read-only. | [optional] 
**StoreType** | **DataStoreTypes** |  | 
**VectordbStore** | [**VectordbStore**](VectordbStore.md) |  | [optional] 
**StructdbStore** | [**StructdbStore**](StructdbStore.md) |  | [optional] 
**CreatedAt** | **long** | Timestamp of the data store creation. | 
**LastUpdate** | **long** | Timestamp of the last update to the data store. | 
**LastQuery** | **long** | Timestamp of last query using the data store. | 
**LastIngest** | **long** | Timestamp of the last ingestion to the data store. | 
**DirectIngestCount** | **long** | Number of direct ingestions done to the data store until now. | 
**PipelineIngestCount** | **long** | Number of pipeline ingestions done to the data store until now. | 
**ErrorIngestCount** | **long** | Number of ingestions resulting in errors. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

