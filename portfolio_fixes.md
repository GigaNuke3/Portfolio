I want you to redesign my CURRENT portfolio based on the two reference screenshots I provided.

IMPORTANT:

Screenshot 1 = STRUCTURAL / UI REFERENCE.
Screenshot 2 = MY CURRENT WEBSITE.

Do NOT copy the content, branding, colors, or person's portfolio from Screenshot 1.

Instead, use Screenshot 1 as inspiration for:
- clean brutalist layout
- strong typography
- generous whitespace
- thin black borders
- rectangular framed elements
- simple navigation
- editorial portfolio structure
- restrained black/white UI
- clear hierarchy

My own fresco artwork, branding, content, and assets must remain mine.

==================================================
CORE CONCEPT
==================================================

I want my website to feel like a BRUTALIST PORTFOLIO BUILT INSIDE A RENAISSANCE FRESCO.

The most important interaction is NOT a normal hero section.

The user should feel like they are physically traveling backward through a giant fresco.

The experience should be:

CLOSE-UP CLOUD
      ↓
CLOUD 1
      ↓
BIRDS
      ↓
CLOUD 2
      ↓
MORE BIRDS
      ↓
MIST
      ↓
FULL FRESCO
      ↓
PORTFOLIO UI

The scroll wheel controls the camera.

Scrolling DOWN = camera continuously zooms OUT.

Scrolling UP = camera reverses and zooms back IN.

This should feel like one continuous cinematic camera movement, NOT a sequence of unrelated sections.

==================================================
REFERENCE SCREENSHOT 1
==================================================

Use Screenshot 1 ONLY as a visual/layout reference.

I like the following characteristics from it:

- White overall page
- Black typography
- Brutalist rectangular borders
- Thin black rules
- Strong geometric alignment
- Clean navigation
- Large typography
- Plenty of negative space
- Content organized inside a centered max-width
- Simple black/white buttons
- Sharp rectangular framing
- Editorial / portfolio feeling

I do NOT want to copy:
- its person's name
- its content
- its exact layout
- its exact logo
- its exact typography
- its exact components

My portfolio content remains completely different.

==================================================
MY CURRENT WEBSITE — SCREENSHOT 2
==================================================

My current website already contains the Adam + Claude fresco.

However, right now the fresco is exposed too early as one large image.

I want you to transform this experience.

Instead of:

NAVIGATION
↓
GIANT FRESCO

I want:

NAVIGATION
↓
CINEMATIC FRESCO INTRO
↓
ZOOM THROUGH CLOUDS + BIRDS
↓
FULL FRESCO
↓
PORTFOLIO

The fresco should become the destination of the cinematic intro.

==================================================
HEADER
==================================================

The navigation should remain clean and brutalist.

Name:

ECO

or the existing portfolio name already used by my project.

Keep the navigation minimal:

HOME
PROJECTS
EXPERIENCE
ABOUT
SKILLS
SERVICES
CONTACT

Do not make the navigation huge.

Use the style of Screenshot 1 as inspiration:

- white background
- black text
- thin black borders
- sharp rectangular geometry
- strong spacing

The navigation can remain sticky/fixed if that works with the cinematic experience.

BUT:

Do not let the navigation visually interfere with the cinematic fresco.

==================================================
THE CINEMATIC INTRO
==================================================

Create a dedicated full-screen cinematic scene.

This scene should have a large scroll height.

The visible viewport is effectively a camera looking into a giant 3D-like fresco environment.

Use layered 2D images positioned in 3D space.

Think:

perspective camera
+
multiple image planes
+
different Z depths
+
scroll-controlled camera movement.

Do NOT simply use CSS background-image swaps.

Do NOT simply fade one image into another.

The layers must exist simultaneously.

==================================================
LAYER STRUCTURE
==================================================

Build the scene approximately like this:

Camera
  ↓
Cloud Layer 1
  ↓
Bird Group 1
  ↓
Bird 2
  ↓
Cloud Layer 2
  ↓
Bird 2
  ↓
Bird Group 2
  ↓
Mist
  ↓
Fresco
  ↓
Portfolio

Each layer should have a different depth.

This creates the illusion that the user is physically moving backward through the painting.

==================================================
CLOUD 1 — STARTING POSITION
==================================================

The initial viewport should NOT show the full fresco.

The user starts extremely close to Cloud 1.

Cloud 1 should fill almost the entire viewport.

It should feel like the user is inside the fresco.

At this point the user should primarily see:

cloud texture
+
subtle fresco details
+
atmosphere

The initial text should say:

"This Portfolio presents to you..."

This text should feel integrated into the artwork rather than looking like a normal website hero heading.

As the user scrolls down:

the camera pulls backward.

Cloud 1 becomes smaller.

More of its surroundings become visible.

==================================================
BIRD GROUP 1
==================================================

Use:

bird_group_1_for_cloud_1.png

Place it as an independent depth layer.

It should NOT be baked into Cloud 1.

The birds should exist between the camera and Cloud 1.

As the camera zooms out:

- the birds move according to their depth
- their scale changes naturally
- their position shifts slightly
- they create a genuine parallax effect

The birds should feel like they are flying through the fresco.

==================================================
BIRD 2 — TRANSITION
==================================================

Use:

bird_2.png

During the transition from Cloud 1 to Cloud 2:

a single bird should appear from the LEFT side.

The camera should appear to pass by it.

Do not simply fade it in.

Use:

position
+
scale
+
depth
+
parallax

