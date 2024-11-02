# VectorStoreInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the data store is present. | 
**DataStoreName** | **string** | Name of the data store. | 
**Status** | [**VectorStoreStatusTypes**](VectorStoreStatusTypes.md) |  | 
**Dimension** | Pointer to **int64** | Dimensions in case of a vector database. | [optional] 
**TotalRecords** | Pointer to **int64** | Total number of document chunks in case of a vector database. | [optional] 
**Files** | Pointer to **[]string** | The list of files present in the vector database. | [optional] 

## Methods

### NewVectorStoreInfo

`func NewVectorStoreInfo(workspace string, dataStoreName string, status VectorStoreStatusTypes, ) *VectorStoreInfo`

NewVectorStoreInfo instantiates a new VectorStoreInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectorStoreInfoWithDefaults

`func NewVectorStoreInfoWithDefaults() *VectorStoreInfo`

NewVectorStoreInfoWithDefaults instantiates a new VectorStoreInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *VectorStoreInfo) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *VectorStoreInfo) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *VectorStoreInfo) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetDataStoreName

`func (o *VectorStoreInfo) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *VectorStoreInfo) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *VectorStoreInfo) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetStatus

`func (o *VectorStoreInfo) GetStatus() VectorStoreStatusTypes`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VectorStoreInfo) GetStatusOk() (*VectorStoreStatusTypes, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VectorStoreInfo) SetStatus(v VectorStoreStatusTypes)`

SetStatus sets Status field to given value.


### GetDimension

`func (o *VectorStoreInfo) GetDimension() int64`

GetDimension returns the Dimension field if non-nil, zero value otherwise.

### GetDimensionOk

`func (o *VectorStoreInfo) GetDimensionOk() (*int64, bool)`

GetDimensionOk returns a tuple with the Dimension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimension

`func (o *VectorStoreInfo) SetDimension(v int64)`

SetDimension sets Dimension field to given value.

### HasDimension

`func (o *VectorStoreInfo) HasDimension() bool`

HasDimension returns a boolean if a field has been set.

### GetTotalRecords

`func (o *VectorStoreInfo) GetTotalRecords() int64`

GetTotalRecords returns the TotalRecords field if non-nil, zero value otherwise.

### GetTotalRecordsOk

`func (o *VectorStoreInfo) GetTotalRecordsOk() (*int64, bool)`

GetTotalRecordsOk returns a tuple with the TotalRecords field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRecords

`func (o *VectorStoreInfo) SetTotalRecords(v int64)`

SetTotalRecords sets TotalRecords field to given value.

### HasTotalRecords

`func (o *VectorStoreInfo) HasTotalRecords() bool`

HasTotalRecords returns a boolean if a field has been set.

### GetFiles

`func (o *VectorStoreInfo) GetFiles() []string`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *VectorStoreInfo) GetFilesOk() (*[]string, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *VectorStoreInfo) SetFiles(v []string)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *VectorStoreInfo) HasFiles() bool`

HasFiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


