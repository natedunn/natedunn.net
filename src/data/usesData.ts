type Use = {
  name: string;
  description: string;
};
type Uses = {
  name: string;
  items: Use[];
};

const workstation = [
  {
    name: '13” MacBook Pro, M1 (2020)',
    description:
      'I upgraded from a 16” MacBook Pro with the Intel chip, and I cannot tell you how nice it is to have as much power, but never have to hear the fan.',
  },
  {
    name: 'Dell U2518D Monitor LCD 25”',
    description:
      "A cheaper, but well-known monitor that I purchased a few years back. It has a decent color range for designing, and it's not too big for my liking.",
  },
  {
    name: 'Custom Mechanical Keyboards',
    description:
      'I should probably make a separate page for this. I have been building custom keyboards for a few years, and I use many of them. It is an expensive hobby, but someone has to do it?',
  },
  {
    name: 'Logitech MX Master 3',
    description: 'A well-worn, daily driver. This is my favorite non-gaming mouse.',
  },
  {
    name: 'Autonomous ErgoChair Pro',
    description: `It's not the most premium chair on the market, but other than the seat, this chair has held up well and is a decent bang for the buck. All that being said, I might upgrade soon.`,
  },
] satisfies Use[];

const devTools = [
  {
    name: 'VS Code',
    description: 'Nearly ubiquitous, and for good reason.',
  },
  {
    name: 'Fig',
    description:
      'Helpful command line tool for autocomplete and other terminal niceties. Used with Oh my ZSH.',
  },
  {
    name: 'Arc',
    description:
      'Interesting take on the browser. Might not be for everyone, but I have been very much enjoying this experiment.',
  },
] satisfies Use[];

const design = [
  {
    name: 'Figma',
    description: 'What more can be said about Figma? Used for nearly everything design-related.',
  },
] satisfies Use[];

const productivity = [
  {
    name: 'Raycast',
    description:
      'I was an avid Alfred user for years. I tried other pretenders before Raycast came into the scene. Once the extensions store filled out with some must-haves, I have never looked back. My favorite productivity tool.',
  },
  {
    name: 'Cleanshot',
    description:
      'Such a helpful tool for screenshots or Loom-like videos. And the newest update has made it even better.',
  },
  {
    name: 'Cron',
    description:
      "I really enjoy this calendar app. It's missing a few features from my previous favorite, Fantastical, but I believe it can get there if Notion lets it.",
  },
  {
    name: 'Texts',
    description:
      "All-in-one messaging app, that isn't just a hacky web wrapper around these services. It works nearly all the time, but it is not cheap at $15/month.",
  },
] satisfies Use[];

export const uses = [
  {
    name: 'Workstation',
    items: workstation,
  },
  {
    name: 'Development Tools',
    items: devTools,
  },
  {
    name: 'Design',
    items: design,
  },
  {
    name: 'Productivity',
    items: productivity,
  },
] satisfies Uses[];
