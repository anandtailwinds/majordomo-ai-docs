# FileExtractor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExtractorType** | [**FileExtractors**](FileExtractors.md) |  | 
**AccessInfo** | Pointer to **map[string]interface{}** | Parameters required for accessing the file extractor.  &lt;b&gt;LLAMAPARSE&lt;/b&gt;  api_key : The API Key required to access LlamaParse.  | [optional] 

## Methods

### NewFileExtractor

`func NewFileExtractor(extractorType FileExtractors, ) *FileExtractor`

NewFileExtractor instantiates a new FileExtractor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFileExtractorWithDefaults

`func NewFileExtractorWithDefaults() *FileExtractor`

NewFileExtractorWithDefaults instantiates a new FileExtractor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExtractorType

`func (o *FileExtractor) GetExtractorType() FileExtractors`

GetExtractorType returns the ExtractorType field if non-nil, zero value otherwise.

### GetExtractorTypeOk

`func (o *FileExtractor) GetExtractorTypeOk() (*FileExtractors, bool)`

GetExtractorTypeOk returns a tuple with the ExtractorType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtractorType

`func (o *FileExtractor) SetExtractorType(v FileExtractors)`

SetExtractorType sets ExtractorType field to given value.


### GetAccessInfo

`func (o *FileExtractor) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *FileExtractor) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *FileExtractor) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.

### HasAccessInfo

`func (o *FileExtractor) HasAccessInfo() bool`

HasAccessInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


