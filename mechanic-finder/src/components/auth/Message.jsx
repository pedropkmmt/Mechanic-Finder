import React from 'react';

const Message = ({ type, message }) => {
  if (!message) return null;
  
  const isError = type === 'error';
  return (
    <div className={`${isError ? 'bg-destructive/10 border-destructive/20 text-destructive' : 'bg-green-50 border-green-200 text-green-700'} border px-3 py-3 rounded-lg text-sm mb-4`}>
      {message}
    </div>
  );
};

export default Message;