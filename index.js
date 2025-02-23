import { Kernel, Service, Readme } from "talkops";

import languages from "./parameters/languages.json" assert { type: "json" };
import models from "./parameters/models.json" assert { type: "json" };
import voices from "./parameters/voices.json" assert { type: "json" };

const kernel = new Kernel("Google Gemini Multimodal Live API");

kernel.setDockerHubRepository("talkops/talkops-kernel-google-gemini-multimodal-live-api");

kernel.setEnvironmentVariables({
  API_KEY: {
    description:
      "The API key. Sign up at [Google AI Studio](https://aistudio.google.com/apikey) to obtain your api key.",
  },
  DEFAULT_LANGUAGE: {
    defaultValue: "English",
    description: "The default language.",
    availableValues: languages,
  },
  MODEL: {
    defaultValue: "gemini-2.0-flash-exp",
    description: "The model.",
    availableValues: models,
  },
  VOICE: {
    defaultValue: "Aoede",
    description: "The voice the model uses to respond.",
    availableValues: voices,
  },
});

kernel.setParameters({
  apiKey: process.env.API_KEY,
  defaultLanguage: process.env.DEFAULT_LANGUAGE,
  model: process.env.MODEL,
  voice: process.env.VOICE,
});

new Readme(process.env.README_TEMPLATE_URL, "/app/README.md", kernel);
new Service(process.env.AGENT_URLS.split(","), kernel);
