/* eslint-disable react/prop-types */
import initialFriends from './data';

export default function App() {
  return (
    <div className="mx-auto my-0 max-w-5xl">
      <FreindsList />
    </div>
  );
}

function FreindsList() {
  return (
    <div>
      <ul className="mx-auto my-0 max-w-sm p-1">
        {initialFriends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li className="item-center my-1 flex justify-between rounded-md bg-purple-100 p-3">
      <div className="flex">
        <img className="rounded-full" src={friend.image} alt="" />
        <div className="pr-2">
          <p className="text-xl">{friend.name}</p>
          <p className="text-xs">شما بدهکار هستید</p>
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
