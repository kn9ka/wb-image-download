---
type: "query"
date: "2026-08-12T02:22:17.190633+00:00"
question: "[getProductMedia.ts](src/pages/home/api/getProductMedia.ts) мне не нравится код в этом файле, что можем исправить?"
contributor: "graphify"
outcome: "useful"
source_nodes: ["getProductMedia()", "getProductMedia.ts", "GetWildberriesPhotoUrl", "CardInfo", "UpstreamsResponse"]
---

# Q: [getProductMedia.ts](src/pages/home/api/getProductMedia.ts) мне не нравится код в этом файле, что можем исправить?

## Answer

Expanded from graph vocab: get, product, media, api, response, schema, url, wildberries, card, image. Линтер и typecheck проходят, но файл смешивает временный mock, HTTP, разбор внешнего JSON и сборку ProductMedia. Приоритетный минимальный рефакторинг: удалить бессмысленный async getMockCardDetail и искать прямо в fixture; проверять оба fetch по response.ok; заменить небезопасные as UpstreamsResponse и as CardInfo на минимальные Zod-схемы уже установленной зависимости; убрать non-null assertions через локальный required URL helper; после чтения cardInfo сделать ранний return при отсутствии видео и только затем обращаться к videonme_route_map. Не разносить это по новым сервисам и репозиториям: достаточно двух приватных helpers в том же файле, fetchJson и сборки фото. Реальный cards/v4/detail оставить отдельным следующим шагом после выбора BFF, потому что README прямо фиксирует CORS и anti-bot ограничение.

## Outcome

- Signal: useful

## Source Nodes

- getProductMedia()
- getProductMedia.ts
- GetWildberriesPhotoUrl
- CardInfo
- UpstreamsResponse