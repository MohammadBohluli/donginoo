import Button from './Button';
import { useState } from 'react';

function AddFreindForm({ onAddFriend, onDisplayAddForm }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    // handle empty input
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const friend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(friend);
    onDisplayAddForm();

    // Reset inputs
    setName('');
    setImage('https://i.pravatar.cc/48');
  }
  return (
    <form
      className="my-4 flex flex-col gap-1 rounded-md bg-purple-100 p-3"
      onSubmit={handleSubmit}
    >
      <label>👫 اسم دوستت</label>
      <input
        className="rounded-md border-2 border-solid pr-2"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼 آدرس عکس</label>
      <input
        className="rounded-md border-2 border-solid pr-2"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        disabled
      />
      <Button>اضافه کردن</Button>
    </form>
  );
}

export default AddFreindForm;
