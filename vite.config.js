import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-mp",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9f6f565e-d103-536c-821d-646274329bcb")}catch(e){}}();
//# debugId=9f6f565e-d103-536c-821d-646274329bcb
