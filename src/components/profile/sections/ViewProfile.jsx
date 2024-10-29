import Image from "next/image";

const ProfileView = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src="https://epos.enke.in/modules/shop/img/customer-profile-pic.png"
            objectFit="cover"
            alt="Profile"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-1">Customer Name:</p>
          <p className="font-medium">John Doe</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Customer Phone:</p>
          <p className="font-medium">7034598461</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Customer Alternate Phone:</p>
          <p className="font-medium">-</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Customer Email:</p>
          <p className="font-medium">-</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
