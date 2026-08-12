---
type: "query"
date: "2026-08-12T02:19:36.799268+00:00"
question: "сделай блокировку повторного submit через isSubmitting"
contributor: "graphify"
outcome: "useful"
source_nodes: ["HomePage()", "useForm()"]
---

# Q: сделай блокировку повторного submit через isSubmitting

## Answer

Expanded from original query via graph vocab: form, home, get, product, media. В HomePage добавлены два минимальных уровня защиты: onSubmit не вызывает handleSubmit при form.state.isSubmitting, а кнопка подписана через form.Subscribe и disabled во время запроса. Это закрывает повторный клик и submit с клавиатуры без нового локального состояния. format, lint и typecheck прошли.

## Outcome

- Signal: useful

## Source Nodes

- HomePage()
- useForm()