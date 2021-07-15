declare function useImage(
  url: string,
  crossOrigin?: 'anonymous' | 'use-credentials'
): [undefined | HTMLImageElement, 'loaded' | 'loading' | 'failed'];

export default useImage;
