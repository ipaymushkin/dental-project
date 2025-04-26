import { create } from 'zustand'

export const useFormApp = create((set, get) => ({
  form: {},
  setFormValues: (stepMeta) => {    
    return set({form: {...get().form, ...stepMeta}});
  },
  clearForm: () => set({form: {}}),
  step: 0,
  setStep: (step) => set({ step }),
}))