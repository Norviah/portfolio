'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }): JSX.Element {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oh no, something went wrong... maybe refresh?</p>
    </div>
  );
}
