'use client';

import IdentityComponent from '@/components/identity/about';
import { useState, useEffect } from 'react';
import Loader from '@/components/loader/loader';

function Identity() {
    const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        // Simulate loading all resources
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3500);
    
        return () => clearTimeout(timer);
      }, []);
    
  return (
    <div>
      <Loader isLoading={isLoading} />

      {!isLoading && (
      <IdentityComponent />
        )}
    </div>
  );
}

export default Identity;
