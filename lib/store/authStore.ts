import { create } from 'zustand';
import { User } from '@/types/user';

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(set => ({
  user: null,
  isAuthenticated: false,
  setUser: (user: User) => set({ user, isAuthenticated: true }),
  clearAuth: () => set({ user: null, isAuthenticated: false }),
}));
