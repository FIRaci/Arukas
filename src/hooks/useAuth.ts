import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // auth might be a stub if Firebase failed to initialize
      if (!auth || typeof auth.onAuthStateChanged !== 'function') {
        setLoading(false);
        return;
      }
      const unsub = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
      return unsub;
    } catch (err) {
      console.warn('[useAuth] Firebase auth not available:', err);
      setLoading(false);
    }
  }, []);

  return { user, loading };
}
