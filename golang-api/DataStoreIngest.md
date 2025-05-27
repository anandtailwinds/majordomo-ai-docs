# DataStoreIngest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace the data store belongs to. | 
**DataStoreName** | **string** | Name of the data store | 
**ToolName** | Pointer to **string** | Name of the application profile | [optional] 
**InputFilter** | **map[string]interface{}** | The set of parameters describing the source location and filters for accessing  the input files. The parameters for each type of data source is listed below.  &lt;b&gt;APP_TYPE_AWS_S3&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;APP_TYPE_AZURE_BLOB&lt;/b&gt;  file_list : Comma separated list of files, can contain wildcards. If the files are in a directory format the entire directory key should be specified.     &lt;b&gt;APP_TYPE_WEBPAGE&lt;/b&gt;  url : The webpage URL.  | 
**IngestType** | [**IngestTypes**](IngestTypes.md) |  | 
**IngestParams** | Pointer to [**IngestParams**](IngestParams.md) |  | [optional] 

## Methods

### NewDataStoreIngest

`func NewDataStoreIngest(workspace string, dataStoreName string, inputFilter map[string]interface{}, ingestType IngestTypes, ) *DataStoreIngest`

NewDataStoreIngest instantiates a new DataStoreIngest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreIngestWithDefaults

`func NewDataStoreIngestWithDefaults() *DataStoreIngest`

NewDataStoreIngestWithDefaults instantiates a new DataStoreIngest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *DataStoreIngest) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *DataStoreIngest) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *DataStoreIngest) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetDataStoreName

`func (o *DataStoreIngest) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *DataStoreIngest) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *DataStoreIngest) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetToolName

`func (o *DataStoreIngest) GetToolName() string`

GetToolName returns the ToolName field if non-nil, zero value otherwise.

### GetToolNameOk

`func (o *DataStoreIngest) GetToolNameOk() (*string, bool)`

GetToolNameOk returns a tuple with the ToolName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolName

`func (o *DataStoreIngest) SetToolName(v string)`

SetToolName sets ToolName field to given value.

### HasToolName

`func (o *DataStoreIngest) HasToolName() bool`

HasToolName returns a boolean if a field has been set.

### GetInputFilter

`func (o *DataStoreIngest) GetInputFilter() map[string]interface{}`

GetInputFilter returns the InputFilter field if non-nil, zero value otherwise.

### GetInputFilterOk

`func (o *DataStoreIngest) GetInputFilterOk() (*map[string]interface{}, bool)`

GetInputFilterOk returns a tuple with the InputFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFilter

`func (o *DataStoreIngest) SetInputFilter(v map[string]interface{})`

SetInputFilter sets InputFilter field to given value.


### GetIngestType

`func (o *DataStoreIngest) GetIngestType() IngestTypes`

GetIngestType returns the IngestType field if non-nil, zero value otherwise.

### GetIngestTypeOk

`func (o *DataStoreIngest) GetIngestTypeOk() (*IngestTypes, bool)`

GetIngestTypeOk returns a tuple with the IngestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestType

`func (o *DataStoreIngest) SetIngestType(v IngestTypes)`

SetIngestType sets IngestType field to given value.


### GetIngestParams

`func (o *DataStoreIngest) GetIngestParams() IngestParams`

GetIngestParams returns the IngestParams field if non-nil, zero value otherwise.

### GetIngestParamsOk

`func (o *DataStoreIngest) GetIngestParamsOk() (*IngestParams, bool)`

GetIngestParamsOk returns a tuple with the IngestParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestParams

`func (o *DataStoreIngest) SetIngestParams(v IngestParams)`

SetIngestParams sets IngestParams field to given value.

### HasIngestParams

`func (o *DataStoreIngest) HasIngestParams() bool`

HasIngestParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


