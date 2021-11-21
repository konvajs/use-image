const React = require("react");
const defaultState = { image: undefined, status: "loading" };

module.exports = function useImage(
  url,
  crossOrigin,
  headers = {},
  cache = "*default"
) {
  const res = React.useState(defaultState);
  const image = res[0].image;
  const status = res[0].status;

  const setState = res[1];

  React.useEffect(
    function () {
      if (!url) return;
      const img = document.createElement("img");

      function onload() {
        setState({ image: img, status: "loaded" });
      }

      function onerror() {
        setState({ image: undefined, status: "failed" });
      }

      img.addEventListener("error", onerror);

      let mode = "no-cors";
      if (crossOrigin) {
        mode = "*cors";
      }

      fetch(url, {
        method: "GET",
        mode,
        cache,
        headers,
      })
        .then(function (response) {
          return response.blob();
        })
        .then(function (myBlob) {
          const objectURL = URL.createObjectURL(myBlob);
          img.src = objectURL;
          img.addEventListener("load", onload);
        })
        .catch((err) => {
          console.warn(err);
        });

      return function cleanup() {
        img.removeEventListener("load", onload);
        img.removeEventListener("error", onerror);
        setState(defaultState);
      };
    },
    [url, crossOrigin]
  );

  // return array because it it better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return [image, status];
};
