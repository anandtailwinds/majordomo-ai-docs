# IngestPipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | The workspace this ingest pipeline belongs to. | 
**Name** | **string** | Name of the ingest pipeline. | 
**DataStoreName** | **string** | The name of the parent data store in which this ingest pipeline is present. | 
**InputFilter** | **map[string]interface{}** | The set of parameters describing the source location and filters for accessing  the input files. The specific parameters vary depending on the type of source,  for example an S3 bucket will require a bucket name to be specified.  | 
**AppProfileName** | Pointer to **string** | The name of the application profile from which to download. | [optional] 
**IngestType** | [**IngestTypes**](IngestTypes.md) |  | 
**IngestParams** | Pointer to [**IngestParams**](IngestParams.md) |  | [optional] 
**TimerOn** | Pointer to **bool** | Turn on the ingestion timer, once the timer expires the specified ingestion  action is performed.  | [optional] 
**TimerInterval** | Pointer to **int64** | Specify the timer interval for the ingestion action in minutes. | [optional] 

## Methods

### NewIngestPipeline

`func NewIngestPipeline(workspace string, name string, dataStoreName string, inputFilter map[string]interface{}, ingestType IngestTypes, ) *IngestPipeline`

NewIngestPipeline instantiates a new IngestPipeline object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIngestPipelineWithDefaults

`func NewIngestPipelineWithDefaults() *IngestPipeline`

NewIngestPipelineWithDefaults instantiates a new IngestPipeline object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *IngestPipeline) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *IngestPipeline) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *IngestPipeline) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *IngestPipeline) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IngestPipeline) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IngestPipeline) SetName(v string)`

SetName sets Name field to given value.


### GetDataStoreName

`func (o *IngestPipeline) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *IngestPipeline) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *IngestPipeline) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetInputFilter

`func (o *IngestPipeline) GetInputFilter() map[string]interface{}`

GetInputFilter returns the InputFilter field if non-nil, zero value otherwise.

### GetInputFilterOk

`func (o *IngestPipeline) GetInputFilterOk() (*map[string]interface{}, bool)`

GetInputFilterOk returns a tuple with the InputFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFilter

`func (o *IngestPipeline) SetInputFilter(v map[string]interface{})`

SetInputFilter sets InputFilter field to given value.


### GetAppProfileName

`func (o *IngestPipeline) GetAppProfileName() string`

GetAppProfileName returns the AppProfileName field if non-nil, zero value otherwise.

### GetAppProfileNameOk

`func (o *IngestPipeline) GetAppProfileNameOk() (*string, bool)`

GetAppProfileNameOk returns a tuple with the AppProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppProfileName

`func (o *IngestPipeline) SetAppProfileName(v string)`

SetAppProfileName sets AppProfileName field to given value.

### HasAppProfileName

`func (o *IngestPipeline) HasAppProfileName() bool`

HasAppProfileName returns a boolean if a field has been set.

### GetIngestType

`func (o *IngestPipeline) GetIngestType() IngestTypes`

GetIngestType returns the IngestType field if non-nil, zero value otherwise.

### GetIngestTypeOk

`func (o *IngestPipeline) GetIngestTypeOk() (*IngestTypes, bool)`

GetIngestTypeOk returns a tuple with the IngestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestType

`func (o *IngestPipeline) SetIngestType(v IngestTypes)`

SetIngestType sets IngestType field to given value.


### GetIngestParams

`func (o *IngestPipeline) GetIngestParams() IngestParams`

GetIngestParams returns the IngestParams field if non-nil, zero value otherwise.

### GetIngestParamsOk

`func (o *IngestPipeline) GetIngestParamsOk() (*IngestParams, bool)`

GetIngestParamsOk returns a tuple with the IngestParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestParams

`func (o *IngestPipeline) SetIngestParams(v IngestParams)`

SetIngestParams sets IngestParams field to given value.

### HasIngestParams

`func (o *IngestPipeline) HasIngestParams() bool`

HasIngestParams returns a boolean if a field has been set.

### GetTimerOn

`func (o *IngestPipeline) GetTimerOn() bool`

GetTimerOn returns the TimerOn field if non-nil, zero value otherwise.

### GetTimerOnOk

`func (o *IngestPipeline) GetTimerOnOk() (*bool, bool)`

GetTimerOnOk returns a tuple with the TimerOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimerOn

`func (o *IngestPipeline) SetTimerOn(v bool)`

SetTimerOn sets TimerOn field to given value.

### HasTimerOn

`func (o *IngestPipeline) HasTimerOn() bool`

HasTimerOn returns a boolean if a field has been set.

### GetTimerInterval

`func (o *IngestPipeline) GetTimerInterval() int64`

GetTimerInterval returns the TimerInterval field if non-nil, zero value otherwise.

### GetTimerIntervalOk

`func (o *IngestPipeline) GetTimerIntervalOk() (*int64, bool)`

GetTimerIntervalOk returns a tuple with the TimerInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimerInterval

`func (o *IngestPipeline) SetTimerInterval(v int64)`

SetTimerInterval sets TimerInterval field to given value.

### HasTimerInterval

`func (o *IngestPipeline) HasTimerInterval() bool`

HasTimerInterval returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


