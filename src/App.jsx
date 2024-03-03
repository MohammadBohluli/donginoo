import { useState } from 'react';
import Button from './components/Button';
import initialFriends from './data';

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleDisplayAddForm() {
    setDisplayAddForm(!displayAddForm);
  }

  return (
    <div className="mx-auto my-0 max-w-sm p-2">
      <FreindsList friends={friends} />
      {displayAddForm && (
        <AddFreindForm
          onAddFriend={handleAddFriend}
          onDisplayAddForm={handleDisplayAddForm}
        />
      )}
      <Button onClick={handleDisplayAddForm}>
        {displayAddForm ? 'بستن' : 'اضافه کردن دوست'}
      </Button>
      <BillingForm />
    </div>
  );
}

function FreindsList({ friends }) {
  return (
    <div className="mb-5">
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li className="item-center my-1 flex justify-between rounded-md p-3 hover:bg-purple-100">
      <div className="flex">
        <img className="rounded-full" src={friend.image} alt="" />
        <div className="pr-2">
          <h3 className="text-xl">{friend.name}</h3>
          {friend.balance > 0 && (
            <p className="text-xs text-green-600">
              {friend.name} به تو بدهکاره
            </p>
          )}
          {friend.balance < 0 && (
            <p className="text-xs text-red-600">تو به {friend.name} بدهکاری</p>
          )}
          {friend.balance === 0 && <p className="text-xs">هیچکس بدهکار نیست</p>}
        </div>
      </div>
      <Button>انتخاب</Button>
    </li>
  );
}

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

function BillingForm() {
  return (
    <form className="my-4 flex flex-col gap-1 rounded-md bg-purple-100 p-3">
      <h2>دونگی کردن صورت حساب با فلانی</h2>
      <label>💰 صورت حساب</label>
      <input className="rounded-md border-2 border-solid pr-2" type="text" />

      <label>🤦🏻‍♂️ هزینه شما</label>
      <input className="rounded-md border-2 border-solid pr-2" type="text" />

      <label>👫 هزینه فلانی</label>
      <input
        className="rounded-md border-2 border-solid pr-2"
        type="text"
        disabled
      />

      <label>🤑 کی صورت حساب رو پرداخت کرد ؟</label>
      <select>
        <option value="شما">شما</option>
        <option value="فلانی">فلانی</option>
      </select>

      <Button>دونگیش کن</Button>
    </form>
  );
}
