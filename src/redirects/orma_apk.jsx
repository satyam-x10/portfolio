import React, { useEffect } from 'react';

const OrmaApk = () => {
  useEffect(() => {
    // Redirect to the specified Google Drive link
    window.location.href = 'https://drive.google.com/file/d/12ApEI6N2iEF5hjQrwLrJ2NRYrZP42bep/view?usp=drive_link';
  }, []);

  return (
    <div>Redirecting...</div>
  );
}

export default OrmaApk;
