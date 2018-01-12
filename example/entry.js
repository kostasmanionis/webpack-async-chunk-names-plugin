import React from 'react';
import Loadable from 'react-loadable';

const dynamic = opts =>
  Loadable({
    loading: () => <div>Loading...</div>,
    ...opts
  });

const someAsyncChunk1 = dynamic({
  loader: () => import('./someAsyncChunk1.js')
});

const someAsyncChunk2 = dynamic({
  loader: () => import('./someAsyncChunk2.js')
});

console.log('entry');
