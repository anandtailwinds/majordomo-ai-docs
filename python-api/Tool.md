# Tool

Tool Information. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the tool. | 
**workspace** | **str** | The workspace that contains the model profile. | 
**tool_type** | [**ToolTypes**](ToolTypes.md) |  | 
**access_info** | **Dict[str, object]** | Key value pairs with information required to access the application. The possible values for the different types are given below.  TOOL_TYPE_DOCKER_REGISTRY    registry_name : Name of the registry  TOOL_TYPE_ACR    registry_name : Name of the registry  TOOL_TYPE_ECR    registry_name : Name of the registry  TOOL_TYPE_AWS_S3    access_key : The AWS access key for accessing S3.    secret_token : The AWS secret token for accessing S3.    region :  AWS region.  TOOL_TYPE_AZURE_BLOB    client_id : The Azure client ID.    client_secret : The Azure client secret.    tenant_id : The Azure tenant ID.  TOOL_TYPE_WEBPAGE    None  TOOL_TYPE_PINECONE    cloud : The cloud in which the vector database is running.    region : The region in which the vector database is running.    api_key : API Key for accessing the Pinecone.  TOOL_TYPE_MONGO_VECTORDB    connect_string : The connect string to contact the Mongo Vector database.    database_name : The database name.  TOOL_TYPE_POSTGRES_VECTORDB    connect_string : The connect string to contact the Mongo Vector database.    database_name : The database name.  TOOL_TYPE_SQL    connect_string : The connect string to contact the Mongo Vector database.                     Format: postgres://    database_name : The database name.  TOOL_TYPE_MONGODB    connect_string : The connect string to contact the Mongo Vector database.    database_name : The database name.  TOOL_TYPE_CONFLUENCE    user_name : The user name for accessing the Confluence server.    api_token : API Token for accessing the server.    space_key : The key required to access the Confluence space.  TOOL_TYPE_ELASTIC_SEARCH      connect_string : The connect string to contact the Elastic search.    user_name : The database name.    password : The database name.  TOOL_TYPE_JIRA    connect_string : The connect string to contact the Elastic search.    user_name : The database name.    password : The database name.  | 
**shared_users** | **List[str]** | The list of users this profile is shared with. | [optional] 

## Example

```python
from majordomo_ai.models.tool import Tool

# TODO update the JSON string below
json = "{}"
# create an instance of Tool from a JSON string
tool_instance = Tool.from_json(json)
# print the JSON string representation of the object
print(Tool.to_json())

# convert the object into a dict
tool_dict = tool_instance.to_dict()
# create an instance of Tool from a dict
tool_from_dict = Tool.from_dict(tool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


