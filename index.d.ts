declare function useImage(
  url?: string | null,
  crossOrigin?: string
): [undefined | HTMLImageElement, 'loaded' | 'loading' | 'failed'];

export default useImage;
