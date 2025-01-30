# Org.OpenAPITools.Model.VectorStoreInfo
This contains information specific to the vector database obtained from the provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**DataStoreName** | **string** | Name of the data store. | 
**Status** | **VectorStoreStatusTypes** |  | 
**Dimension** | **long** | Dimensions in case of a vector database. | [optional] 
**TotalRecords** | **long** | Total number of document chunks in case of a vector database. | [optional] 
**Files** | **List&lt;string&gt;** | The list of files present in the vector database. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

