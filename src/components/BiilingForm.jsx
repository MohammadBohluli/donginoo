import { useState } from 'react';
import Button from './Button';

function BillingForm({ selectFriend, onSplitBill }) {
  const [billValue, setBillValue] = useState('');
  const [userExpence, setUserExpence] = useState('');
  const [whoPayingBill, setWhoPayingBill] = useState('user');

  const paidBill = billValue ? billValue - userExpence : '';

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !userExpence) return;

    onSplitBill(whoPayingBill === 'user' ? paidBill : -userExpence);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 flex flex-col gap-1 rounded-md bg-purple-100 p-3"
    >
      <h2>دونگی کردن صورت حساب با {selectFriend.name}</h2>
      <label>💰 صورت حساب</label>
      <input
        className="rounded-md border-2 border-solid pr-2"
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />

      <label>🤦🏻‍♂️ هزینه شما</label>
      <input
        className="rounded-md border-2 border-solid pr-2"
        type="text"
        value={userExpence}
        onChange={(e) =>
          setUserExpence(
            Number(e.target.value) > billValue
              ? billValue
              : Number(e.target.value),
          )
        }
      />

      <label>👫 هزینه {selectFriend.name}</label>
      <input
        className="rounded-md border-2 border-solid pr-2"
        type="text"
        disabled
        value={paidBill}
      />

      <label>🤑 کی صورت حساب رو پرداخت کرد ؟</label>
      <select
        value={whoPayingBill}
        onChange={(e) => setWhoPayingBill(e.target.value)}
      >
        <option value="user">شما</option>
        <option value="friend">{selectFriend.name}</option>
      </select>

      <Button>دونگیش کن</Button>
    </form>
  );
}

export default BillingForm;
