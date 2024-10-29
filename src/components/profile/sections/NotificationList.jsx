import React from "react";

const NotificationItem = ({ title, message, time, avatar }) => (
  <div className="flex items-start space-x-4 p-4 hover:bg-gray-50">
    {avatar ? (
      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
        {avatar}
      </div>
    ) : (
      <img
        src="https://bootdey.com/img/Content/avatar/avatar3.png"
        alt="Avatar"
        className="w-10 h-10 rounded-full"
      />
    )}
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-sm text-gray-500 truncate">{message}</p>
    </div>
    <div className="flex-shrink-0">
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
);

const NotificationList = () => {
  const notifications = [
    {
      title: "DAILY RUNDOWN: WEDNESDAY",
      message:
        "Income tax sops on the cards, The bias in VC funding, and other top news for you",
      time: "3d",
    },
    {
      title: "DAILY RUNDOWN: MONDAY",
      message:
        "Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.",
      time: "3d",
      avatar: "DRM",
    },
    {
      title: "DAILY RUNDOWN: SATURDAY",
      message:
        "Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper",
      time: "3d",
    },
  ];

  return (
    <div className="w-full">
      {/* <div className="px-4 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Notification</h2>
      </div> */}

      <div className="divide-y divide-gray-200">
        <div className="px-4 py-3">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Recent
          </h3>
        </div>
        {notifications.slice(0, 1).map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}

        <div className="px-4 py-3">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Earlier
          </h3>
        </div>
        {notifications.slice(1).map((notification, index) => (
          <NotificationItem key={index + 1} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
