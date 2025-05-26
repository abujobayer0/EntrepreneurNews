import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import NavbarLinks from './NavBarLinks';
import EntrepreneurLogo from '@/assets/images/entrepreneur-logo.png';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex pt-6 px-4 flex-row justify-between items-center w-full bg-white pb-4 border-b border-gray-100">
          <Image
            src={EntrepreneurLogo}
            alt="Entrepreneur Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-50 w-10 h-10 items-center justify-center hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 bg-white">
          <NavbarLinks />
        </div>
      </div>
    </div>
  );
}
