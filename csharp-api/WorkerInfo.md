# Org.OpenAPITools.Model.WorkerInfo
Worker configuration and operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the worker. | 
**WorkerId** | **string** | The unique identifier that is automatically assigned to the worker. | 
**AccessKey** | **string** | The client secret that is used to authenticate the worker. This needs to be provided when a worker tries to join Majordomo director. | 
**ClientStatus** | **bool** | Indicates whether the worker is currently connected to the director. | 
**ClientUrl** | **string** | The registered endpoint for the worker. | [optional] 
**ChatWorker** | **bool** | The worker is used as a means to access a chat server. | [optional] 
**CreatedAt** | **long** | Timestamp of the worker creation. | 
**LastUpdate** | **long** | Timestamp of the last update to the worker. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

