import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { NoteTag } from '@/types/note';

interface NoteStore {
  draft: typeof initialDraft;
  setDraft: (note: Partial<typeof initialDraft>) => void;
  clearDraft: () => void;
}

const initialDraft = {
  title: '',
  content: '',
  tag: 'Todo' as NoteTag,
};

export const useNoteStore = create<NoteStore>()(
  persist(
    set => ({
      draft: initialDraft,
      setDraft: note =>
        set(state => ({
          draft: { ...state.draft, ...note },
        })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: 'note-draft',
    }
  )
);
