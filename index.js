const originalFetch = globalThis.fetch;

const globalAbortControllerForNoCache = new AbortController();

/**
 * React/Next.js fetch does not cache fetch request if `signal` is passed.
 * This is a wrapper around fetch that adds `signal` to the request to avoid caching.
 * See https://nextjs.org/docs/app/building-your-application/caching#opting-out
 * @param request
 * @param init
 * @returns {*}
 */
export function fetch(request, init) {
    return originalFetch(request, init ? {
        // `signal` to avoid memorizing the request
        // https://nextjs.org/docs/app/building-your-application/caching#opting-out
        signal: globalAbortControllerForNoCache.signal,
        // no-store to avoid caching in Data Cache
        // https://nextjs.org/docs/app/building-your-application/caching#data-cache
        cache: 'no-store',
        ...init,
    } : {
        signal: globalAbortControllerForNoCache.signal,
        cache: 'no-store'
    });
}
