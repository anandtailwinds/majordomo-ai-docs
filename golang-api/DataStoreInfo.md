# DataStoreInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspce in which the data store is present. | 
**Name** | **string** | Name of the data store. | 
**UserName** | **string** | The user who created the data store. | 
**Type** | [**DataStoreTypes**](DataStoreTypes.md) |  | 
**VectordbProfile** | Pointer to **string** | Name of the Vector DB profile. | [optional] 
**VectordbEmbedding** | Pointer to **string** | The embedding model to be used while ingesting data (applies for vector DB only) | [optional] 
**StructdbUrl** | Pointer to **string** | The endpoint of the structure database such as SQL/MongoDB. | [optional] 
**StructdbName** | Pointer to **string** | The name of the database in the structured database. | [optional] 
**StructdbTable** | Pointer to **string** | The name of the table in the structured database. | [optional] 
**Status** | Pointer to **string** | If the status is active, it indicates that the vector database is present in the provider. | [optional] 
**VectordbDimension** | Pointer to **int64** | Dimensions in case of a vector database. | [optional] 
**VectordbRecords** | Pointer to **int64** | Total number of document chunks in case of a vector database. | [optional] 
**CreatedAt** | **int64** | Timestamp of the data store creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the data store. | 
**LastQuery** | Pointer to **int64** | Timestamp of last query using the data store. | [optional] 
**LastIngest** | Pointer to **int64** | Timestamp of the last ingestion to the data store. | [optional] 
**DirectIngestCount** | Pointer to **int64** | Number of direct ingestions done to the data store until now. | [optional] 
**PipelineIngestCount** | Pointer to **int64** | Number of pipeline ingestions done to the data store until now. | [optional] 
**ErrorIngestCount** | Pointer to **int64** | Number of ingestions resulting in errors. | [optional] 

## Methods

### NewDataStoreInfo

`func NewDataStoreInfo(workspace string, name string, userName string, type_ DataStoreTypes, createdAt int64, lastUpdate int64, ) *DataStoreInfo`

NewDataStoreInfo instantiates a new DataStoreInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataStoreInfoWithDefaults

`func NewDataStoreInfoWithDefaults() *DataStoreInfo`

NewDataStoreInfoWithDefaults instantiates a new DataStoreInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *DataStoreInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *DataStoreInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *DataStoreInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetName

`func (o *DataStoreInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DataStoreInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DataStoreInfo) SetName(v string)`

SetName sets Name field to given value.


### GetUserName

`func (o *DataStoreInfo) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *DataStoreInfo) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *DataStoreInfo) SetUserName(v string)`

SetUserName sets UserName field to given value.


### GetType

