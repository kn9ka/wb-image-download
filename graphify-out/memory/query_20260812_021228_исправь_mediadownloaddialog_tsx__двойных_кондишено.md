---
type: "query"
date: "2026-08-12T02:12:28.269732+00:00"
question: "Исправь MediaDownloadDialog.tsx: двойных кондишенов быть не должно"
contributor: "graphify"
outcome: "useful"
source_nodes: ["MediaDownloadDialog()", "downloadMedia()"]
---

# Q: Исправь MediaDownloadDialog.tsx: двойных кондишенов быть не должно

## Answer

Expanded from original query via graph vocab: [dialog, download, media, photo, video, product]. В downloadSelectedMedia добавлен ранний выход при count === 0; успешное уведомление теперь использует только один ненулевой тернарник по ProductMediaType.

## Outcome

- Signal: useful

## Source Nodes

- MediaDownloadDialog()
- downloadMedia()