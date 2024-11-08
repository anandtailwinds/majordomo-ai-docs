# VectordbAccessInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectString** | Pointer to **string** | Connection string used to connect to the database, this can include password in case of some providers. | [optional] 
**Database** | Pointer to **string** | Name of the database to which the profile connects. | [optional] 
**Collection** | Pointer to **string** | The specific collection within the database where data will be stored. | [optional] 
**Cloud** | Pointer to **string** | Indicates the cloud provider, e.g., AWS, Azure. | [optional] 
**Region** | Pointer to **string** | Specifies the cloud region (e.g., us-west-2) where the database or collection is hosted. | [optional] 

## Methods

### NewVectordbAccessInfo

`func NewVectordbAccessInfo() *VectordbAccessInfo`

NewVectordbAccessInfo instantiates a new VectordbAccessInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVectordbAccessInfoWithDefaults

`func NewVectordbAccessInfoWithDefaults() *VectordbAccessInfo`

NewVectordbAccessInfoWithDefaults instantiates a new VectordbAccessInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectString

`func (o *VectordbAccessInfo) GetConnectString() string`

GetConnectString returns the ConnectString field if non-nil, zero value otherwise.

### GetConnectStringOk

`func (o *VectordbAccessInfo) GetConnectStringOk() (*string, bool)`

GetConnectStringOk returns a tuple with the ConnectString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectString

`func (o *VectordbAccessInfo) SetConnectString(v string)`

SetConnectString sets ConnectString field to given value.

### HasConnectString

`func (o *VectordbAccessInfo) HasConnectString() bool`

HasConnectString returns a boolean if a field has been set.

### GetDatabase

`func (o *VectordbAccessInfo) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *VectordbAccessInfo) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *VectordbAccessInfo) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *VectordbAccessInfo) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetCollection

`func (o *VectordbAccessInfo) GetCollection() string`

GetCollection returns the Collection field if non-nil, zero value otherwise.

### GetCollectionOk

`func (o *VectordbAccessInfo) GetCollectionOk() (*string, bool)`

GetCollectionOk returns a tuple with the Collection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollection

`func (o *VectordbAccessInfo) SetCollection(v string)`

SetCollection sets Collection field to given value.

### HasCollection

`func (o *VectordbAccessInfo) HasCollection() bool`

HasCollection returns a boolean if a field has been set.

### GetCloud

`func (o *VectordbAccessInfo) GetCloud() string`

GetCloud returns the Cloud field if non-nil, zero value otherwise.

### GetCloudOk

`func (o *VectordbAccessInfo) GetCloudOk() (*string, bool)`

GetCloudOk returns a tuple with the Cloud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloud

`func (o *VectordbAccessInfo) SetCloud(v string)`

SetCloud sets Cloud field to given value.

### HasCloud

`func (o *VectordbAccessInfo) HasCloud() bool`

HasCloud returns a boolean if a field has been set.

### GetRegion

`func (o *VectordbAccessInfo) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *VectordbAccessInfo) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *VectordbAccessInfo) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *VectordbAccessInfo) HasRegion() bool`

HasRegion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


