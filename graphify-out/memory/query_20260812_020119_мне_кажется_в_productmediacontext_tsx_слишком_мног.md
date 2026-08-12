---
type: "query"
date: "2026-08-12T02:01:19.836314+00:00"
question: "мне кажется в productMediaContext.tsx слишком много всего, можем как это исправить?"
contributor: "graphify"
outcome: "useful"
source_nodes: ["HomePage()", "MediaDownloadDialog()", "useMediaSelection()"]
---

# Q: мне кажется в productMediaContext.tsx слишком много всего, можем как это исправить?

## Answer

Expanded from original query via graph vocab: product, media, context, provider, selection, download, home, dialog. Context был shallow module: 11 полей обслуживали только HomePage и MediaDownloadDialog. Удалён provider/context; HomePage загружает media, MediaDownloadDialog владеет выбором и скачиванием через интерфейс из articleId, media и onClose.

## Outcome

- Signal: useful

## Source Nodes

- HomePage()
- MediaDownloadDialog()
- useMediaSelection()