# Org.OpenAPITools.Model.ModelProfile
model profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the model profile. | 
**Provider** | **ModelProviders** |  | 
**Tags** | **List&lt;string&gt;** | Tags to describe the model where it is running or what its purpose is. | [optional] 
**Workspace** | **string** | The workspace that contains the model profile. | 
**EmbeddingModels** | **List&lt;string&gt;** | List of embedding models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**LlmModels** | **List&lt;string&gt;** | List of embedding models allowed for a user who is associated to this profile. Incase list is empty all models available in the provider are allowed. | [optional] 
**AccessInfo** | [**ModelAccessInfo**](ModelAccessInfo.md) |  | [optional] 
**AccessKey** | [**ModelAccessKey**](ModelAccessKey.md) |  | [optional] 
**SharedUsers** | **List&lt;string&gt;** | The list of users this profile is shared with. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

