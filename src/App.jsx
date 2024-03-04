import { useState } from 'react';
import Button from './components/Button';
import FreindsList from './components/FriendsList';
import AddFreindForm from './components/AddFriendForm';
import BillingForm from './components/BiilingForm';
import initialFriends from './data';

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleSelectFriend(friend) {
    setSelectFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend,
    );

    setDisplayAddForm(false);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleDisplayAddForm() {
    setDisplayAddForm(!displayAddForm);
  }

  function handleSplitBill(newBalanceValue) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + newBalanceValue }
          : friend,
      ),
    );
    setSelectFriend(null);
  }

  return (
    <div className="mx-auto my-0 max-w-sm p-2">
      <FreindsList
        friends={friends}
        onSelectFriend={handleSelectFriend}
        selectFriend={selectFriend}
      />

      {displayAddForm && (
        <AddFreindForm
          onAddFriend={handleAddFriend}
          onDisplayAddForm={handleDisplayAddForm}
        />
      )}

      <Button onClick={handleDisplayAddForm}>
        {displayAddForm ? 'بستن' : 'اضافه کردن دوست'}
      </Button>

      {selectFriend && (
        <BillingForm
          selectFriend={selectFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
