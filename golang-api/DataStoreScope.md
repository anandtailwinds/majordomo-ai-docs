# DataStoreScope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | List of data stores in each workspace that is created by the user. | 
**IngestPipelines** | Pointer to **[]string** | List of ingest pipelines available for each data store. | [optional] 

## Methods

### NewDataStoreScope

`func NewDataStoreScope(name string, ) *DataStoreScope`

NewDataStoreScope instantiates a new DataStoreScope object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreScopeWithDefaults

`func NewDataStoreScopeWithDefaults() *DataStoreScope`

NewDataStoreScopeWithDefaults instantiates a new DataStoreScope object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DataStoreScope) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DataStoreScope) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DataStoreScope) SetName(v string)`

SetName sets Name field to given value.


### GetIngestPipelines

`func (o *DataStoreScope) GetIngestPipelines() []string`

GetIngestPipelines returns the IngestPipelines field if non-nil, zero value otherwise.

### GetIngestPipelinesOk

`func (o *DataStoreScope) GetIngestPipelinesOk() (*[]string, bool)`

GetIngestPipelinesOk returns a tuple with the IngestPipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestPipelines

`func (o *DataStoreScope) SetIngestPipelines(v []string)`

SetIngestPipelines sets IngestPipelines field to given value.

### HasIngestPipelines

`func (o *DataStoreScope) HasIngestPipelines() bool`

HasIngestPipelines returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


