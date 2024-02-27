# react-fetch-no-cache

> React's `fetch()` without caching

This is a simple wrapper around the `fetch` API for React/Next.js.
The library provide a `fetch` function that prevents caching by React/Next.js.

## How it works

Next.js has two-cache layer for `fetch` API.

- [Building Your Application: Caching | Next.js](https://nextjs.org/docs/app/building-your-application/caching)

### Disable caching for Request Memorization

> To opt out of memoization in fetch requests, you can pass an AbortController signal to the request.
> [Building Your Application: Caching | Next.js](https://nextjs.org/docs/app/building-your-application/caching)

See also <https://github.com/facebook/react/blob/172a7f629a972fedb9e43fbae4fad0e9b1dc7fee/packages/react/src/ReactFetch.js#L54-L67>

### Disable caching for Data Store

> For individual data fetches, you can opt out of caching by setting the cache option to no-store. This means data will be fetched whenever fetch is called.
> https://nextjs.org/docs/app/building-your-application/caching#opting-out-1 

## Installation

```sh
npm install react-fetch-no-cache
```

## Usage

Use `fetch` as you would normally use `fetch` in a React/Next.js application.

```ts
"use server";
import { fetch } from "react-fetch-no-cache";

export const fetchCurrentTime = async () => {
    // fetch time from the server without caching
    const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    const json = await res.json();
    return json.utc_datetime;
}
```

## Tests

```shell
cd example
npm install
npm run dev
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
