import { create } from "zustand";

type useProModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
