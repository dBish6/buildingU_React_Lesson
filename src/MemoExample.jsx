import { useMemo, useState } from "react";

// const array = ["Hello", "Bye", "Hello Again"];
const notificationsData = {
  news: [
    {
      title: "Woah!",
      message: "Big time deal coming Nov 21!",
    },
    {
      title: "Event",
      message: "Random Event happening today.",
    },
    {
      title: "New product",
      message: "Check out this new product we have!",
    },
  ],
  system: [
    {
      title: "Version 2.2 Released",
      message: "Get version 2.1 now!",
    },
    {
      title: "New Patch 1.69",
      message: "Download the new version.",
    },
    {
      title: "New Patch 1.68",
      message: "Download the new version.",
    },
  ],
  general: [
    {
      title: "Random Message!",
      message: "Hello world I am a message.",
    },
    {
      title: "Someone likes Your Post",
      message: "Tim liked your post.",
    },
    {
      title: "Nice Hat",
      message: "You have a nice hat.",
    },
  ],
};

export default function MemoExample() {
  const [search, setSearch] = useState("");

  const notificationsMemo = useMemo(() => {
    if (!search) return Object.entries(notificationsData);

    return Object.entries(notificationsData).map(([type, arr]) => [
      type,
      arr.filter((notification) =>
        notification.title.toLowerCase().includes(search.toLowerCase().trim())
      ),
    ]);
  }, [search]);

  return (
    <div>
      <input
        placeholder="Search by Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {notificationsMemo.map(([type, arr], i) => (
        <div key={type + i}>
          <h3>{type}</h3>
          {arr.map((notification, i) => (
            <div key={i}>
              <p>
                {notification.title}: {notification.message}
              </p>
            </div>
          ))}
        </div>
      ))}

      {/* {array.map((value, i) => (
        <div key={i}>
          <p>{value}</p>
        </div>
      ))} */}
    </div>
  );
}
