import { useEffect } from 'react'
/**
 * Like useEffect but works with async functions and makes sure that errors will be reported
 */
export function useAsyncEffect(effect: () => Promise<any>, arr?: []) {
  useEffect(() => {
    effect().catch(e => console.error('useAsyncEffect error', e))
  }, arr)
}
