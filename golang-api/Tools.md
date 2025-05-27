# Tools

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ToolsInfo** | Pointer to [**[]ToolInfo**](ToolInfo.md) |  | [optional] 
**SharedTools** | Pointer to [**[]ToolInfo**](ToolInfo.md) |  | [optional] 

## Methods

### NewTools

`func NewTools() *Tools`

NewTools instantiates a new Tools object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewToolsWithDefaults

`func NewToolsWithDefaults() *Tools`

NewToolsWithDefaults instantiates a new Tools object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToolsInfo

`func (o *Tools) GetToolsInfo() []ToolInfo`

GetToolsInfo returns the ToolsInfo field if non-nil, zero value otherwise.

### GetToolsInfoOk

`func (o *Tools) GetToolsInfoOk() (*[]ToolInfo, bool)`

GetToolsInfoOk returns a tuple with the ToolsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolsInfo

`func (o *Tools) SetToolsInfo(v []ToolInfo)`

SetToolsInfo sets ToolsInfo field to given value.

### HasToolsInfo

`func (o *Tools) HasToolsInfo() bool`

HasToolsInfo returns a boolean if a field has been set.

### GetSharedTools

`func (o *Tools) GetSharedTools() []ToolInfo`

GetSharedTools returns the SharedTools field if non-nil, zero value otherwise.

### GetSharedToolsOk

`func (o *Tools) GetSharedToolsOk() (*[]ToolInfo, bool)`

GetSharedToolsOk returns a tuple with the SharedTools field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedTools

`func (o *Tools) SetSharedTools(v []ToolInfo)`

SetSharedTools sets SharedTools field to given value.

### HasSharedTools

`func (o *Tools) HasSharedTools() bool`

HasSharedTools returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


