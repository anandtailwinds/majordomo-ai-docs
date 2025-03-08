# ConfluenceInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageIds** | **[]string** | Page_id content to be ingested. | 
**BaseUrl** | **string** | Name of the base URL incase of Confluence. | 
**Attachments** | **bool** | If this option is set to True, it will retrieve the documents present in the confluence attachments. | 

## Methods

### NewConfluenceInput

`func NewConfluenceInput(pageIds []string, baseUrl string, attachments bool, ) *ConfluenceInput`

NewConfluenceInput instantiates a new ConfluenceInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfluenceInputWithDefaults

`func NewConfluenceInputWithDefaults() *ConfluenceInput`

NewConfluenceInputWithDefaults instantiates a new ConfluenceInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPageIds

`func (o *ConfluenceInput) GetPageIds() []string`

GetPageIds returns the PageIds field if non-nil, zero value otherwise.

### GetPageIdsOk

`func (o *ConfluenceInput) GetPageIdsOk() (*[]string, bool)`

GetPageIdsOk returns a tuple with the PageIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIds

`func (o *ConfluenceInput) SetPageIds(v []string)`

SetPageIds sets PageIds field to given value.


### GetBaseUrl

`func (o *ConfluenceInput) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *ConfluenceInput) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *ConfluenceInput) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.


### GetAttachments

`func (o *ConfluenceInput) GetAttachments() bool`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *ConfluenceInput) GetAttachmentsOk() (*bool, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *ConfluenceInput) SetAttachments(v bool)`

SetAttachments sets Attachments field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


