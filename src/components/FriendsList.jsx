import Button from './Button';

function FreindsList({ friends, onSelectFriend, selectFriend }) {
  return (
    <div className="mb-5">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            onSelectFriend={onSelectFriend}
            selectFriend={selectFriend}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend, onSelectFriend, selectFriend }) {
  const isSelected = selectFriend?.id === friend.id;
  return (
    <li
      className="item-center my-1 flex justify-between rounded-md p-3 hover:bg-purple-100"
      style={
        isSelected
          ? { backgroundColor: '#f3e8ff' }
          : { backgroundColor: '#faf5ff' }
      }
    >
      <div className="flex">
        <img className="rounded-full" src={friend.image} alt="" />
        <div className="pr-2">
          <h3 className="text-xl">{friend.name}</h3>
          {friend.balance > 0 && (
            <p className="text-xs text-green-600">
              {friend.name} {friend.balance} تومن به شما بدهکاره
            </p>
          )}
          {friend.balance < 0 && (
            <p className="text-xs text-red-600">
              تو به {friend.name} {Math.abs(friend.balance)} تومن بدهکاری
            </p>
          )}
          {friend.balance === 0 && <p className="text-xs">هیچکس بدهکار نیست</p>}
        </div>
      </div>
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? 'بستن' : 'انتخاب'}
      </Button>
    </li>
  );
}

export default FreindsList;
