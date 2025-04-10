# DataStoreIngest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace the data store belongs to. | 
**DataStoreName** | **string** | Name of the data store | 
**AppProfileName** | Pointer to **string** | Name of the application profile | [optional] 
**InputFilter** | **map[string]interface{}** | The set of parameters describing the source location and filters for accessing  the input files. The specific parameters vary depending on the type of source,  for example an S3 bucket will require a bucket name to be specified.  | 
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


### GetAppProfileName

`func (o *DataStoreIngest) GetAppProfileName() string`

GetAppProfileName returns the AppProfileName field if non-nil, zero value otherwise.

### GetAppProfileNameOk

`func (o *DataStoreIngest) GetAppProfileNameOk() (*string, bool)`

GetAppProfileNameOk returns a tuple with the AppProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppProfileName

`func (o *DataStoreIngest) SetAppProfileName(v string)`

SetAppProfileName sets AppProfileName field to given value.

### HasAppProfileName

`func (o *DataStoreIngest) HasAppProfileName() bool`

HasAppProfileName returns a boolean if a field has been set.

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


