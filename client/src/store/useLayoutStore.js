import { create } from 'zustand'

import initialLayout from '../data/initialLayout.json'

const useLayoutStore = create((set) => ({
  layout: initialLayout,

  messages: [],

  loading: false,

  setLayout: (layout) =>
    set({
      layout: structuredClone(layout),
    }),

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        message,
      ],
    })),

  setLoading: (loading) =>
    set({
      loading,
    }),
}))

export default useLayoutStore