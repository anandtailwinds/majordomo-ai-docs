## Query Pipelines

A query pipeline is a mechanism for a user to define complex pipelines for executing the LLM query. While a normal query operation on a data store can be performed without creating any query pipeline, we expect the RAG query process to evolve more in future with respect to aspects such as Agentic RAG etc. In those scenarios, this pipeline will be extended to provide an easy option for users to create such complex pipelines and reuse them for queries on a repeated basis.

### Query Type

The query type of the pipeline defines the type of query that is to be performed. Incase the data store on which the query is to be performed is a structured database such as SQL, then the specific type of query needs to reflect that. This will enable the backend code to send the appropriate information to the LLM to generate the database query statements.

### LLM Model

The LLM model to use for the query, this model needs to be allowed by the access control mechanism of the account for this particular user.

### Embedding Model

The embedding model to use for the query, this model needs to be allowed by the access control mechanism of the account for this particular user.
