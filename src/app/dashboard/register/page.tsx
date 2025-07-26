'use client';
import { useState } from 'react';
import { supabase } from '../../../../lib/suppabaseClient';
import { useRouter } from 'next/navigation';

export default function RegisterDevicePage() {
  const [deviceName, setDeviceName] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return router.push('/login');

    const { error } = await supabase.from('devices').insert({
      user_id: user.id,
      device_name: deviceName,
      status: 'offline',
      last_seen: new Date().toISOString(),
    });

    if (error) {
      alert('Error registering device: ' + error.message);
    } else {
      alert('Device registered!');
      router.push('/dashboard/page.tsx');
    }
  };

  return (
    <div>
      <h1>📱 Register New Device</h1>
      <input
        type="text"
        placeholder="Device name"
        value={deviceName}
        onChange={(e) => setDeviceName(e.target.value)}
      />
      <button onClick={handleRegister}>Register Device</button>
    </div>
  );
}
