// Libraries
import { useState } from 'react';

export const Note = (): JSX.Element => {
  const [note, setNote] = useState('');

  return (
    <div>
      <input onChange={event => setNote(event.target.value)} value={note} />
    </div>
  )
};
