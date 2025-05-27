# Tool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the tool. | 
**Workspace** | **string** | The workspace that contains the model profile. | 
**ToolType** | [**ToolTypes**](ToolTypes.md) |  | 
**AccessInfo** | **map[string]interface{}** | Key value pairs with information required to access the application. The possible values for the different types are given below.  TOOL_TYPE_DOCKER_REGISTRY    registry_name : Name of the registry  TOOL_TYPE_ACR    registry_name : Name of the registry  TOOL_TYPE_ECR    registry_name : Name of the registry  TOOL_TYPE_AWS_S3    access_key : The AWS access key for accessing S3.    secret_token : The AWS secret token for accessing S3.    region :  AWS region.  TOOL_TYPE_AZURE_BLOB    client_id : The Azure client ID.    client_secret : The Azure client secret.    tenant_id : The Azure tenant ID.  TOOL_TYPE_WEBPAGE    None  TOOL_TYPE_PINECONE    cloud : The cloud in which the vector database is running.    region : The region in which the vector database is running.    api_key : API Key for accessing the Pinecone.  TOOL_TYPE_MONGO_VECTORDB    connect_string : The connect string to contact the Mongo Vector database.    database_name : The database name.  TOOL_TYPE_POSTGRES_VECTORDB    connect_string : The connect string to contact the Mongo Vector database.    database_name : The database name.  TOOL_TYPE_SQL    connect_string : The connect string to contact the Mongo Vector database.                     Format: postgres://    database_name : The database name.  TOOL_TYPE_MONGODB    connect_string : The connect string to contact the Mongo Vector database.    database_name : The database name.  TOOL_TYPE_CONFLUENCE    user_name : The user name for accessing the Confluence server.    api_token : API Token for accessing the server.    space_key : The key required to access the Confluence space.  TOOL_TYPE_ELASTIC_SEARCH      connect_string : The connect string to contact the Elastic search.    user_name : The database name.    password : The database name.  TOOL_TYPE_JIRA    connect_string : The connect string to contact the Elastic search.    user_name : The database name.    password : The database name.  | 
**SharedUsers** | Pointer to **[]string** | The list of users this profile is shared with. | [optional] 

## Methods

### NewTool

`func NewTool(name string, workspace string, toolType ToolTypes, accessInfo map[string]interface{}, ) *Tool`

NewTool instantiates a new Tool object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewToolWithDefaults

`func NewToolWithDefaults() *Tool`

NewToolWithDefaults instantiates a new Tool object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Tool) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Tool) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Tool) SetName(v string)`

SetName sets Name field to given value.


### GetWorkspace

`func (o *Tool) GetWorkspace() string`

GetWorkspace returns the Workspace field if non-nil, zero value otherwise.

### GetWorkspaceOk

`func (o *Tool) GetWorkspaceOk() (*string, bool)`

GetWorkspaceOk returns a tuple with the Workspace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspace

`func (o *Tool) SetWorkspace(v string)`

SetWorkspace sets Workspace field to given value.


### GetToolType

`func (o *Tool) GetToolType() ToolTypes`

GetToolType returns the ToolType field if non-nil, zero value otherwise.

### GetToolTypeOk

`func (o *Tool) GetToolTypeOk() (*ToolTypes, bool)`

GetToolTypeOk returns a tuple with the ToolType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToolType

`func (o *Tool) SetToolType(v ToolTypes)`

SetToolType sets ToolType field to given value.


### GetAccessInfo

`func (o *Tool) GetAccessInfo() map[string]interface{}`

GetAccessInfo returns the AccessInfo field if non-nil, zero value otherwise.

### GetAccessInfoOk

`func (o *Tool) GetAccessInfoOk() (*map[string]interface{}, bool)`

GetAccessInfoOk returns a tuple with the AccessInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessInfo

`func (o *Tool) SetAccessInfo(v map[string]interface{})`

SetAccessInfo sets AccessInfo field to given value.


### GetSharedUsers

`func (o *Tool) GetSharedUsers() []string`

GetSharedUsers returns the SharedUsers field if non-nil, zero value otherwise.

### GetSharedUsersOk

`func (o *Tool) GetSharedUsersOk() (*[]string, bool)`

GetSharedUsersOk returns a tuple with the SharedUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedUsers

`func (o *Tool) SetSharedUsers(v []string)`

SetSharedUsers sets SharedUsers field to given value.

### HasSharedUsers

`func (o *Tool) HasSharedUsers() bool`

HasSharedUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