to make the bird feel physical.

The sequence should feel like:

camera zooming backward
       ↓
bird enters from LEFT
       ↓
camera passes bird
       ↓
bird moves farther away
       ↓
Cloud 2 appears

==================================================
CLOUD 2
==================================================

After Cloud 1 has moved sufficiently into the distance:

Cloud 2 becomes visible.

Do not abruptly replace Cloud 1.

Cloud 2 should emerge naturally as the camera continues moving backward.

Cloud 1 and Cloud 2 should temporarily coexist.

This overlap is important because it creates depth.

==================================================
SECOND BIRD
==================================================

Use another instance of:

bird_2.png

Place it around/in Cloud 2.

It should have a different position from the first bird.

It should feel farther away from the camera.

==================================================
BIRD GROUP 2
==================================================

Use:

bird_group_2_for_cloud_2.png

Place this even farther away.

It should belong to Cloud 2.

Again:

Do not flatten the birds into the cloud image.

Keep them as separate layers.

==================================================
MIST
==================================================

Add subtle animated mist between the cloud layers.

The mist should be:

- soft
- slow
- low opacity
- atmospheric
- barely noticeable
- integrated with the fresco

It should create the feeling that the camera is traveling through clouds.

Avoid obvious generic CSS fog.

The mist should move at a different rate from the cloud layers.

==================================================
THE FINAL FRESCO
==================================================

Eventually, as the camera zooms far enough out:

fresco.jpg

should become visible.

This is the Adam + Claude artwork.

The full artwork should NOT suddenly appear.

It should gradually become understandable as a large composition.

The user should have the realization:

"Oh — I was zoomed inside this huge painting."

That is the intended effect.

==================================================
FRESCO FRAME
==================================================

When the full fresco is revealed:

place it inside a brutalist gallery-style frame.

Structure:

BLACK SHADOW
     ↓
BLACK OUTER FRAME
     ↓
WHITE INNER FRAME
     ↓
FRESCO

The frame must be rectangular.

No rounded corners.

The frame should feel like a physical artwork mounted in a gallery.

The shadow must be BLACK.

The frame itself should contain WHITE around the fresco.

==================================================
IMPORTANT TRANSITION
==================================================

Do not make the fresco stop moving when it is finally revealed.

The camera should smoothly transition from:

cinematic zoom-out

into:

normal portfolio scrolling.

The user should be able to continue scrolling naturally.

At this point the actual portfolio sections begin.

==================================================
HEADER REVEAL
==================================================

The header should NOT dominate the first screen of the cinematic sequence.

The cinematic fresco should be the first experience.

Once the Adam + Claude fresco has been substantially revealed:

the portfolio navigation/header becomes more prominent.

This creates a reveal:

Cinematic artwork
      ↓
Fresco
      ↓
Portfolio identity
      ↓
Projects
      ↓
Experience
      ↓
About
      ↓
Skills
      ↓
Services
      ↓
Contact

==================================================
PROFILE IMAGE
==================================================

Use the dedicated profile picture:

public/images/profile.jpg

Do NOT use the Resume asset as the profile picture.

The profile picture should appear later in the actual portfolio content.

==================================================
COLOR SYSTEM
==================================================

Portfolio UI:

BLACK
WHITE

Nothing unnecessarily colorful.

The fresco itself retains its natural Renaissance colors.

Therefore the visual contrast is:

BRUTALIST UI
black + white

versus

FRESCO
warm Renaissance colors

This contrast is intentional.

==================================================
IMPORTANT DIFFERENCE FROM SCREENSHOT 2
==================================================

Current:

NAV
↓
FULL FRESCO IMMEDIATELY

Desired:

NAV
↓
CLOUD CLOSE-UP
↓
ZOOM OUT
↓
BIRDS
↓
CLOUD
↓
BIRDS
↓
MIST
↓
ZOOM OUT
↓
FULL FRESCO
↓
FRAME
↓
PORTFOLIO

Do not leave the current giant fresco immediately visible at the top.

The user must EARN the full fresco reveal through scrolling.

==================================================
TECHNICAL IMPLEMENTATION
==================================================

First inspect the existing project.

Determine:

1. Framework
2. Entry page
3. Existing components
4. Existing CSS architecture
5. Existing animation libraries
6. Existing image paths
7. Current navigation implementation

Do NOT rewrite the entire application.

Modify the existing architecture.

If GSAP / ScrollTrigger is already installed, use it.

If it is not installed, determine whether it is actually necessary before adding it.

The implementation should be maintainable.

Use:

transform
translate
scale
perspective
opacity

where appropriate.

Avoid animating layout properties unnecessarily.

==================================================
RESPONSIVE BEHAVIOR
==================================================

The cinematic sequence must work on:

Desktop
Laptop
Tablet
Mobile

The camera should adapt to viewport dimensions.

Do not simply crop the artwork incorrectly.

The important fresco subjects must remain visible when the final composition is reached.

Prevent horizontal scrolling.

==================================================
FINAL DESIGN PHILOSOPHY
==================================================

The website should feel like:

"An art gallery collided with a brutalist developer portfolio."

Not:

"An ordinary developer portfolio with a background image."

The fresco is the EXPERIENCE.

The brutalist UI is the STRUCTURE.

The birds and clouds create the JOURNEY.

The final Adam + Claude artwork is the REVEAL.

Please inspect the current implementation first, then implement this without destroying existing portfolio sections or functionality.