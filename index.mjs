import { Kernel, Service, Readme } from 'talkops'

import languages from './parameters/languages.json' with { type: 'json' }
import models from './parameters/models.json' with { type: 'json' }
import voices from './parameters/voices.json' with { type: 'json' }

const kernel = new Kernel('Google Gemini Multimodal Live API')

kernel.setDockerRepository('talkops/talkops-kernel-google-gemini-multimodal-live-api')

kernel.setDescription(
  "This Kernel based on [Google Gemini Multimodal Live API](https://ai.google.dev/gemini-api/docs/multimodal-live) defines and configures the Agent's artificial intelligence. It acts as the processing engine for real-time interactions, ensuring the analysis and understanding of user requests in real-time.",
)

kernel.setEnvironmentVariables({
  API_KEY: {
    description:
      'The API key. Sign up at [Google AI Studio](https://aistudio.google.com/apikey) to obtain your api key.',
  },
  DEFAULT_LANGUAGE: {
    defaultValue: 'English',
    description: 'The default language.',
    availableValues: languages,
  },
  MODEL: {
    defaultValue: 'gemini-2.0-flash-exp',
    description: 'The model.',
    availableValues: models,
  },
  VOICE: {
    defaultValue: 'Aoede',
    description:
      'The voice the model uses to respond. [More info](https://ai.google.dev/gemini-api/docs/multimodal-live#voices)',
    availableValues: voices,
  },
})

kernel.setParameters({
  apiKey: process.env.API_KEY,
  defaultLanguage: process.env.DEFAULT_LANGUAGE,
  model: process.env.MODEL,
  voice: process.env.VOICE,
})

new Readme(process.env.README_TEMPLATE_URL, '/app/README.md', kernel)
new Service(process.env.AGENT_URLS.split(','), kernel)
