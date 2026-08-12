---
type: "query"
date: "2026-08-12T01:39:35.644752+00:00"
question: "@src/pages/home/ мне не нравится то как используются данные. давай не будем прокидывать их по пропсам, а сделаем контекст провайдер."
contributor: "graphify"
outcome: "useful"
source_nodes: ["HomePage.tsx", "MediaDownloadDialog.tsx", "productMediaContext.tsx"]
---

# Q: @src/pages/home/ мне не нравится то как используются данные. давай не будем прокидывать их по пропсам, а сделаем контекст провайдер.

## Answer

Expanded from original query via graph vocab: [home, page, media, selection, product, download, dialog, props, context, provider]. HomePage prop drilling into MediaDownloadDialog was replaced by a page-local ProductMediaProvider; HomePage invokes loadProductMedia and MediaDownloadDialog consumes state and actions through useProductMedia.

## Outcome

- Signal: useful

## Source Nodes

- HomePage.tsx
- MediaDownloadDialog.tsx
- productMediaContext.tsx