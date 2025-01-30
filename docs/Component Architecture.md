# Component Architecture

The Majordomo AI solution is a SaaS solution that has a cloud component called Director which maintains the information about the enterprise accounts and the AI pipelines within that. There is a separate component called the worker which runs within the customer network or VPC and performs the data related work. This ensures that the customer data never crosses their managed network boundary. 

![Component Architecture](Architecture.png)

Key aspects of the architecture

- All worker to director communication happens via a proxy channel that is secured and authenticated. Every worker is served with a unique id and secret key which is used to validate the worker while joining the channel. 

- All user management and validation happens at the director. IDP integrations with key providers such as Google and Facebook will be provided. 

- There can be a plethora of enterprise data software that will eventually be supported as data source for the RAG pipelines. As long as the data stores remain within the customer network or VPC, no customer data needs to cross the customer network boundary.

- API availability can be provided in any language of customer choice. Currrently we support Python API and Golang API.

## Features

- The SaaS solution at the director end is fully scalable and provides isolation for customer information both at the Keycloak IDP level as well as with the proxy infrastructure.

- The director components are horizontally scalable and can cater to increased work load through K8s auto-scaling. 

- The communication between the director and the worker happens via a proxy channel that is fully authenticated and secure. When the worker is brought up in the customer network, an associated component called the worker proxy is also brought up. This takes care of all the interfacing between the worker and the director.

# Pipeline Architecture
![Pipeline Architecture](Pipelines.png)

The pipeline architecture in Majordomo AI provides an extensible way for implementing newer RAG workflows and integrating that with different kinds of data sources and query operations. The pipeline is integrated with cloud storages to begin with and is architected to interface with any enterprise data source or application in future with minimal changes to the interface. Similarly the query pipeline infrastructure can also be evolved more in the future based on the newed developments in the RAG space including options such as Agentic RAG. The details of how the pipelines and the data store are constructed are available in their respective sections in the documentation. 
