# Org.OpenAPITools.Model.AllowedProfiles
This describes the list of permitted profiles and stores for the user on a workspace basis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the workspace. | 
**ModelProfiles** | [**List&lt;ModelProfileScope&gt;**](ModelProfileScope.md) | List of model profiles permitted for the user. | [optional] 
**VectordbProfiles** | **List&lt;string&gt;** | List of vectordb profiles permitted for the user. | [optional] 
**MonitorProfiles** | **List&lt;string&gt;** | List of monitor profiles permitted for the user. | [optional] 
**DataStores** | [**List&lt;DataStoreScope&gt;**](DataStoreScope.md) | List of data stores permitted for the user. | [optional] 
**QueryPipelines** | **List&lt;string&gt;** | List of data stores in each workspace that is created by the user. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

