import Button from './Button';

function BillingForm({ selectFriend }) {
  return (
    <form className="my-4 flex flex-col gap-1 rounded-md bg-purple-100 p-3">
      <h2>دونگی کردن صورت حساب با {selectFriend.name}</h2>
      <label>💰 صورت حساب</label>
      <input className="rounded-md border-2 border-solid pr-2" type="text" />

      <label>🤦🏻‍♂️ هزینه شما</label>
      <input className="rounded-md border-2 border-solid pr-2" type="text" />

      <label>👫 هزینه {selectFriend.name}</label>
      <input
        className="rounded-md border-2 border-solid pr-2"
        type="text"
        disabled
      />

      <label>🤑 کی صورت حساب رو پرداخت کرد ؟</label>
      <select>
        <option value="شما">شما</option>
        <option value={selectFriend.name}>{selectFriend.name}</option>
      </select>

      <Button>دونگیش کن</Button>
    </form>
  );
}

export default BillingForm;
