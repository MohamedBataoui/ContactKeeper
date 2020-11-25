import React from 'react';

export default function Alert({ error }) {
  return (
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  );
}
