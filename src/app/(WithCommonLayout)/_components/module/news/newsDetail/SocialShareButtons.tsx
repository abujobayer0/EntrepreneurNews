import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/icons/Icons";
import { Share2 } from "lucide-react";

const SocialShareButtons = () => {
  return (
    <div className="flex flex-row justify-end space-x-2 py-4">
      <button className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
        <FacebookIcon />
      </button>
      <button className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
        <YoutubeIcon />
      </button>
      <button className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
        <TwitterIcon />
      </button>
      <button className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
        <InstagramIcon />
      </button>
      <button className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
        <Share2 size={16} className="text-gray-500 text-xs" />
      </button>
    </div>
  );
};

export default SocialShareButtons;
