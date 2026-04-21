# AI Safety Guide - Secure Our World

An interactive AI safety and cyber hygiene app for the public, with a stronger Africa-facing audience focus, multilingual support, trainer resources, and bring-your-own-provider chat.

Creator: Anthony Onoja  
School of Health Sciences, University of Surrey, United Kingdom  

## What changed

- Added UI support for Kiswahili, Hausa, Yoruba, and Igbo alongside the existing language set.
- Reworked `Ask AI` into a bring-your-own-key panel for `Anthropic`, `OpenAI`, and `Gemini`.
- Added official links that show users how to get their provider API keys.
- Added an Africa-focused `Community Safety Lab` with workshop-friendly scenarios such as WhatsApp voice-note scams, job scams, and public-health misinformation.
- Added creator/support details directly into the app UI.

## Product review

Before this update, the app was clear and visually polished, but it was still quite generic:

- language support was only partial
- the assistant was locked to Anthropic
- the experience did not yet feel tailored to African communities
- the app taught principles well, but it did not yet stand out through local context or provider flexibility

This revision pushes it toward a more distinctive position: public AI safety education for multilingual community outreach, digital health communication, and workshop use.

## Current landscape scan

This redesign was informed by current public resources and official docs:

- CISA `Secure Our World` remains a strong baseline for public cyber hygiene, especially passwords, MFA, updates, and phishing.
- Google `Be Internet Awesome` shows that interactive, scenario-based safety learning works well, especially when it feels playful and classroom-ready.
- Common Sense Education provides AI literacy lessons, but mainly for school contexts.
- UNESCO and GSMA are both emphasizing multilingual inclusion, local languages, and African digital participation rather than English-only AI access.

## Why the Africa focus matters

Recent UNESCO and GSMA material points in the same direction:

- African language inclusion is still far behind demand online.
- multilingual and local-language AI resources improve inclusion and trust
- low-friction community education matters, especially in public-interest settings
- safe scaling should consider privacy, low-connectivity realities, and culturally grounded examples

That is why this app now highlights Kiswahili, Hausa, Yoruba, and Igbo and uses scenarios closer to everyday messaging and community information flows.

## API key safety note

Users can now save provider keys in the browser for personal testing, but this is **not** the right model for a public production deployment.

For production:

- move provider calls behind a server-side proxy
- never expose raw API keys in client-side code
- add per-provider rate limiting and abuse protection
- consider usage caps and moderation controls

## Official provider key links

- Anthropic: https://docs.anthropic.com/en/api/getting-started
- OpenAI: https://help.openai.com/en/articles/4936850-how-to-create-and-use-an-api-key
- Gemini: https://ai.google.dev/gemini-api/docs/api-key

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Stack

- Frontend: vanilla HTML, CSS, and JavaScript
- Backend: Node.js + Express
- Storage: browser `localStorage`

## Files

- `index.html` - single-page app UI and logic
- `server.js` - static Express server
- `package.json` - runtime metadata

## Sources used for the redesign

- [CISA Secure Our World](https://www.cisa.gov/secure-our-world)
- [Google Be Internet Awesome for Educators](https://beinternetawesome.withgoogle.com/en_in/Educators/)
- [Common Sense Education AI literacy lessons](https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12)
- [UNESCO: From promise to practice in Sub-Saharan Africa](https://www.unesco.org/sdg4education2030/en/knowledge-hub/promise-practice-harnessing-generative-ai-improve-foundational-learning-sub-saharan-africa)
- [UNESCO English-Kiswahili AI Dictionary](https://www.unesco.org/en/articles/unesco-launches-online-english-kiswahili-ai-dictionary-world-kiswahili-language-day)
- [GSMA Digital Inclusion](https://www.gsma.com/solutions-and-impact/connectivity-for-good/external-affairs/gsma_people/digital-inclusion/)
- [OpenAI API key help](https://help.openai.com/en/articles/4936850-how-to-create-and-use-an-api-key)
- [Anthropic API getting started](https://docs.anthropic.com/en/api/getting-started)
- [Gemini API key docs](https://ai.google.dev/gemini-api/docs/api-key)
