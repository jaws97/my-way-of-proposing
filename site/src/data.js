// ————————————————————————————————————————————————
// All the words live here. Edit freely — captions,
// subtitles, bloopers, credits. Make them yours.
// ————————————————————————————————————————————————

export const FRAMES = [
  { src: '/pics/7407e96f-475c-4005-b4f6-f051d1c8bfa6.JPG', caption: 'Exhibit A. The prosecution rests.' },
  { src: '/pics/IMG_0622.jpeg', caption: 'Caught mid-snack. Somehow still cinematic.' },
  { src: '/pics/IMG_0644.jpeg', caption: 'The director said “act natural.” She overdelivered.' },
  { src: '/pics/IMG_0650.jpeg', caption: 'Frame of the year, every year.' },
  { src: '/pics/IMG_0672.jpeg', caption: 'Golden hour called. It was jealous.' },
  { src: '/pics/IMG_0925.jpeg', caption: 'Two menaces, zero regrets.' },
  { src: '/pics/IMG_0973.jpeg', caption: 'My favorite view. The scenery is fine too.' },
  { src: '/pics/IMG_1038.jpeg', caption: 'Warning: prolonged viewing affects heart rate.' },
  { src: '/pics/IMG_1042.jpeg', caption: 'Lock-screen material. Obviously already is.' },
  { src: '/pics/IMG_1067.jpeg', caption: 'Effortless. Meanwhile I need three takes to wave.' },
  { src: '/pics/IMG_1081.jpeg', caption: 'The smile that costs me focus at standup.' },
  { src: '/pics/IMG_1326.jpeg', caption: 'Main character. The rest of us are extras.' },
  { src: '/pics/IMG_1388.jpeg', caption: 'I stared at this one for twenty minutes. Worth it.' },
  { src: '/pics/IMG_1411.jpeg', caption: 'Proof that angels have camera rolls.' },
  { src: '/pics/IMG_1427.jpeg', caption: 'Ten out of ten. Would fall in love again.' },
  { src: '/pics/IMG_1451.jpeg', caption: 'My cardiologist has questions.' },
  { src: '/pics/PXL_20241231_071902529.PORTRAIT_Original.jpg', caption: 'Ending the year with the best view in it.' },
  { src: '/pics/PXL_20250222_093958885.MP_Original.jpg', caption: 'Two goofballs, one frame. Balanced composition.' },
]

// The one that gets the spotlight in the finale.
export const US_FRAME = {
  src: '/pics/US.jpg',
  caption: 'Us. The whole plot, in one frame.',
}

export const REELS = [
  { src: '/pics/IMG_1071.MOV', label: 'Reel 01 — live footage of my daily life' },
  { src: '/pics/IMG_1079.MOV', label: 'Reel 02 — her, being herself. My personal minion.' },
]

export const OPENING_LINES = [
  'Every good Pixar movie starts the same way: an ordinary world, and then someone walks in and recolors the whole thing.',
  'You walked in, and honestly, my color grading has never recovered.',
  'What follows is the footage. The critics — me — are calling it “the greatest love story ever shot on a phone.”',
]

export const SUBTITLES = [
  { line: 'Naan unnai kadhalikkiren.', lang: 'Tamil', sub: 'Translation: I love you.' },
  { line: 'Nenu ninnu premisthunnanu.', lang: 'Telugu', sub: 'Translation: I love you. (I’ve been practicing.)' },
  { line: 'Enna?!', lang: 'Tamil', sub: 'Translation: what I say when you’re being ridiculous.' },
  { line: 'Enti?!', lang: 'Telugu', sub: 'Translation: what you say when I’m being ridiculous. Used daily.' },
  { line: 'Biryani.', lang: 'Both', sub: 'Translation: biryani. Some words are already perfect.' },
]

export const BLOOPERS = [
  'She laughs a full second before my punchlines. Scientists are baffled. I am delighted.',
  'Steals my food and calls it “quality testing.” I’ve promoted her to QA lead.',
  'Fluent in three languages, yet chooses to communicate primarily in eyebrow raises.',
  'Once got mad at me in Telugu. I understood nothing. I apologized immediately. Correct call.',
  'Has “nothing to wear.” Also has: a full cupboard, a weekly shopping habit, and new clothes still living in their shopping bags because we ran out of space.',
  'Claims she doesn’t like cheesy things. Is currently reading a website I built about her.',
  'Puts up with a boyfriend who expresses feelings via deployed applications.',
]

