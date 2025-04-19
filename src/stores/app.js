import { create } from 'zustand'

export const useFormApp = create((set) => ({
  form: {},
  step: 5,
  setStep: (step) => set({ step }),
}))