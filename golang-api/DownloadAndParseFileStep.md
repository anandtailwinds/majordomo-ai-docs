# DownloadAndParseFileStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ToolName** | **string** | The name of the application profile to access the content. | 
**InputFilter** | **map[string]interface{}** | Input filter specification for accessing the source content.  The set of parameters describing the source location and filters for accessing  the input files. The parameters for each type of data source is listed below.  &lt;b&gt;TOOL_TYPE_AWS_S3&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;TOOL_TYPE_AZURE_BLOB&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;TOOL_TYPE_WEBPAGE&lt;/b&gt;  url : The webpage URL.  | 
**IngestParams** | Pointer to [**IngestParams**](IngestParams.md) |  | [optional] 
**IngestType** | [**IngestTypes**](IngestTypes.md) |  | 

## Methods

### NewDownloadAndParseFileStep

`func NewDownloadAndParseFileStep(toolName string, inputFilter map[string]interface{}, ingestType IngestTypes, ) *DownloadAndParseFileStep`

NewDownloadAndParseFileStep instantiates a new DownloadAndParseFileStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDownloadAndParseFileStepWithDefaults

`func NewDownloadAndParseFileStepWithDefaults() *DownloadAndParseFileStep`

NewDownloadAndParseFileStepWithDefaults instantiates a new DownloadAndParseFileStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToolName

`func (o *DownloadAndParseFileStep) GetToolName() string`

GetToolName returns the ToolName field if non-nil, zero value otherwise.

### GetToolNameOk

`func (o *DownloadAndParseFileStep) GetToolNameOk() (*string, bool)`

GetToolNameOk returns a tuple with the ToolName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolName

`func (o *DownloadAndParseFileStep) SetToolName(v string)`

SetToolName sets ToolName field to given value.


### GetInputFilter

`func (o *DownloadAndParseFileStep) GetInputFilter() map[string]interface{}`

GetInputFilter returns the InputFilter field if non-nil, zero value otherwise.

### GetInputFilterOk

`func (o *DownloadAndParseFileStep) GetInputFilterOk() (*map[string]interface{}, bool)`

GetInputFilterOk returns a tuple with the InputFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFilter

`func (o *DownloadAndParseFileStep) SetInputFilter(v map[string]interface{})`

SetInputFilter sets InputFilter field to given value.


### GetIngestParams

`func (o *DownloadAndParseFileStep) GetIngestParams() IngestParams`

GetIngestParams returns the IngestParams field if non-nil, zero value otherwise.

### GetIngestParamsOk

`func (o *DownloadAndParseFileStep) GetIngestParamsOk() (*IngestParams, bool)`

GetIngestParamsOk returns a tuple with the IngestParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestParams

`func (o *DownloadAndParseFileStep) SetIngestParams(v IngestParams)`

SetIngestParams sets IngestParams field to given value.

### HasIngestParams

`func (o *DownloadAndParseFileStep) HasIngestParams() bool`

HasIngestParams returns a boolean if a field has been set.

### GetIngestType

`func (o *DownloadAndParseFileStep) GetIngestType() IngestTypes`

GetIngestType returns the IngestType field if non-nil, zero value otherwise.

### GetIngestTypeOk

`func (o *DownloadAndParseFileStep) GetIngestTypeOk() (*IngestTypes, bool)`

GetIngestTypeOk returns a tuple with the IngestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestType

`func (o *DownloadAndParseFileStep) SetIngestType(v IngestTypes)`

SetIngestType sets IngestType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


