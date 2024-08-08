import { atom } from 'recoil'

export const SqlState = atom({
  key: 'sql',
  default: {
    sqlUnits: []
  }
})
