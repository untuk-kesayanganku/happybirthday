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
  photo: "./img/irene.jpg",       // Foto pacarmu di folder img
  music: "./music/hbd.mpeg",      // MENGGUNAKAN JALUR ASLI BIAR DIJAMIN BUNYI!

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
      subtitle: "Cieee ada yang tambah umur nih... 😜",
    },
    {
      type: "countdown",
      from: 3,                    // Hitung mundur
      goText: "🎉",              // Teks setelah hitung mundur selesai
    },
    {
      type: "announcement",
      text: "Selamat ulang tahun yaaa kesayanganku! ❤️",
    },
    {
      type: "chatbox",
      message:
        "Hari ini kamu kelihatan makin gemes dan cantik bangeeet, tau gak? 😍 Honestly, of all the things my eyes have ever seen, you are my absolute favorite. Makasih ya udah selalu nemenin aku, dengerin random thoughts-ku, dan bikin hari-hariku jadi jauh lebih berwarna. Aku bersyukur banget bisa sayang dan pacaran sama kamu!",
      buttonText: "Ketik 'Kirim' yaaa 💌",
    },
    {
      type: "ideas",
      lines: [
        "Di umur kamu yang baru ini...",
        "Aku berdoa semoga kamu selalu sehat,",
        "Makin bahagia, and please never change who you are.",
        "Sebab bagiku, kamu itu udah lebih dari cukup.",
        "Ingat ya, I'll always be here by your side,",
        "Dukung kamu terus dalam segala hal... 🥰",
      ],
      bigLetters: "18",
    },
    {
      type: "quote",
      text: "I love you more than words can say! 💕 Selamat ulang tahun buat orang favoritku, my safe place, and the one who holds my heart.",
      author: "Dari tengilmu yang selalu nyebelin 😘",
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
      wishTitle: "Happy Birthday, My Precious! 💖",
      wishText: "Semoga hari-hari kamu penuh tawa, always happy, and let's make more beautiful memories together. Tetap sama-sama terus ya kita!",
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
      text: "Sudah selesai dibaca semua kan? Sini balik lagi ke WhatsApp terus kasih tahu aku gimana perasaanmu sekarang! 😜",
      replayText: "Atau klik tombol ini kalau kamu masih mau liat lagi.",
    },
  ],
};
