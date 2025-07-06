import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

const mockProperties= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function PropertyCard() {
  return (
    <div className="relative">
      <div
        style={{ borderRadius: "0 40px 0 40px", boxShadow: '0px 0px 20px 0px #272D2F1A' }}
        className="bg-white w-[280px] lg:w-[300px] max-h-[387px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        {/* Image Container */}
        <div className="relative">
          <Image
            src={"/Mask-group(1).png"}
            alt="NA"
            width={313}
            height={200}
            className="w-full h-54 object-cover"
            style={{ borderRadius: "0 40px 0 40px" }}
          />
          <div
            style={{ borderRadius: "5px 0px 0 5px" }}
            className="absolute bottom-0 right-0 bg-[#149E75] text-white px-2 py-1 text-xs font-bold"
          >
            ₹ 60 OFF
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 mb-2">
              <Image
                src={"/Mask group (2).png"}
                alt="NA"
                width={25}
                height={25}
              />
              <p className="font-semibold text-[#272D2F] text-[14px] leading-[14px]">
                Aditi Sharma
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Star className="w-[22px] h-[22px] fill-yellow-400 text-yellow-400" />
              <span className="text-[16px] leading-[16px] font-semibold text-gray-800 ">
                5.0
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mb-2">
            <Image
              src={"/Mask group (3).png"}
              alt="NA"
              width={25}
              height={25}
            />
            <p className="font-semibold text-[#272D2F] text-[14px] leading-[14px]">
              Vijay Nagar, Indore
            </p>
          </div>

          {/* Property Type */}
          <div className="flex items-center gap-1 mb-2">
            <Image
              src={"/Mask group (4).png"}
              alt="NA"
              width={25}
              height={25}
            />
            <p className="font-semibold text-[#272D2F] text-[14px] leading-[14px]">
              Gujarati Dishes
            </p>
          </div>

          {/* Description */}
          <div className="flex items-center gap-1 mb-4">
            <Image
              src={"/Mask group (5).png"}
              alt="NA"
              width={25}
              height={25}
            />
            <p className="font-semibold text-[#272D2F] text-[12px] leading-[12px] w-[200px] whitespace-nowrap text-ellipsis">
              I am a musician turned home chef...
            </p>
          </div>
        </div>
      </div>
      {/* Action Button */}
      <div className="absolute bottom-[-10px] right-[-10px] z-10">
        <button
          style={{ borderRadius: "0 10px 10px 10px" }}
          className="bg-[#BB1D1D] hover:bg-red-700 text-white p-2 transition-colors duration-200"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
          {mockProperties.map((property) => (
            <PropertyCard key={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
