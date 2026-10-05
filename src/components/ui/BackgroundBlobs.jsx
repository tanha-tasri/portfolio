import React from 'react';

/**
 * Ambient background component rendering soft floating gradient blobs
 * and a subtle tech grid pattern for modern cyber-aesthetic visual depth.
 */
export const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating Gradient Blob 1 - Top Left Violet */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 md:w-[500px] md:h-[500px] rounded-full bg-brand-violet/15 dark:bg-brand-violet/20 blur-[100px] md:blur-[130px] animate-float"
      />

      {/* Floating Gradient Blob 2 - Center Right Pink */}
      <div 
        className="absolute top-1/3 -right-32 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-brand-pink/15 dark:bg-brand-pink/15 blur-[100px] md:blur-[120px] animate-float-reverse"
        style={{ animationDelay: '2s' }}
      />

      {/* Floating Gradient Blob 3 - Bottom Left Cyan */}
      <div 
        className="absolute -bottom-32 left-1/4 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-brand-cyan/15 dark:bg-brand-cyan/15 blur-[90px] md:blur-[120px] animate-float"
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
};
