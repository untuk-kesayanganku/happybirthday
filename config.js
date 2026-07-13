/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Gembengku",
  photo: "./img/irene.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hai Gembengku",
      subtitle: "Aku beruntung banget bisa milikin kamu... ❤️",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Hari ini adalah hari ulang tahunmu yang ke-18!! ✨",
    },
    {
      type: "chatbox",
      message:
        "Selamat ulang tahun yang ke-18 untuk orang favoritku, alasan di balik senyumanku setiap hari. Terima kasih ya sudah lahir ke dunia dan membawa banyak sekali kebahagiaan di hidupku. I love you so much, now and always. 💖",
      buttonText: "Kirim 💌",
    },
    {
      type: "ideas",
      lines: [
        "Awalnya aku bingung mau ngasih kado apa...",
        "Tapi aku sadar,",
        "Aku mau bikin sesuatu yang <strong>spesial</strong>.",
        "Karena di umur yang ke-18 ini,",
        "Kamu tetap orang paling spesial di hidupku <span>🥰</span>",
      ],
      bigLetters: "18",
    },
    {
      type: "quote",
      text: "Aku mencintaimu bukan hanya karena siapa dirimu, tetapi karena menjadi apa aku ketika aku bersamamu.",
      author: "Untuk Pacarku Tercinta",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy 18th Birthday, Sayang!",
      wishText: "Semoga di usia 18 tahun ini, kamu selalu dilimpahi kebahagiaan, kesehatan, dan semua impianmu terwujud. Tetap sama-sama terus ya kita? ✨",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Makasih ya udah nonton sampai habis. Jangan lupa kabari aku kalau kamu suka! HBD yang ke-18 Gembengku! ❤️",
      replayText: "Klik di sini kalau mau nonton animasinya lagi.",
    },
  ],
};
