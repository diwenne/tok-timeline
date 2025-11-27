# TOK Timeline Project Plan

## Project Goal
Create an interactive, aesthetically pleasing timeline website for a Theory of Knowledge (TOK) assignment. The timeline explores "Technology’s Impact on 2D Visual Arts (Painting, Illustration & Animation)".

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui
- **Animations**: Framer Motion

## Design Requirements
- **Aesthetics**: Premium, modern, "wow" factor. Vibrant colors, dark mode support (or a specific theme), glassmorphism.
- **Layout**: Spaced out, interactive, not just a text document.
- **Components**: Use shadcn/ui components.
- **References**: Must be present either on the last page or in-text.

## Content Breakdown

### Title
**Timeline: Technology’s Impact on 2D Visual Arts (Painting, Illustration & Animation)**

### Introduction
Over history, new technologies have continually reshaped how artists create and share visual art. The timeline below highlights key developments in 2D art forms and how each innovation changed artistic techniques, distribution of art, and cultural values.

### Timeline Events

1.  **15th Century: Oil Paint Transforms Artistic Technique**
    *   **Introduction of Oil Paint**: Artists in early 15th-century Northern Europe pioneered oil-based pigments. Unlike egg tempera, oil paint dried slowly, allowed translucent glazes, rich colors, and realistic light/shadow.
    *   **Impact**: Enabled finer blending/detail (Renaissance realism). Became dominant medium by 16th century.
    *   **Reaction**: Michelangelo denounced it ("art fit only for women and lunatics").
    *   **Cultural Value**: Influenced value of technical skill and realism.

2.  **Mid-15th Century: Printing Press Enables Mass Image Reproduction**
    *   **Printing & Printmaking**: Gutenberg's movable type (c. 1440) and woodblock printmaking (c. 1400).
    *   **Impact**: Mass production of images (engravings, woodcuts). "Inexhaustible source of motifs". Democratized access to art (devotional images, playing cards).
    *   **Cultural Value**: Changed who could experience and own art.

3.  **1839: Photography Emerges and Challenges Painting**
    *   **Invention of Photography**: Daguerre and Talbot (1839).
    *   **Reaction**: "This is the end of art". Baudelaire called it an ally of "the stupidity of the multitude".
    *   **Impact**: Took over realistic portraiture/documentation. Pushed painting toward Impressionism, Symbolism, Abstraction (subjective vision vs. minute realism).
    *   **Quote**: Whistler (1875): "If the man who paints only what he sees before him is an artist, then the photographer is the king of artists".
    *   **Cultural Value**: Photography accepted as art; painting focused on human creativity beyond copying.

4.  **1914: Cel Animation Streamlines Cartoon Production**
    *   **Technological Innovation**: Earl Hurd patented cel animation (1914). Transparent celluloid sheets over static backgrounds.
    *   **Impact**: Industrial/assembly-line production (Bray-Hurd Process Company). Rise of studios like Disney.
    *   **Cultural Value**: Animation became mass entertainment (Golden Age). Repeatable, cost-effective storytelling.

5.  **1980s–1990s: Digital Tools Revolutionize Image Making**
    *   **Rise of Digital Art Software**: PCs as creative tools. MacPaint (1984), Adobe Photoshop (1990).
    *   **Impact**: Infinite undo, layering, filters. Wacom tablets. Perfect digital reproduction/sharing.
    *   **Reaction**: Debates about authenticity ("is computer-generated art real?").
    *   **Cultural Value**: New genres (digital collage, 2D animation). Democratized creation (cheaper experimentation).

6.  **2000s: The Internet Democratizes Art Sharing**
    *   **Online Art Communities**: DeviantArt (2000).
    *   **Impact**: Global sharing without gatekeepers. Tutorials/knowledge sharing.
    *   **Shift**: Move to social media (Instagram, Tumblr) in 2010s. Algorithm-driven visibility.
    *   **Cultural Value**: Viral art, webcomics, memes. Community feedback, open access.

7.  **2020s: AI-Generated Art Sparks New Debates**
    *   **AI in Art**: Deep learning image generators (Midjourney, etc.).
    *   **Event**: AI artwork won Colorado State Fair prize (2022).
    *   **Debate**: Definition of art, role of human creativity. Fear of replacing artists.
    *   **Cultural Value**: Questions of authorship, originality, skill.

### References (APA Style)
*   Ables, K. (2019, April 19). The rise and fall of internet art communities, from DeviantArt to Tumblr. Artsy.
*   Gershon, L. (2022, September 13). Did photography really kill portrait painting? JSTOR Daily.
*   Hankins, J. (2017). The intimate Michelangelo. The New Criterion.
*   Hertzmann, A. (2022, August 29). How photography became an art form. [Blog post].
*   Jones, S. (2002, October). Painting in oil in the Low Countries and its spread to Southern Europe. Heilbrunn Timeline of Art History.
*   Kuta, S. (2022, September 6). Art made with artificial intelligence wins at state fair. Smithsonian Magazine.
*   Lund, K. (1999, June). Innovative animators. Library of Congress Information Bulletin.
*   McDonald, S. (2022, December 7). The history and future of digital art. Linearity.
*   Thompson, W. (2003, October). The printed image in the West: History and techniques. Heilbrunn Timeline of Art History.

## Implementation Plan

### Step 1: Setup & Configuration
- [x] Initialize Next.js project
- [ ] Initialize shadcn/ui
- [ ] Install dependencies: `framer-motion`, `lucide-react`
- [ ] Configure Tailwind theme (colors, fonts)

### Step 2: Components
- [ ] `TimelineItem`: A component to display a single event with animation.
- [ ] `Timeline`: Container component.
- [ ] `ReferenceList`: Component for the bibliography.
- [ ] `Header`: Title and intro.
- [ ] `Footer`: Credits.

### Step 3: Pages
- [ ] `page.tsx`: Main entry point, assembling the timeline.

### Step 4: Styling & Polish
- [ ] Add smooth scrolling.
- [ ] Add entrance animations (fade-in, slide-up) using Framer Motion.
- [ ] Ensure responsive design (mobile-friendly).
- [ ] Verify "premium" look (gradients, glass effects).

### Step 5: Review
- [ ] Check against criteria:
    - [ ] /10 Total
    - [ ] /2 References (Present?)
    - [ ] /5 Content (Technologies & effects included?)
    - [ ] /3 Structure (Followable?)
