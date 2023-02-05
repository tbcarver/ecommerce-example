import React from 'react';

function MessageBox({ type, message }: any) {
  return (
    message && (
      <div className={`alert alert-${type}`} role="alert">
        <strong>{message}</strong>
      </div>
    )
  )
}

export default MessageBox;