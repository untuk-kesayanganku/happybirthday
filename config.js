const CONFIG = {
  // — Recipient Info —————————————————————————————————————————————————
  name: "Gembengku",
  photo: "./img/irene.jpg",     // Foto pacarmu di folder img
  music: "https://raw.githubusercontent.com/sun-silences/music/master/Backstreet%20Boys%20-%20Shape%20Of%20My%20Heart.mp3",

  // — Theme Colors ——————————————————————————————————————————————————
  colors: {
    primary: "#f472b6",          // Main accent color (rose pink)
    accent: "#60a5fa",           // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",     // Slate 900
      text: "#f1f5f9",           // Slate 100
    },
    light: {
      background: "#fafaf9",     // Stone 50
      text: "#1e293b",           // Slate 800
    },
  },

  // — Default Color Mode ————————————————————————————————————————————
  defaultMode: "dark",

  // — Sections ——————————————————————————————————————————————————————
  sections: [
    {
      type: "greeting",
      title: "Hai Gembengku",
      subtitle: "Cieee ada yang tambah umur nih... 😜",
    },
    {
      type: "countdown",
      from: 3,                  // Hitung mundur
      goText: "🎉",             
    },
    {
      type: "announcement",
      text: "Selamat ulang tahun yaaa kesayanganku! ❤️",
    },
    {
      type: "chatbox",
      message: "Hari ini kamu kelihatan makin gemes dan cantik bangeeet, tau gak? 😍 Honestly, of all the things my eyes have ever seen, you are my absolute favorite. Makasih ya udah selalu nemenin aku, dengerin random thoughts-ku, dan bikin hari-hariku jadi jauh lebih berwarna. Aku bersyukur banget bisa sayang dan pacaran sama kamu!",
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
    }
  ]
};
