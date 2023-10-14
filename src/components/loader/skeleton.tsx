import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonLoaderProps> = ({ className }) => {
  const classes = `animate-pulse bg-slate-200 ${className || ''}`;

  return <div className={classes}></div>;
};

export default Skeleton;
