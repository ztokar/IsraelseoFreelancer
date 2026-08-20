/// <reference types="vite/client" />

// Typed build-time env vars. Vite inlines these at build; declaring them here
// keeps `tsc --noEmit` honest instead of failing on every use.
interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
  readonly VITE_BLUEPRINT_STRIPE_URL?: string;
  readonly VITE_TARGET_STRIPE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
