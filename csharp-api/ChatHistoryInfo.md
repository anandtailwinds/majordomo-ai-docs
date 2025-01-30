# Org.OpenAPITools.Model.ChatHistoryInfo
Chat history of a particular user saved with a specific name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | **string** | The user to whom these chats belong to. | 
**Name** | **string** | Name of the chat history. | 
**QaList** | [**List&lt;ChatQA&gt;**](ChatQA.md) | History of question answer interactions of the user. | [optional] 
**LastUpdate** | **long** | Timestamp of the last update to the data store. | 
**Notes** | **string** | User notes for the chat history. This can contain information such as model used, parameters used etc. and can be populated upto 250 characters. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

