/* eslint-disable react/prop-types */
import initialFriends from './data';

export default function App() {
  return (
    <div className="mx-auto my-0 max-w-sm p-2">
      <FreindsList />
      <AddFreindForm />
      <Button>بستن</Button>
    </div>
  );
}

function FreindsList() {
  return (
    <div className="mb-5">
      <ul>
        {initialFriends.map((friend) => (
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

function Button({ children }) {
  return (
    <button className="self-center rounded-2xl bg-purple-400 px-5 py-1 transition-all hover:bg-purple-500">
      {children}
    </button>
  );
}

function AddFreindForm() {
  return (
    <form className="my-4 flex flex-col gap-1 rounded-md bg-purple-100 p-3">
      <label>👫 اسم دوستت</label>
      <input className="rounded-md border-2 border-solid pr-2" type="text" />

      <label>🖼 آدرس عکس</label>
      <input className="rounded-md border-2 border-solid pr-2" type="text" />
      <Button>اضافه کردن</Button>
    </form>
  );
}
