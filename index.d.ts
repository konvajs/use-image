declare function useImage(
  url: string,
  crossOrigin?: string
): [undefined | HTMLImageElement, 'loaded' | 'loading' | 'failed'];

export default useImage;
