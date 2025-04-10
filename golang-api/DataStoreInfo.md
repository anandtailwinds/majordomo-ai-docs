# DataStoreInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**DataStore**](DataStore.md) |  | 
**CreatedBy** | **string** | The user who created the data store. | 
**CreatedAt** | **int64** | Timestamp of the data store creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the data store. | 
**LastQuery** | **int64** | Timestamp of last query using the data store. | 
**LastIngest** | **int64** | Timestamp of the last ingestion to the data store. | 
**DirectIngestCount** | **int64** | Number of direct ingestions done to the data store until now. | 
**PipelineIngestCount** | **int64** | Number of pipeline ingestions done to the data store until now. | 
**ErrorIngestCount** | **int64** | Number of ingestions resulting in errors. | 

## Methods

### NewDataStoreInfo

`func NewDataStoreInfo(config DataStore, createdBy string, createdAt int64, lastUpdate int64, lastQuery int64, lastIngest int64, directIngestCount int64, pipelineIngestCount int64, errorIngestCount int64, ) *DataStoreInfo`

NewDataStoreInfo instantiates a new DataStoreInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreInfoWithDefaults

`func NewDataStoreInfoWithDefaults() *DataStoreInfo`

NewDataStoreInfoWithDefaults instantiates a new DataStoreInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *DataStoreInfo) GetConfig() DataStore`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *DataStoreInfo) GetConfigOk() (*DataStore, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *DataStoreInfo) SetConfig(v DataStore)`

SetConfig sets Config field to given value.


### GetCreatedBy

`func (o *DataStoreInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *DataStoreInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *DataStoreInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *DataStoreInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DataStoreInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DataStoreInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *DataStoreInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *DataStoreInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *DataStoreInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.


### GetLastQuery

`func (o *DataStoreInfo) GetLastQuery() int64`

GetLastQuery returns the LastQuery field if non-nil, zero value otherwise.

### GetLastQueryOk

`func (o *DataStoreInfo) GetLastQueryOk() (*int64, bool)`

GetLastQueryOk returns a tuple with the LastQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastQuery

`func (o *DataStoreInfo) SetLastQuery(v int64)`

SetLastQuery sets LastQuery field to given value.


### GetLastIngest

`func (o *DataStoreInfo) GetLastIngest() int64`

GetLastIngest returns the LastIngest field if non-nil, zero value otherwise.

### GetLastIngestOk

`func (o *DataStoreInfo) GetLastIngestOk() (*int64, bool)`

GetLastIngestOk returns a tuple with the LastIngest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastIngest

`func (o *DataStoreInfo) SetLastIngest(v int64)`

SetLastIngest sets LastIngest field to given value.


### GetDirectIngestCount

`func (o *DataStoreInfo) GetDirectIngestCount() int64`

GetDirectIngestCount returns the DirectIngestCount field if non-nil, zero value otherwise.

### GetDirectIngestCountOk

`func (o *DataStoreInfo) GetDirectIngestCountOk() (*int64, bool)`

GetDirectIngestCountOk returns a tuple with the DirectIngestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectIngestCount

`func (o *DataStoreInfo) SetDirectIngestCount(v int64)`

SetDirectIngestCount sets DirectIngestCount field to given value.


### GetPipelineIngestCount

`func (o *DataStoreInfo) GetPipelineIngestCount() int64`

GetPipelineIngestCount returns the PipelineIngestCount field if non-nil, zero value otherwise.

### GetPipelineIngestCountOk

`func (o *DataStoreInfo) GetPipelineIngestCountOk() (*int64, bool)`

GetPipelineIngestCountOk returns a tuple with the PipelineIngestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineIngestCount

`func (o *DataStoreInfo) SetPipelineIngestCount(v int64)`

SetPipelineIngestCount sets PipelineIngestCount field to given value.


### GetErrorIngestCount

`func (o *DataStoreInfo) GetErrorIngestCount() int64`

GetErrorIngestCount returns the ErrorIngestCount field if non-nil, zero value otherwise.

### GetErrorIngestCountOk

`func (o *DataStoreInfo) GetErrorIngestCountOk() (*int64, bool)`

GetErrorIngestCountOk returns a tuple with the ErrorIngestCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorIngestCount

`func (o *DataStoreInfo) SetErrorIngestCount(v int64)`

SetErrorIngestCount sets ErrorIngestCount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


