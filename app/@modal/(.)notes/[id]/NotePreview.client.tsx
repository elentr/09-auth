'use client';
import React, { useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Modal from '@/components/Modal/Modal';
import css from './NotePrev.module.css';
import { fetchNoteById } from '@/lib/api/clientApi';

const formatDate = (date?: string) => {
  return date ? new Date(date).toLocaleString() : 'N/A';
};

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const {
    data: note,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    enabled: !!id,
    refetchOnMount: false,
  });

  const handleCloseModal = useCallback(() => {
    router.back();
  }, [router]);

  if (isFetching) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <Modal onClose={handleCloseModal}>
      <div className={css.container}>
        <h2 className={css.header}>Note Details</h2>
        <p className={css.item}>ID: {note.id}</p>
        <h3 className={css.title}>{note.title}</h3>
        <p className={css.content}>{note.content}</p>
        <p className={css.tag}>Tag: {note.tag}</p>
        <p className={css.date}>Created At: {formatDate(note.createdAt)}</p>
        <button
          type="button"
          className={css.backBtn}
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
