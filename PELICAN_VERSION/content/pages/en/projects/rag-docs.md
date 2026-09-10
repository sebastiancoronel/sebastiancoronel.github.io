Title: RAG-Docs
Date: 2026-09-09
Lang: en
Slug: rag-docs-en
Template: project
Save_as: en/projects/rag-docs/index.html
Summary: A Retrieval-Augmented Generation (RAG) web application to query your own documents (PDF, TXT or Markdown) with AI, citing the exact source of every answer. Deployed on Streamlit Community Cloud with abuse-prevention limits and per-session isolation.
Github_url: https://github.com/sebastiancoronel/rag-docs
Live_url: https://rag-docs.streamlit.app/
Youtube: i8XakkTRaJc
Technologies: Python · Streamlit · LangChain · ChromaDB · Google Gemini API · OpenAI API · FastAPI · pytest

RAG-Docs is a full-stack Retrieval-Augmented Generation web application built with Python and Streamlit that lets users query their own documents (PDF, TXT, Markdown) via AI. Using LangChain and ChromaDB with Gemini/OpenAI embeddings, it answers strictly from uploaded content citing exact sources to eliminate hallucinations. It features per-session UUID data isolation with automatic 4-hour TTL cleanup, anti-abuse quotas, and an automated pytest test suite.

## Architecture

- Full RAG pipeline with LangChain: semantic chunking (1000 chars / 200 overlap), embeddings via Gemini or OpenAI, and a top-5 similarity retriever.
- Complete per-session data isolation: each user gets a unique ChromaDB collection identified by UUID, with zero risk of cross-visitor data leakage.
- Configurable 4-hour TTL with automatic on-disk vectordb cleanup and an instant manual deletion button available in the UI.
- Abuse-prevention quota validation: max 3 files, 5 MB per file, 50,000 total characters, with scanned PDF detection.
- Suite of 12 pytest tests covering file parsing, quota management, vector indexes and TTL lifecycle, plus an optional REST API via FastAPI.
