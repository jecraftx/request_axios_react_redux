import React from 'react';
import { Navbar } from './ui';


function Base({children}) {
  return (
    <div>
      <main>
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  )
}

export default Base