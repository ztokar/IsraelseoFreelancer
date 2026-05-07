import React from 'react';
import { PROFILE_IMAGE } from '../constants';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-11 w-11 rounded-lg text-sm',
  md: 'h-14 w-14 rounded-xl text-lg',
  lg: 'h-20 w-20 rounded-2xl text-3xl',
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ size = 'md' }) => {
  const classes = sizeClasses[size];

  if (PROFILE_IMAGE) {
    return (
      <img
        src={PROFILE_IMAGE}
        alt="Zechariah Tokar"
        className={`${classes} object-cover`}
      />
    );
  }

  return (
    <div className={`flex ${classes} items-center justify-center bg-slate-950 font-semibold text-white`}>
      ZT
    </div>
  );
};
