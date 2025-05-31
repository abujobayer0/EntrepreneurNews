import Image from "next/image";

export const Card = () => {
  return (
    <div className="w-full bg-transparent md:bg-white">
      <div className="flex flex-row py-4 justify-between items-center">
        <span className="text-primary text-xs leading-4">নিজস্ব প্রতিনিধি</span>
        <span className="text-text text-[10px] leading-5 px-3">
          ৫ ঘন্টা আগে
        </span>
      </div>
      <div className="md:w-[366px] md:h-[64px] mb-3">
        <h3 className="font-semibold line-clamp-2 font-inter text-xl leading-8 tracking-normal">
          বিল সই করতে ভারতের রাষ্ট্রপতিকেও তিন মাস সময় বেঁধে দিলেন সুপ্রিম
          কোর্ট
        </h3>
      </div>

      <div className="md:w-[366px] h-[143px] rounded-md overflow-hidden mb-3 relative">
        <Image
          src="https://storyateverycorner.com/wp-content/uploads/2023/12/Taj-Mahal-from-the-gardens-IMG_3426.jpeg"
          alt="News image"
          fill
          className="object-cover"
        />
      </div>

      {/* Description Section */}
      <p className="text-gray-600 font-inter text-base leading-6 tracking-normal">
        গত অক্টোবর–ডিসেম্বর প্রান্তিকের জরিপে উঠে এসেছে, তিন মাসের ব্যবধানে
        স্মার্টফোন ও ইন্টারনেট ব্যবহারকারী পরিবারের সংখ্যা প্রায় আড়াই শতাংশ
        করে বেড়েছে...।
      </p>
    </div>
  );
};
