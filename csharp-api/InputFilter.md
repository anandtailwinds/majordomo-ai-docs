# Org.OpenAPITools.Model.InputFilter
The parameters used to filter file(s) for ingestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilesList** | **string** | Comma separated list of file name specification to be picked for ingestion. Supports wildcards. | [optional] 
**Recursive** | **bool** | Indicates that the file wildcards can be matched in sub-directories of the specified source. | [optional] 
**AzBlob** | **string** | Name of the blob incase of Azure storage. | [optional] 
**AzAccountUrl** | **string** | Name of the account URL incase of Azure storage. | [optional] 
**S3Bucket** | **string** | Name of the S3 bucket in case of AWS storage. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