`func (o *DataStoreInfo) GetType() DataStoreTypes`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DataStoreInfo) GetTypeOk() (*DataStoreTypes, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DataStoreInfo) SetType(v DataStoreTypes)`

SetType sets Type field to given value.


### GetVectordbProfile

`func (o *DataStoreInfo) GetVectordbProfile() string`

GetVectordbProfile returns the VectordbProfile field if non-nil, zero value otherwise.

### GetVectordbProfileOk

`func (o *DataStoreInfo) GetVectordbProfileOk() (*string, bool)`

GetVectordbProfileOk returns a tuple with the VectordbProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProfile

`func (o *DataStoreInfo) SetVectordbProfile(v string)`

SetVectordbProfile sets VectordbProfile field to given value.

### HasVectordbProfile

`func (o *DataStoreInfo) HasVectordbProfile() bool`

HasVectordbProfile returns a boolean if a field has been set.

### GetVectordbEmbedding

`func (o *DataStoreInfo) GetVectordbEmbedding() string`

GetVectordbEmbedding returns the VectordbEmbedding field if non-nil, zero value otherwise.

### GetVectordbEmbeddingOk

`func (o *DataStoreInfo) GetVectordbEmbeddingOk() (*string, bool)`

GetVectordbEmbeddingOk returns a tuple with the VectordbEmbedding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbEmbedding

`func (o *DataStoreInfo) SetVectordbEmbedding(v string)`

SetVectordbEmbedding sets VectordbEmbedding field to given value.

### HasVectordbEmbedding

`func (o *DataStoreInfo) HasVectordbEmbedding() bool`

HasVectordbEmbedding returns a boolean if a field has been set.

### GetStructdbUrl

`func (o *DataStoreInfo) GetStructdbUrl() string`

GetStructdbUrl returns the StructdbUrl field if non-nil, zero value otherwise.

### GetStructdbUrlOk

`func (o *DataStoreInfo) GetStructdbUrlOk() (*string, bool)`

GetStructdbUrlOk returns a tuple with the StructdbUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbUrl

`func (o *DataStoreInfo) SetStructdbUrl(v string)`

SetStructdbUrl sets StructdbUrl field to given value.

### HasStructdbUrl

`func (o *DataStoreInfo) HasStructdbUrl() bool`

HasStructdbUrl returns a boolean if a field has been set.

### GetStructdbName

`func (o *DataStoreInfo) GetStructdbName() string`

GetStructdbName returns the StructdbName field if non-nil, zero value otherwise.

### GetStructdbNameOk

`func (o *DataStoreInfo) GetStructdbNameOk() (*string, bool)`

GetStructdbNameOk returns a tuple with the StructdbName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbName

`func (o *DataStoreInfo) SetStructdbName(v string)`

SetStructdbName sets StructdbName field to given value.

### HasStructdbName

`func (o *DataStoreInfo) HasStructdbName() bool`

HasStructdbName returns a boolean if a field has been set.

### GetStructdbTable

`func (o *DataStoreInfo) GetStructdbTable() string`

GetStructdbTable returns the StructdbTable field if non-nil, zero value otherwise.

### GetStructdbTableOk

`func (o *DataStoreInfo) GetStructdbTableOk() (*string, bool)`

GetStructdbTableOk returns a tuple with the StructdbTable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStructdbTable

`func (o *DataStoreInfo) SetStructdbTable(v string)`

SetStructdbTable sets StructdbTable field to given value.

### HasStructdbTable

`func (o *DataStoreInfo) HasStructdbTable() bool`

HasStructdbTable returns a boolean if a field has been set.

### GetStatus

`func (o *DataStoreInfo) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DataStoreInfo) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DataStoreInfo) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DataStoreInfo) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetVectordbDimension

`func (o *DataStoreInfo) GetVectordbDimension() int64`

GetVectordbDimension returns the VectordbDimension field if non-nil, zero value otherwise.

### GetVectordbDimensionOk

`func (o *DataStoreInfo) GetVectordbDimensionOk() (*int64, bool)`

GetVectordbDimensionOk returns a tuple with the VectordbDimension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbDimension

`func (o *DataStoreInfo) SetVectordbDimension(v int64)`

SetVectordbDimension sets VectordbDimension field to given value.

### HasVectordbDimension

`func (o *DataStoreInfo) HasVectordbDimension() bool`

HasVectordbDimension returns a boolean if a field has been set.

### GetVectordbRecords

`func (o *DataStoreInfo) GetVectordbRecords() int64`

GetVectordbRecords returns the VectordbRecords field if non-nil, zero value otherwise.

### GetVectordbRecordsOk

`func (o *DataStoreInfo) GetVectordbRecordsOk() (*int64, bool)`

GetVectordbRecordsOk returns a tuple with the VectordbRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbRecords

`func (o *DataStoreInfo) SetVectordbRecords(v int64)`

SetVectordbRecords sets VectordbRecords field to given value.

### HasVectordbRecords

`func (o *DataStoreInfo) HasVectordbRecords() bool`

HasVectordbRecords returns a boolean if a field has been set.

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

### HasLastQuery

`func (o *DataStoreInfo) HasLastQuery() bool`

HasLastQuery returns a boolean if a field has been set.

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

### HasLastIngest

`func (o *DataStoreInfo) HasLastIngest() bool`

HasLastIngest returns a boolean if a field has been set.

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

### HasDirectIngestCount

`func (o *DataStoreInfo) HasDirectIngestCount() bool`

HasDirectIngestCount returns a boolean if a field has been set.

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

### HasPipelineIngestCount

`func (o *DataStoreInfo) HasPipelineIngestCount() bool`

HasPipelineIngestCount returns a boolean if a field has been set.

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

### HasErrorIngestCount

`func (o *DataStoreInfo) HasErrorIngestCount() bool`

HasErrorIngestCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


