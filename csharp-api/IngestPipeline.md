# Org.OpenAPITools.Model.IngestPipeline
Describes the configurable attributes of an ingest pipeline that is to be created or updated. The ingest pipeline is always a part of a parent data store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this ingest pipeline belongs to. | 
**Name** | **string** | Name of the ingest pipeline. | 
**DataStoreName** | **string** | The name of the parent data store in which this ingest pipeline is present. | 
**InputFilter** | [**InputFilter**](InputFilter.md) |  | 
**InputKeys** | [**InputKeys**](InputKeys.md) |  | [optional] 
**InputType** | **InputTypes** |  | 
**IngestType** | **IngestTypes** |  | 
**IngestParams** | [**IngestParams**](IngestParams.md) |  | [optional] 
**TimerOn** | **bool** | Turn on the ingestion timer, once the timer expires the specified ingestion action is performed. | [optional] 
**TimerInterval** | **long** | Specify the timer interval for the ingestion action in minutes. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

