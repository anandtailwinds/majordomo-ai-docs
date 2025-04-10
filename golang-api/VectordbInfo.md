# VectordbInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IndexName** | **string** | Name of the vector database index. | 
**VectordbProvider** | [**AppTypes**](AppTypes.md) |  | 
**AccessInfo** | Pointer to **map[string]interface{}** | Any endpoint that is to be specified to reach the provider. | [optional] 

## Methods

### NewVectordbInfo

`func NewVectordbInfo(indexName string, vectordbProvider AppTypes, ) *VectordbInfo`

NewVectordbInfo instantiates a new VectordbInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectordbInfoWithDefaults

`func NewVectordbInfoWithDefaults() *VectordbInfo`

NewVectordbInfoWithDefaults instantiates a new VectordbInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndexName

`func (o *VectordbInfo) GetIndexName() string`

GetIndexName returns the IndexName field if non-nil, zero value otherwise.

### GetIndexNameOk

`func (o *VectordbInfo) GetIndexNameOk() (*string, bool)`

GetIndexNameOk returns a tuple with the IndexName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndexName

`func (o *VectordbInfo) SetIndexName(v string)`

SetIndexName sets IndexName field to given value.


### GetVectordbProvider

`func (o *VectordbInfo) GetVectordbProvider() AppTypes`

GetVectordbProvider returns the VectordbProvider field if non-nil, zero value otherwise.

### GetVectordbProviderOk

`func (o *VectordbInfo) GetVectordbProviderOk() (*AppTypes, bool)`

GetVectordbProviderOk returns a tuple with the VectordbProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVectordbProvider

`func (o *VectordbInfo) SetVectordbProvider(v AppTypes)`

SetVectordbProvider sets VectordbProvider field to given value.


### GetAccessInfo

`func (o *VectordbInfo) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *VectordbInfo) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *VectordbInfo) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *VectordbInfo) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


