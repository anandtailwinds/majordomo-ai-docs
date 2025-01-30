# Org.OpenAPITools.Model.IngestPipelineInfo
Ingest Pipeline configuration and operation information that is returned in GET requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**CreatedBy** | **string** | The user who created the ingest pipeline. | 
**Name** | **string** | Name of the ingest pipeline. | 
**DataStoreName** | **string** | The name of the parent data store in which this ingest pipeline is present. | 
**InputFilter** | [**InputFilter**](InputFilter.md) |  | 
**InputKeys** | [**InputKeys**](InputKeys.md) |  | [optional] 
**InputType** | **InputTypes** |  | 
**IngestType** | **IngestTypes** |  | 
**IngestParams** | [**IngestParams**](IngestParams.md) |  | [optional] 
**TimerOn** | **bool** |  | [optional] 
**TimerInterval** | **long** |  | [optional] 
**CreatedAt** | **long** | Timestamp of the ingest pipeline creation. | 
**LastUpdate** | **long** | Timestamp of the last update to the ingest pipeline. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

