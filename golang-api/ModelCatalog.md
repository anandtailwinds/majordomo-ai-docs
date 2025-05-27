# ModelCatalog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ModelInfoList** | Pointer to [**[]ModelInfo**](ModelInfo.md) |  | [optional] 
**SharedModelList** | Pointer to [**[]ModelInfo**](ModelInfo.md) |  | [optional] 

## Methods

### NewModelCatalog

`func NewModelCatalog() *ModelCatalog`

NewModelCatalog instantiates a new ModelCatalog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelCatalogWithDefaults

`func NewModelCatalogWithDefaults() *ModelCatalog`

NewModelCatalogWithDefaults instantiates a new ModelCatalog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModelInfoList

`func (o *ModelCatalog) GetModelInfoList() []ModelInfo`

GetModelInfoList returns the ModelInfoList field if non-nil, zero value otherwise.

### GetModelInfoListOk

`func (o *ModelCatalog) GetModelInfoListOk() (*[]ModelInfo, bool)`

GetModelInfoListOk returns a tuple with the ModelInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelInfoList

`func (o *ModelCatalog) SetModelInfoList(v []ModelInfo)`

SetModelInfoList sets ModelInfoList field to given value.

### HasModelInfoList

`func (o *ModelCatalog) HasModelInfoList() bool`

HasModelInfoList returns a boolean if a field has been set.

### GetSharedModelList

`func (o *ModelCatalog) GetSharedModelList() []ModelInfo`

GetSharedModelList returns the SharedModelList field if non-nil, zero value otherwise.

### GetSharedModelListOk

`func (o *ModelCatalog) GetSharedModelListOk() (*[]ModelInfo, bool)`

GetSharedModelListOk returns a tuple with the SharedModelList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedModelList

`func (o *ModelCatalog) SetSharedModelList(v []ModelInfo)`

SetSharedModelList sets SharedModelList field to given value.

### HasSharedModelList

`func (o *ModelCatalog) HasSharedModelList() bool`

HasSharedModelList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


