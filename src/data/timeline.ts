export interface TimelineEvent {
  year: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  quote?: {
    text: string;
    author: string;
  };
  impact: string;
  culturalValue: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "15th Century",
    title: "Oil Paint Transforms Artistic Technique",
    category: "Technique",
    description: "Artists in early 15th-century Northern Europe pioneered oil-based pigments as a new painting medium, marking a turning point in art.",
    details: [
      "Unlike quick-drying egg tempera, oil paint dried slowly and could be applied in translucent layers (glazes).",
      "Allowed rich colors and realistic light/shadow effects previously unattainable.",
      "Enabled finer blending and detail, helping Renaissance painters achieve unprecedented realism.",
      "Michelangelo denounced it as 'an art fit only for women and lunatics', preferring fresco."
    ],
    impact: "Enabled finer blending and detail, helping Renaissance painters achieve unprecedented realism and depth. Became the dominant medium across Europe by the 16th century.",
    culturalValue: "Influenced the cultural value of technical skill and realism in painting."
  },
  {
    year: "Mid-15th Century",
    title: "Printing Press Enables Mass Image Reproduction",
    category: "Distribution",
    description: "The invention of mechanical movable-type printing by Johannes Gutenberg (c. 1440) revolutionized how art and knowledge were disseminated.",
    details: [
      "Prior to this, images were one-of-a-kind treasures seen by few.",
      "Woodblock printmaking (c. 1400) allowed hundreds of identical images from a single block.",
      "Gutenberg’s press enabled rapid printing of books and prints.",
      "Prints became an 'inexhaustible source of motifs' for artists, fueling the Renaissance."
    ],
    impact: "Allowed artistic knowledge and imagery to be shared on an unprecedented scale. Artworks could be mass-produced and widely distributed.",
    culturalValue: "Democratized access to art. Everyday people could afford printed pictures, changing who could experience and own art."
  },
  {
    year: "1839",
    title: "Photography Emerges and Challenges Painting",
    category: "Medium",
    description: "Louis Daguerre and William Talbot introduced the first practical photographic processes, initially alarming painters.",
    details: [
      "Some proclaimed 'This is the end of art'.",
      "Charles Baudelaire called it an ally of 'the stupidity of the multitude'.",
      "Took over the role of realistic portraiture and documentation.",
      "Painters turned toward impressionism, symbolism, and abstraction."
    ],
    quote: {
      text: "If the man who paints only what he sees before him is an artist, then the photographer is the king of artists.",
      author: "James Whistler, 1875"
    },
    impact: "Freed painting from the duty of pure realism. Pushed the culture of painting toward modern art movements.",
    culturalValue: "Photography eventually accepted as an art form. Shifted focus to what human creativity could add beyond mere copying."
  },
  {
    year: "1914",
    title: "Cel Animation Streamlines Cartoon Production",
    category: "Animation",
    description: "Earl Hurd patented the use of transparent celluloid sheets ('cels'), allowing animators to reuse background art.",
    details: [
      "Animators no longer had to redraw the entire scene for each frame.",
      "Drastically increased efficiency, leading to assembly-line production (Bray-Hurd Process Company).",
      "Enabled the rise of major studios like Disney and the 'Golden Age' of animation.",
      "Improved visual quality with detailed, consistent backgrounds."
    ],
    impact: "Turned animation into a mass entertainment medium. Cartoons became a staple of popular culture.",
    culturalValue: "Made storytelling repeatable, cost-effective, and widely shareable."
  },
  {
    year: "1980s–1990s",
    title: "Digital Tools Revolutionize Image Making",
    category: "Digital",
    description: "Personal computers and software like MacPaint (1984) and Adobe Photoshop (1990) gave artists new capabilities.",
    details: [
      "Allowed infinite 'undo' actions, layering, and filters.",
      "Drawing tablets (Wacom) allowed natural hand-drawn input.",
      "Artwork could be saved as files and reproduced perfectly without degradation.",
      "Aspiring artists could experiment cheaply; learning shifted to online forums/tutorials."
    ],
    impact: "Expanded creative vocabulary (digital collage, 2D animation). Enabled easy electronic sharing.",
    culturalValue: "Introduced debates about authenticity ('hand of the artist'). Firmly integrated into the art world by the end of the 20th century."
  },
  {
    year: "2000s",
    title: "The Internet Democratizes Art Sharing",
    category: "Internet",
    description: "The web became mainstream, and platforms like DeviantArt (2000) allowed global sharing without gatekeepers.",
    details: [
      "Artists could find audiences without galleries or print media.",
      "Niche forums fostered collaboration and learning.",
      "Shifted to social media (Instagram, Tumblr) in the 2010s, introducing algorithm-driven visibility.",
      "New forms like webcomics, GIFs, and memes emerged."
    ],
    impact: "Massive expansion of art's reach. Viral success became possible.",
    culturalValue: "Emphasized community feedback, open access, and blending of global influences."
  },
  {
    year: "2020s",
    title: "AI-Generated Art Sparks New Debates",
    category: "AI",
    description: "AI-driven tools (deep learning image generators) can create original images from text, sparking intense debate.",
    details: [
      "Midjourney artwork won a prize in 2022, causing controversy.",
      "Democratizes image creation for those without training.",
      "Fear of replacing human artists and devaluing art.",
      "Questions about authorship (programmer, user, or machine?)."
    ],
    impact: "Forces re-examination of originality, skill, and artistic agency.",
    culturalValue: "Continuing the historical pattern of technology driving art into new territories."
  }
];

export const references = [
  "Ables, K. (2019, April 19). The rise and fall of internet art communities, from DeviantArt to Tumblr. Artsy. Retrieved from https://www.artsy.net/article/artsy-editorial-rise-fall-internet-art-communities",
  "Gershon, L. (2022, September 13). Did photography really kill portrait painting? JSTOR Daily. Retrieved from https://daily.jstor.org/did-photography-really-kill-portrait-painting/",
  "Hankins, J. (2017). The intimate Michelangelo. The New Criterion. (Reprinted at Catholic Education Resource Center). Retrieved from https://catholiceducation.org/en/culture/art/the-intimate-michelangelo.html",
  "Hertzmann, A. (2022, August 29). How photography became an art form. [Blog post]. Retrieved from https://aaronhertzmann.com/2022/08/29/photography-history.html",
  "Jones, S. (2002, October). Painting in oil in the Low Countries and its spread to Southern Europe. In Heilbrunn Timeline of Art History. New York: The Metropolitan Museum of Art. Retrieved from https://www.metmuseum.org/toah/hd/optg/hd_optg.htm",
  "Kuta, S. (2022, September 6). Art made with artificial intelligence wins at state fair. Smithsonian Magazine. Retrieved from https://www.smithsonianmag.com/smart-news/artificial-intelligence-art-wins-colorado-state-fair-180980703/",
  "Lund, K. (1999, June). Innovative animators. Library of Congress Information Bulletin, 58(6). Retrieved from https://www.loc.gov/loc/lcib/9906/animate.html",
  "McDonald, S. (2022, December 7). The history and future of digital art. Linearity. Retrieved from https://www.linearity.io/blog/digital-art/",
  "Thompson, W. (2003, October). The printed image in the West: History and techniques. In Heilbrunn Timeline of Art History. New York: The Metropolitan Museum of Art. Retrieved from https://www.metmuseum.org/toah/hd/prnt/hd_prnt.htm"
];
