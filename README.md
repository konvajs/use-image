# useImage React Hook

Custom React Hook for loading images.

## Install

```bash
npm install use-image
```


## Usage

```js
import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

export default function App() {
  const url = 'https://cdn.int64ago.org/ogk39i54.png';
  let { image, status } = useImage(url);

  // image is DOM image element or undefined
  // image will be undefined while its loading or loading is failed

  // status can be "loading", "loaded" or "failed"

  return (
    <Image image={image} />
  );
}

```

## License

MIT
