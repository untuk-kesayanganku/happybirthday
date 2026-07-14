const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Gembengku 😜",
  photo: "./img/irene.jpg",
  music: "./music/Backstreet Boys - Shape Of My Heart (Lyrics).mp3",

  // ── Theme Colors ──────────────────────────────────────────────
  colors: {
    primary: "#f472b6",
    accent: "#60a5fa",
    dark: {
      background: "#0f172a",
      text: "#f1f5f9",
    },
    light: {
      background: "#fafaf9",
      text: "#1e293b",
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  sections: [
    {
      type: "greeting",
      title: "CIEEE ADA YANG TUA! 😂",
      subtitle: "Hai sayaaaang, eits... mau masuk harus jawab dulu!",
    },
    {
      type: "countdown",
      from: 3,
      goText: "💥 DUAR!",
    },
    {
      type: "announcement",
      text: "Selamat ulang tahun ya Gembengku sayang! ❤️",
    },
    {
      type: "chatbox",
      message:
        "Eits, tahan dulu! ✋ Sebelum kejutan ini terbuka, jawab dulu: Siapa manusia paling ganteng, paling tengil, dan paling sayang sama kamu di dunia ini? (Hint: Jangan bohong ya! 😂)",
      input: true,
      buttonText: "Kirim Jawaban",
    },
    {
      type: "ideas",
      lines: [
        "Woy gembeng! Selamat ulang tahun ya!",
        "Gak sabar pen cepet-cepet ketemu kamu besok,",
        "Pengen cubit pipi kamu yang gembul itu langsung!",
        "Honestly, biarpun kamu kadang nyebelin,",
        "Makasih ya udah selalu nemenin kegajean aku,",
        "Tetap jadi Gembengku yang paling gemesin ya! 🥰",
      ],
      bigLetters: "18",
    },
    {
      type: "quote",
      text: "I love you to the moon and back! Biarpun aku tengil dan nyebelin, tapi hatiku cuma buat kamu, gembengku!",
      author: "Dari pacarmu yang ganteng tapi gesrek 😎",
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
      wishTitle: "Met Ultah, Cikubang! 💖",
      wishText: "Semoga hari-hari kamu penuh tawa, unboxing kado banyak, dan makin sayang sama aku! Tetap gaje dan gemesin terus ya kita!",
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
      text: "Udah selesai baca kegajean ini? Sini balik ke WhatsApp, kasih tau aku berapa kali kamu ketawa liat ginian! 😜",
      replayText: "Atau klik tombol ini kalau masih mau liat lagi.",
    },
  ],
};
