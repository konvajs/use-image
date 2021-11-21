declare function useImage(
  url: string,
  crossOrigin?: "anonymous" | "use-credentials",
  headers: Headers,
  cache: "*default" | "no-cache" | "reload" | "force-cache" | "only-if-cached"
): [undefined | HTMLImageElement, "loaded" | "loading" | "failed"];

export default useImage;
