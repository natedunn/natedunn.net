---
layout: ../layouts/Layout.Markdown.astro
title: Documentation
---
<!-- markdownlint-disable MD001 MD025 -->

# Documentation

This is Headroom. It is intentionally minimal, allowing you to delete, rename, or add whatever you like, with ease. The goal of this project is to get up and running quickly with data fetching in an Astro project.

---

### Data Fetching Approaches

#### Option 1: _Per-file fetching_

This option is simply using Astro's recommended way of data-fetching. Fetch the data right at the top of the file using one of the [fetcher methods](#fetcher-methods).

```astro
---
import { fetcher } from '@fetcher';

type Todo = { userId: number; id: number; title: string; completed: boolean };

const todo = await fetcher.rest<Todo>('https://example.com/todos/1');
---

<div>{todo.title}</div>

```

#### Option 2: _Invoker methods_

Invoker methods are tRPC-like functions that pass along type information and help keep the top of files cleaner.

Inside the `lib/invoker` directory you will find an `index.ts` file and a `calls` directory.

The `calls` directory contains files with default-exported objects. You can add whatever functions you'd like there, but in our examples we are simply using `query` and `mutate`:

```ts
import { fetcher } from '@fetcher';

type Todo = { userId: number; id: number; title: string; completed: boolean };

export default {
  async query({ id } : { id: number }) {
    return await fetcher.rest<Todo>(`https://example.com/todos/${id}`);
  },
  async mutate({ id, title } : { id: number, title: string }) {
    return await fetcher.rest<Todo>(`https://example.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title })
    })
  }
};
```

After you have added the methods useful to expose, add those to the list in `index.ts`.

```ts
import todo from './calls/todo';

export const invoker = {
  todo
};

```

Now you can use these functions in a type-safe way in your templates or components.

```astro
---
import { invoker } from '@invoker';

const todo = await invoker.todo.query({id: 1})
---

<div>{todo.title}</div>

```

---

### Fetcher Methods

Inside `lib/fetchers` you will find helper functions for fetching both GraphQL and REST APIs. If you would like to use your own methods or libraries, feel free to delete this directory entirely. If you would like to use either methods simply import `fetcher`:

```ts
// Note: Use the handy @fetcher alias
import { fetcher } from '@fetcher';

// Note: Pass optional types
const restData = await fetcher.rest<RestReturnType>('https://jsonplaceholder.typicode.com/todos/1');
const gqlData = await fetcher.gql<GraphQLReturnType>(GQL_QUERY);
```

To use GraphQL, you must supply a GraphQL endpoint. By default it will use the value set at `PUBLIC_GRAPHQL_ENDPOINT` in the .env file.

---

### Codegen

Many times we need to utilize a type of code generation (or known as codegen) to create accurate Typescript information for our data fetching.

Headroom has GraphQL codegen built in by default. By setting `PUBLIC_GRAPHQL_ENDPOINT` in your .env file and running `npm run codegen`, you should see generated types in the file located at `lib/codegen/_generated`.
