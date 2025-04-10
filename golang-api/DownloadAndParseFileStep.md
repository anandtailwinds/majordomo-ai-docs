# DownloadAndParseFileStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppType** | Pointer to [**AppTypes**](AppTypes.md) |  | [optional] 
**InputFilter** | **map[string]interface{}** | Input information like file list. | 
**IngestParams** | Pointer to [**IngestParams**](IngestParams.md) |  | [optional] 
**IngestType** | [**IngestTypes**](IngestTypes.md) |  | 
**AccessInfo** | **map[string]interface{}** | Access information. | 

## Methods

### NewDownloadAndParseFileStep

`func NewDownloadAndParseFileStep(inputFilter map[string]interface{}, ingestType IngestTypes, accessInfo map[string]interface{}, ) *DownloadAndParseFileStep`

NewDownloadAndParseFileStep instantiates a new DownloadAndParseFileStep object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDownloadAndParseFileStepWithDefaults

`func NewDownloadAndParseFileStepWithDefaults() *DownloadAndParseFileStep`

NewDownloadAndParseFileStepWithDefaults instantiates a new DownloadAndParseFileStep object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppType

`func (o *DownloadAndParseFileStep) GetAppType() AppTypes`

GetAppType returns the AppType field if non-nil, zero value otherwise.

### GetAppTypeOk

`func (o *DownloadAndParseFileStep) GetAppTypeOk() (*AppTypes, bool)`

GetAppTypeOk returns a tuple with the AppType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppType

`func (o *DownloadAndParseFileStep) SetAppType(v AppTypes)`

SetAppType sets AppType field to given value.

### HasAppType

`func (o *DownloadAndParseFileStep) HasAppType() bool`

HasAppType returns a boolean if a field has been set.

### GetInputFilter

`func (o *DownloadAndParseFileStep) GetInputFilter() map[string]interface{}`

GetInputFilter returns the InputFilter field if non-nil, zero value otherwise.

### GetInputFilterOk

`func (o *DownloadAndParseFileStep) GetInputFilterOk() (*map[string]interface{}, bool)`

GetInputFilterOk returns a tuple with the InputFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFilter

`func (o *DownloadAndParseFileStep) SetInputFilter(v map[string]interface{})`

SetInputFilter sets InputFilter field to given value.


### GetIngestParams

`func (o *DownloadAndParseFileStep) GetIngestParams() IngestParams`

GetIngestParams returns the IngestParams field if non-nil, zero value otherwise.

### GetIngestParamsOk

`func (o *DownloadAndParseFileStep) GetIngestParamsOk() (*IngestParams, bool)`

GetIngestParamsOk returns a tuple with the IngestParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestParams

`func (o *DownloadAndParseFileStep) SetIngestParams(v IngestParams)`

SetIngestParams sets IngestParams field to given value.

### HasIngestParams

`func (o *DownloadAndParseFileStep) HasIngestParams() bool`

HasIngestParams returns a boolean if a field has been set.

### GetIngestType

`func (o *DownloadAndParseFileStep) GetIngestType() IngestTypes`

GetIngestType returns the IngestType field if non-nil, zero value otherwise.

### GetIngestTypeOk

`func (o *DownloadAndParseFileStep) GetIngestTypeOk() (*IngestTypes, bool)`

GetIngestTypeOk returns a tuple with the IngestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestType

`func (o *DownloadAndParseFileStep) SetIngestType(v IngestTypes)`

SetIngestType sets IngestType field to given value.


### GetAccessInfo

`func (o *DownloadAndParseFileStep) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *DownloadAndParseFileStep) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *DownloadAndParseFileStep) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


