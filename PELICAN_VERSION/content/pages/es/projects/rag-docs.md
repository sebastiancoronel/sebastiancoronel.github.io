Title: RAG-Docs
Date: 2026-09-09
Lang: es
Slug: rag-docs-es
Template: project
Save_as: es/projects/rag-docs/index.html
Url: /es/projects/rag-docs/
Summary: Aplicación web de Retrieval-Augmented Generation (RAG) para consultar documentos propios (PDF, TXT o Markdown) con IA, citando la fuente exacta de cada respuesta. Desplegada en Streamlit Community Cloud con límites anti-abuso y aislamiento por sesión.
Github_url: https://github.com/sebastiancoronel/rag-docs
Live_url: https://rag-docs.streamlit.app/
Youtube: i8XakkTRaJc
Technologies: Python · Streamlit · LangChain · ChromaDB · Google Gemini API · OpenAI API · FastAPI · pytest

RAG-Docs es una aplicación web de Retrieval-Augmented Generation construida con Python y Streamlit que permite consultar documentos propios (PDF, TXT, Markdown) mediante IA. Utiliza LangChain y ChromaDB con embeddings de Gemini u OpenAI para responder estrictamente sobre el contenido cargado, citando fuentes exactas y evitando alucinaciones. Incluye aislamiento de datos por sesión con UUID, limpieza automática por TTL de 4 horas, cuotas anti-abuso y tests automatizados con pytest.

## Arquitectura

- Pipeline RAG completo con LangChain: fragmentación semántica (1000 chars / overlap 200), embeddings vía Gemini u OpenAI y retriever top-5 por similitud vectorial.
- Aislamiento total de datos por sesión: cada usuario obtiene una colección ChromaDB única identificada por UUID, sin riesgo de contaminación entre visitantes.
- TTL configurable de 4 horas con limpieza automática de la vectordb en disco y opción de borrado manual instantáneo desde la interfaz.
- Validación de cuotas anti-abuso: máximo 3 archivos, 5 MB por archivo y 50.000 caracteres totales, con detección de PDFs escaneados.
- Suite de 12 tests con pytest que cubren parseo de archivos, gestión de cuotas, índices vectoriales y ciclo de vida TTL, más una API REST opcional vía FastAPI.
