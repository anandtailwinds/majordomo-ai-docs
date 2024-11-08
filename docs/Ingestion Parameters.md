# Ingestion Parameters

There are a number of tweakable parameters in the ingestion pipeline that the user can adjust to get better results with the queries. The below are some of them, for an exhaustive list refer to the version of the API documentation that you are using.

### Chunking Size

Vary the size of the chunks for the documents. The default is 2048. Every chunk overlaps with the next one. The smaller the chunk sizes, the data that is retrieved during a embedding match operation maybe smaller and hence be either more precise or in some cases inadequate, depending on the use-case.

### Chunking Overlap

Chunks overlap and this parameter determines the number of charachters that overlap between two consecutive chunks. Normally this is derived automatically from the chunking size. 

### Doc Metadata

When the document is ingested into the vector database, there is a bunch of default metadata that gets added, which includes the original file name and other labels such as total pages, reference document id etc. The exact parameters depending on the vector database client software. However we provide the ability for user to add custom metadata while ingestion of a document. This specific metadata can then be used in the query pipeline to filter the RAG search results more accurately. 

### Custom File Extractors

For the standard file extensions such as .pdf and .txt, there are inbuilt extractors to conver the information into chunks for ingestion. The full list of supported file extensions is below.

- .csv - comma-separated values
- .docx - Microsoft Word
- .epub - EPUB ebook format
- .hwp - Hangul Word Processor
- .ipynb - Jupyter Notebook
- .jpeg, .jpg - JPEG image
- .mbox - MBOX email archive
- .md - Markdown
- .mp3, .mp4 - audio and video
- .pdf - Portable Document Format
- .png - Portable Network Graphics
- .ppt, .pptm, .pptx - Microsoft PowerPoint

However if the user has a document with a different extension and wants to associate that with a specific extractor, they can specify the custom extension with the extractor name. Currently Llamaparse is supported in addition to the default PDF extractor of PyPDF. Llamaparse also requires a custom API Key that needs to be supplied by the user. 

### Custom Script

This option provides the ability to extend the ingestion pipeline to include any data transformation technique to ingest data into a structured data store. A sample text2csv ingestion script is pre-built. 

### SummarizeDoc

This is a specific option that is useful incase of a scenario where you have a fairly large document and the questions that will be asked of the document require answers that need to take into account the summary of the document. For example, if an English play spans about 50 pages, with traditional chunking, any general question about the play is going to pick up 2 best matching chunks and tries to generate a response based on that. However with the summarize doc option, when the document is ingested the summary of the entire document is ingested into the vector database and since it will only span a few chunks, with a reasonable top_k value we can get answers that are more encompassing the entire document content. 

### LLM Model

This is required when we turn on the SummarizeDoc option to generate a summary of the document.
