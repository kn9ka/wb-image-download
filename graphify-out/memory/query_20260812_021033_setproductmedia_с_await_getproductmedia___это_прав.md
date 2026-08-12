---
type: "query"
date: "2026-08-12T02:10:33.965250+00:00"
question: "setProductMedia с await getProductMedia — это правильная работа, мы ничего не сломаем этим await?"
contributor: "graphify"
outcome: "useful"
source_nodes: ["HomePage()", "useForm()", "getProductMedia()"]
---

# Q: setProductMedia с await getProductMedia — это правильная работа, мы ничего не сломаем этим await?

## Answer

Expanded from original query via graph vocab: home, form, get, product, media, loaded. await корректен: сначала полностью выполняется getProductMedia(articleId), затем одним вызовом setProductMedia сохраняются согласованные articleId и media; при reject setter пропускается и срабатывает catch. useForm возвращает Promise обработчика в TanStack Form. Отдельный существующий риск — кнопка не блокируется по isSubmitting, поэтому повторный submit может запустить конкурирующие запросы; это не вызвано await и существовало до рефакторинга.

## Outcome

- Signal: useful

## Source Nodes

- HomePage()
- useForm()
- getProductMedia()