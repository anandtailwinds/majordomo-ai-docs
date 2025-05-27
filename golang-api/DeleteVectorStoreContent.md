# DeleteVectorStoreContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Workspace** | **string** | Workspace in which the vector store is present. | 
**DataStoreName** | **string** | Name of the data store that points to the vector store. | 
**DeleteMetadata** | [**[]Metadata**](Metadata.md) | Delete the nodes that match one of the metadata specified in this list.  | 

## Methods

### NewDeleteVectorStoreContent

`func NewDeleteVectorStoreContent(workspace string, dataStoreName string, deleteMetadata []Metadata, ) *DeleteVectorStoreContent`

NewDeleteVectorStoreContent instantiates a new DeleteVectorStoreContent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteVectorStoreContentWithDefaults

`func NewDeleteVectorStoreContentWithDefaults() *DeleteVectorStoreContent`

NewDeleteVectorStoreContentWithDefaults instantiates a new DeleteVectorStoreContent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWorkspace

`func (o *DeleteVectorStoreContent) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *DeleteVectorStoreContent) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *DeleteVectorStoreContent) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetDataStoreName

`func (o *DeleteVectorStoreContent) GetDataStoreName() string`

GetDataStoreName returns the DataStoreName field if non-nil, zero value otherwise.

### GetDataStoreNameOk

`func (o *DeleteVectorStoreContent) GetDataStoreNameOk() (*string, bool)`

GetDataStoreNameOk returns a tuple with the DataStoreName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataStoreName

`func (o *DeleteVectorStoreContent) SetDataStoreName(v string)`

SetDataStoreName sets DataStoreName field to given value.


### GetDeleteMetadata

`func (o *DeleteVectorStoreContent) GetDeleteMetadata() []Metadata`

GetDeleteMetadata returns the DeleteMetadata field if non-nil, zero value otherwise.

### GetDeleteMetadataOk

`func (o *DeleteVectorStoreContent) GetDeleteMetadataOk() (*[]Metadata, bool)`

GetDeleteMetadataOk returns a tuple with the DeleteMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteMetadata

`func (o *DeleteVectorStoreContent) SetDeleteMetadata(v []Metadata)`

SetDeleteMetadata sets DeleteMetadata field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


