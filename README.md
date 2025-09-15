# Nuxt Utilities Layer

This repository is a **Nuxt layer** that provides a collection of utilities, composables, and plugins commonly used across projects.  
By installing this layer, you can keep your Nuxt apps clean and DRY while reusing shared logic.

## 📦 Installation

First install dependencies:

```bash
npm i @internationalized/date @vueuse/integrations @vueuse/nuxt @vueuse/router date-fns-jalali mitt
```

Add this layer to your Nuxt project:

```ts
export default defineNuxtConfig({
    extends: ["github:Byeto-Company/nuxt-utils-layer"],
});
```

## 📂 Structure

This layer contains:

- **Utilities (`utils/`)**

- **Composables (`composables/`)**

- **Plugins (`plugins/`)**

## 🛠️ Utilities

- **`byteFormatter`**  
  Formats file sizes into human-readable units (e.g., `1024 → "1 KB"`).

- **`ensureFileExists`**  
  Ensures a file exists at a given path, creating it with optional content if missing.

- **`formatAgent`**  
  Detects client info (OS, browser, device type, etc).

- **`formatPrice`**  
  Formats numbers into localized Persian prices (e.g., `1000 → "1,000 تومان"`).

- **`isImage`**  
  Checks if a file name has an image extension.

- **`toEnglishNumber`**  
  Converts Persian/Arabic numerals into English digits.

- **`toPersianDateString`**  
  Converts JavaScript `Date` into a formatted Persian date string (with optional time).

## 🧩 Composables

- **`useBaseUrl`**  
  Returns API base URL from `runtimeConfig`.

- **`useHistoryState`**  
  Syncs reactive state with browser history (back/forward navigation).

- **`useObjectTrack`**  
  Tracks changes inside objects reactively.

- **`usePersianTimeAgo`**  
  Returns human-readable Persian "time ago" strings (e.g., `"۵ دقیقه پیش"`).

- **`useTimer`**  
  Provides an interval timer composable (start, stop, reset).

- **`useAppBreakPoints`**  
  Helper for detecting mobile - tablet - laptop - desktop breakpoints easily

## 🔌 Plugins

- **`Event Bus`**  
  A global event bus for cross-component communication.
