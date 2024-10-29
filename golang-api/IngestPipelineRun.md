# IngestPipelineRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this ingest pipeline belongs to. | 
**Name** | **string** | Name of the ingest pipeline. | 
**DataStoreName** | **string** | The name of the parent data store in which this ingest pipeline is present. | 

## Methods

### NewIngestPipelineRun

`func NewIngestPipelineRun(workspace string, name string, dataStoreName string, ) *IngestPipelineRun`

NewIngestPipelineRun instantiates a new IngestPipelineRun object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIngestPipelineRunWithDefaults

`func NewIngestPipelineRunWithDefaults() *IngestPipelineRun`

NewIngestPipelineRunWithDefaults instantiates a new IngestPipelineRun object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *IngestPipelineRun) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *IngestPipelineRun) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *IngestPipelineRun) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *IngestPipelineRun) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IngestPipelineRun) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IngestPipelineRun) SetName(v string)`

SetName sets Name field to given value.


### GetDataStoreName

`func (o *IngestPipelineRun) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *IngestPipelineRun) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *IngestPipelineRun) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


