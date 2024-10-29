# DataStoreIngest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this data store belongs to. | 
**DataStoreName** | **string** | Name of the data store | 
**InputFilter** | [**InputFilter**](InputFilter.md) |  | 
**InputKeys** | Pointer to [**InputKeys**](InputKeys.md) |  | [optional] 
**InputType** | [**InputTypes**](InputTypes.md) |  | 
**IngestType** | [**IngestTypes**](IngestTypes.md) |  | 
**IngestParams** | Pointer to [**IngestParams**](IngestParams.md) |  | [optional] 

## Methods

### NewDataStoreIngest

`func NewDataStoreIngest(workspace string, dataStoreName string, inputFilter InputFilter, inputType InputTypes, ingestType IngestTypes, ) *DataStoreIngest`

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


### GetInputFilter

`func (o *DataStoreIngest) GetInputFilter() InputFilter`

GetInputFilter returns the InputFilter field if non-nil, zero value otherwise.

### GetInputFilterOk

`func (o *DataStoreIngest) GetInputFilterOk() (*InputFilter, bool)`

GetInputFilterOk returns a tuple with the InputFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFilter

`func (o *DataStoreIngest) SetInputFilter(v InputFilter)`

SetInputFilter sets InputFilter field to given value.


### GetInputKeys

`func (o *DataStoreIngest) GetInputKeys() InputKeys`

GetInputKeys returns the InputKeys field if non-nil, zero value otherwise.

### GetInputKeysOk

`func (o *DataStoreIngest) GetInputKeysOk() (*InputKeys, bool)`

GetInputKeysOk returns a tuple with the InputKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputKeys

`func (o *DataStoreIngest) SetInputKeys(v InputKeys)`

SetInputKeys sets InputKeys field to given value.

### HasInputKeys

`func (o *DataStoreIngest) HasInputKeys() bool`

HasInputKeys returns a boolean if a field has been set.

### GetInputType

`func (o *DataStoreIngest) GetInputType() InputTypes`

GetInputType returns the InputType field if non-nil, zero value otherwise.

### GetInputTypeOk

`func (o *DataStoreIngest) GetInputTypeOk() (*InputTypes, bool)`

GetInputTypeOk returns a tuple with the InputType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputType

`func (o *DataStoreIngest) SetInputType(v InputTypes)`

SetInputType sets InputType field to given value.


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


