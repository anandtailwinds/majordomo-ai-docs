# ToolInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**Tool**](Tool.md) |  | 
**SupportedOperations** | Pointer to [**[]SupportedOperations**](SupportedOperations.md) | Tool operations supported. | [optional] 
**CreatedBy** | **string** | The username who created this tool. | 
**CreatedAt** | **int64** | Timestamp of the model profile creation. | 
**LastUpdate** | **int64** | Timestamp of the last update to the model profile. | 

## Methods

### NewToolInfo

`func NewToolInfo(config Tool, createdBy string, createdAt int64, lastUpdate int64, ) *ToolInfo`

NewToolInfo instantiates a new ToolInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewToolInfoWithDefaults

`func NewToolInfoWithDefaults() *ToolInfo`

NewToolInfoWithDefaults instantiates a new ToolInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *ToolInfo) GetConfig() Tool`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *ToolInfo) GetConfigOk() (*Tool, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *ToolInfo) SetConfig(v Tool)`

SetConfig sets Config field to given value.


### GetSupportedOperations

`func (o *ToolInfo) GetSupportedOperations() []SupportedOperations`

GetSupportedOperations returns the SupportedOperations field if non-nil, zero value otherwise.

### GetSupportedOperationsOk

`func (o *ToolInfo) GetSupportedOperationsOk() (*[]SupportedOperations, bool)`

GetSupportedOperationsOk returns a tuple with the SupportedOperations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedOperations

`func (o *ToolInfo) SetSupportedOperations(v []SupportedOperations)`

SetSupportedOperations sets SupportedOperations field to given value.

### HasSupportedOperations

`func (o *ToolInfo) HasSupportedOperations() bool`

HasSupportedOperations returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ToolInfo) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ToolInfo) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ToolInfo) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.


### GetCreatedAt

`func (o *ToolInfo) GetCreatedAt() int64`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ToolInfo) GetCreatedAtOk() (*int64, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ToolInfo) SetCreatedAt(v int64)`

SetCreatedAt sets CreatedAt field to given value.


### GetLastUpdate

`func (o *ToolInfo) GetLastUpdate() int64`

GetLastUpdate returns the LastUpdate field if non-nil, zero value otherwise.

### GetLastUpdateOk

`func (o *ToolInfo) GetLastUpdateOk() (*int64, bool)`

GetLastUpdateOk returns a tuple with the LastUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdate

`func (o *ToolInfo) SetLastUpdate(v int64)`

SetLastUpdate sets LastUpdate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