// Every answer is a right answer — she taps one, your comeback appears.
export const QUIZ = [
  {
    q: 'Movie night. Who picks the film?',
    options: [
      { label: 'Me, obviously', response: 'And I’ll watch it happily. This is called growth.' },
      { label: 'Him', response: 'Incorrect. Sweet of you to pretend, though.' },
      { label: 'Whoever sulks better', response: 'So… you. Undefeated champion.' },
    ],
  },
  {
    q: 'The last piece of chicken. What happens?',
    options: [
      { label: 'We split it fairly', response: 'Adorable. Fictional, but adorable.' },
      { label: 'It’s mine', response: 'Historically accurate.' },
      { label: 'Distract him, steal it', response: 'You’ve done this. I saw. I said nothing. Love is patience.' },
    ],
  },
  {
    q: 'Who fell first?',
    options: [
      { label: 'Me', response: 'Incorrect, but cute. You’re adorable when you rewrite history.' },
      { label: 'Him', response: 'Instantly. Embarrassingly. Zero regrets.' },
      { label: 'It was mutual', response: 'The diplomatic answer. The correct one is still “him”.' },
    ],
  },
  {
    q: 'Getting ready to go out. Who takes longer?',
    options: [
      { label: 'Me, and it’s worth it', response: 'Objection withdrawn. It is absolutely worth it.' },
      { label: 'Him', response: 'One of us has a cupboard crisis every week. It isn’t me.' },
      { label: 'Define “longer”', response: 'Spoken like someone with clothes still in their shopping bags.' },
    ],
  },
  {
    q: 'His phone gallery is mostly…',
    options: [
      { label: 'Photos of me', response: 'Correct. It’s a museum, and you’re the entire collection.' },
      { label: 'Photos of food', response: 'Only the food you were about to steal.' },
      { label: 'Screenshots', response: 'Of your texts. For evidence. And for rereading.' },
    ],
  },
  {
    q: 'Who wins an argument?',
    options: [
      { label: 'Me', response: 'Undefeated. I’m not even mad — it’s genuinely impressive.' },
      { label: 'Him', response: 'Statistically impossible, but sweet of you.' },
      { label: 'Nobody, we get distracted', response: 'True. Usually by food. Or by you being cute mid-argument.' },
    ],
  },
  {
    q: 'Who is the funny one?',
    options: [
      { label: 'Me', response: 'Bold. The scriptwriter of this film disagrees, but bold.' },
      { label: 'Him', response: 'Correct. Finally. Official, written confirmation.' },
      { label: 'His jokes are silly', response: 'Silly jokes with a 100% laugh success rate. Check the stats.' },
    ],
  },
  {
    q: 'Who says sorry first after a fight?',
    options: [
      { label: 'Me', response: 'In which universe? Sweet though.' },
      { label: 'Him', response: 'Correct. Even when I was right. Especially when I was right.' },
      { label: 'What fight?', response: 'Good answer. Very wise. Slightly scary.' },
    ],
  },
  {
    q: 'Best hugger?',
    options: [
      { label: 'Me', response: 'Confirmed. Scientifically tested. Daily.' },
      { label: 'Him', response: 'I trained specifically for you.' },
      { label: 'It’s a tie', response: 'Unacceptable. Rematch tonight.' },
    ],
  },
  {
    q: 'Who remembers every date and detail?',
    options: [
      { label: 'Me', response: 'Correct. You remember what I wore three Tuesdays ago. Terrifying. Impressive.' },
      { label: 'Him', response: 'I remember one thing: you. Everything else lives in Google Calendar.' },
      { label: 'Neither of us', response: 'False. You once quoted me from 2024. Word for word.' },
    ],
  },
]

export const FINALE_LINES = [
  'Okay. Jokes over. One take, no script.',
  'Vasavi — you are the best thing I never planned.',
  'Two languages, two states, one absurdly lucky guy.',
  'Whatever you do, I fall in love with it. The cute faces. The hugs that make me feel like the most special person alive.',
  'Even your angry face. Especially your angry face.',
  'No one will ever love me the way you do. I know it. I don’t take a second of it for granted.',
  'Spoiler alert: I’m keeping you. Forever — and then the sequel.',
]

export const CREDITS = [
  ['STARRING', 'Vasavi — as herself, flawless'],
  ['WRITTEN & DIRECTED BY', 'Lijas — hopelessly biased'],
  ['CINEMATOGRAPHY', 'mostly my phone, occasionally my heart'],
  ['ORIGINAL SCORE', 'her laugh'],
  ['PRODUCED BY', 'every moment since we met'],
]
