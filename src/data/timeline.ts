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
    description: "Artists in early 15th-century Northern Europe started using oil-based pigments as a new way to paint, which was a pretty big deal for art.",
    details: [
      "Unlike egg tempera which dried fast, oil paint took its time drying and you could layer it in thin, see-through coats (glazes).",
      "Let artists get way richer colors and more realistic lighting effects than before.",
      "Made it easier to blend colors smoothly and add fine details, which helped Renaissance painters get crazy realistic.",
      "Michelangelo actually hated it and called it 'an art fit only for women and lunatics' because he preferred fresco."
    ],
    impact: "Made it possible to blend colors better and add more detail, helping Renaissance painters get super realistic depth. By the 16th century it was basically the go-to medium all over Europe.",
    culturalValue: "Changed what people valued in painting - technical skill and realism became really important."
  },
  {
    year: "Mid-15th Century",
    title: "Printing Press Enables Mass Image Reproduction",
    category: "Distribution",
    description: "When Johannes Gutenberg invented mechanical movable-type printing around 1440, it completely changed how art and knowledge got spread around.",
    details: [
      "Before this, images were unique one-offs that only a few people ever got to see.",
      "Woodblock printmaking (around 1400) let you make hundreds of copies from one carved block.",
      "Gutenberg's press made it way faster to print books and images.",
      "Prints gave artists tons of new ideas to work with, which really helped fuel the Renaissance."
    ],
    impact: "Let artistic knowledge and images spread way more than ever before. You could mass-produce artworks and get them out to lots of people.",
    culturalValue: "Made art accessible to regular people. Normal folks could actually afford printed pictures now, which changed who got to experience and own art."
  },
  {
    year: "1839",
    title: "Photography Emerges and Challenges Painting",
    category: "Medium",
    description: "Louis Daguerre and William Talbot came up with the first practical ways to take photos, which freaked out a lot of painters at first.",
    details: [
      "Some people literally said 'This is the end of art'.",
      "Charles Baudelaire wasn't a fan either - he called it an ally of 'the stupidity of the multitude'.",
      "Photography basically took over when it came to realistic portraits and documenting stuff.",
      "This pushed painters to try new things like impressionism, symbolism, and abstract art."
    ],
    quote: {
      text: "If the man who paints only what he sees before him is an artist, then the photographer is the king of artists.",
      author: "James Whistler, 1875"
    },
    impact: "Let painting move away from just trying to copy reality perfectly. Pushed art culture toward modern movements.",
    culturalValue: "People eventually accepted photography as real art. The focus shifted to what human creativity could bring that goes beyond just copying what you see."
  },
  {
    year: "1914",
    title: "Cel Animation Streamlines Cartoon Production",
    category: "Animation",
    description: "Earl Hurd patented the use of transparent celluloid sheets (called 'cels'), which let animators reuse the same backgrounds instead of redrawing everything.",
    details: [
      "Animators didn't have to redraw the whole scene for every single frame anymore.",
      "Made things way more efficient, leading to assembly-line style production (Bray-Hurd Process Company).",
      "This is what let big studios like Disney grow and kicked off the 'Golden Age' of animation.",
      "Also made the visuals better since you could have detailed backgrounds that stayed consistent."
    ],
    impact: "Turned animation into something that could entertain the masses. Cartoons became a huge part of popular culture.",
    culturalValue: "Made it possible to tell stories in a repeatable way that didn't cost too much and could reach lots of people."
  },
  {
    year: "1980s–1990s",
    title: "Digital Tools Revolutionize Image Making",
    category: "Digital",
    description: "Personal computers and programs like MacPaint (1984) and Adobe Photoshop (1990) gave artists a bunch of new tools to work with.",
    details: [
      "You could undo stuff as many times as you wanted, use layers, and apply filters.",
      "Drawing tablets (like Wacom) let you draw naturally with your hand instead of using a mouse.",
      "You could save your work as files and make perfect copies without any quality loss.",
      "Artists who were just starting out could mess around and experiment without spending much money. People started learning from online forums and tutorials instead."
    ],
    impact: "Opened up new creative possibilities like digital collage and 2D animation. Made it super easy to share stuff electronically.",
    culturalValue: "Got people debating about what makes art 'authentic' and whether you need the 'hand of the artist'. By the end of the 20th century, digital art was pretty much accepted in the art world."
  },
  {
    year: "2000s",
    title: "The Internet Democratizes Art Sharing",
    category: "Internet",
    description: "The internet went mainstream, and sites like DeviantArt (2000) let people share their art globally without needing anyone's permission.",
    details: [
      "Artists could find their audience without needing galleries or magazines.",
      "Smaller niche communities helped people collaborate and learn from each other.",
      "Things moved to social media (Instagram, Tumblr) in the 2010s, where algorithms started deciding what got seen.",
      "New types of art showed up like webcomics, GIFs, and memes."
    ],
    impact: "Art could reach way more people than before. Stuff could actually go viral now.",
    culturalValue: "Put more emphasis on community feedback, making art accessible to everyone, and mixing influences from all over the world."
  },
  {
    year: "2020s",
    title: "AI-Generated Art Sparks New Debates",
    category: "AI",
    description: "AI tools (using deep learning) can now make original images just from text descriptions, which has started some pretty heated debates.",
    details: [
      "A Midjourney artwork won a prize in 2022, which caused a lot of controversy.",
      "Lets anyone create images even if they have no art training.",
      "A lot of artists worry it'll replace human artists and make art less valuable.",
      "There's questions about who actually 'made' the art - the programmer, the person typing the prompt, or the machine itself?"
    ],
    impact: "Makes us rethink what originality means, what counts as skill, and who has creative control.",
    culturalValue: "Just continues the pattern we've seen throughout history - technology keeps pushing art into new territory."
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
