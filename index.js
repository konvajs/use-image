var React = require('react');

var defaultState = { image: undefined, status: 'loading' };

module.exports = function useImage(url) {
  var res = React.useState(defaultState);
  var image = res[0].image;
  var status = res[0].status;

  var setState = res[1];

  React.useEffect(
    function() {
      if (!url) return;
      const img = document.createElement('img');
      img.addEventListener('load', function() {
        setState({ image: img, status: 'loaded' });
      });
      img.addEventListener('error', function() {
        setState({ image: undefined, status: 'failed' });
      });
      img.src = url;
    },
    [url]
  );

  // return array because it it better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return [image, status];
};
