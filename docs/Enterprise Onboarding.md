# Onboarding

## Introduction

This section covers details on how a new enterprise is onboarded into Majordomo AI and how individual users can get onboarded. Every enterprise account onboarded with have its own 8 digit account ID that will be auto allocated by Majordomo AI.

## Account types

When a particular enterprise which can be a company or a department or a group is onboarded on to Majordomo AI, it will of either of two types.

1. Administrator Controlled Account
2. User Controlled Account

Every Majordomo AI account will have a set of AI assets and access policies for using them. These set of access policies are called profiles. There are different types of profiles that are applicable to different kinds of AI assets. Namely,

[Model Profiles](Model Profile.md)
[Vectordb Profiles](Vectordb Profile.md)
[Monitor Profiles](Vectordb Profile.md)

The policies that control the access on a per-user level are created through 

[User Profiles](User Profile.md)

In an administrator controlled account, individual users will not be able to create any profiles. They are created by the administrator and their lifecycle if fully managed by them. User can only use the profiles assigned to them to access AI assets. This model is suitable for production environments where the control to the AI assets is restricted.

In a user controlled account, individual users can create profiles with access information to various AI assets. The administrator of the account can also create the profiles but he will be able to use them only for his own account. This is suitable for a more development oriented setup where the information is freely accessible to individual users, for example with local running of models etc. 

## User Onboarding

The users within the Majordomo AI account are securely managed using an internal IAM infrastructure that can be adapted to either work with the identity providers that the customer currently already uses within their organization or with standard third party identity providers such as Google or Facebook. Incase of customer owned identity providers, it is also possible in future to support SSO access to the Majordomo AI account website. 

### Third party Identity Provider

The signup when using third party providers can be initiated by the user who can make a request for creation of an user account in the Majordomo AI account. This request needs to be processed by the administrator of the account and approved for the user to be able to login to the account.

### Existing Identity Provider

The administrator of an account can add an user to an account, which will result in the user receiving an email to accept the addition. After acceptance the user will become part of the account.

## API Key Generation

Majordomo AI supports the concept of using API keys for performing the various AI operations. Every user is allocated an API key at the time of onboarding. The user can change the API key at any point of time, in case it is compromised. It is the responsibility of the user to retain the API key in a safe location. The API key will identify the user for any AI operation and also account any corresponding costs against the user. So the user needs to ensure that the key is not misused. Incase the user does not plan on using the API key for any operation, there will be a way to temporarily disable the API key in which case no operation can be performed against it.

## First Steps

As soon as the enterprise account is onboarded, there are a couple of mandatory steps to be performed to start using the RAG pipelines. 

- Creation of a workspace. A workspace is a logical partition that can be used for segregating the various RAG pipelines and users can be provided permissions to access certain resources in specific workspaces.

- Creating a worker and bringing up the worker in the customer network. Every workspace needs to be mandatorily assigned to a worker that is running in the customer network. Once the authenticated worker is brought up, the workspace is now ready to be used for RAG.
