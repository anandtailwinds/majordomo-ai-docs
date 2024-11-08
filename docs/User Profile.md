# User Profiles

## Purpose

The user profile is used only in administrator controlled accounts and provides an opportunity for the administrator to define fine grained access policies to AI assets on a per user basis. 

## Defining a user profile

The information that is required to fully define a user provider will require a subset of the following.

### Workspace and User Name

This combination specifies the filter for which the access policy needs to be applied. The reason why the workspace is required because the same user can be playing multiple roles in the different workspaces that are controlled by the administrator. While in one, the user may require access to writing to a particular vector database, in another, the user may be required to have only read access. 

### Model Profile List and Vectordb Profile List

Specify one or more of model and vectordb profiles that are applicable to the user in the particular workspace. The reason for providing a list of model and vectordb providers is that the user may be simultaneously allowed to utilize models from different providers as well as locally run models. 

Notes:

1. In the user controlled account, every user creates his/her own model and vectordb profiles and enable them in workspaces. So there is no need for a separate user profile.
2. User profile creation and updation is possible to be done only by the administrator. The mechnaism for a user to request access to a particular provider etc. are currently not part of the offering and will be offline. 
