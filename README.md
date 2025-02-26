# TalkOps Kernel: Google Gemini Multimodal Live API
![Docker Pulls](https://img.shields.io/docker/pulls/talkops/talkops-kernel-google-gemini-multimodal-live-api)

A TalkOps Kernel made to work with [TalkOps](https://link.talkops.app/talkops).

This Kernel based on [Google Gemini Multimodal Live API](https://ai.google.dev/gemini-api/docs/multimodal-live) defines and configures the Agent&#39;s artificial intelligence. It acts as the processing engine for real-time interactions, ensuring the analysis and understanding of user requests in real-time.

## Installation Guide

_[TalkOps](https://link.talkops.app/install-talkops) must be installed beforehand._


## Integration Guide

Add the service and setup the environment variables if needed:

_compose.yml_
``` yml
name: talkops

services:
...
  talkops-kernel-google-gemini-multimodal-live-api:
    image: talkops/talkops-kernel-google-gemini-multimodal-live-api
    environment:
      API_KEY: [your-value]
    restart: unless-stopped
```

## Environment Variables

#### API_KEY

The API key. Sign up at [Google AI Studio](https://aistudio.google.com/apikey) to obtain your api key.

#### DEFAULT_LANGUAGE

The default language.
* Default value: `English`
* Available values: `Arabic` `Chinese` `Czech` `Danish` `Dutch` `English` `Finnish` `French` `German` `Hindi` `Hungarian` `Indonesian` `Italian` `Japanese` `Korean` `Norwegian` `Polish` `Portuguese` `Romanian` `Russian` `Spanish` `Swedish` `Thai` `Turkish` `Ukrainian` `Vietnamese`

#### MODEL

The model.
* Default value: `gemini-2.0-flash-exp`
* Available values: `gemini-2.0-flash-exp`

#### VOICE

The voice the model uses to respond. [More info](https://ai.google.dev/gemini-api/docs/multimodal-live#voices)
* Default value: `Aoede`
* Available values: `Aoede` `Charon` `Fenrir` `Kore` `Puck`

#### AGENT_URLS

A comma-separated list of WebSocket server URLs for real-time communication with specified agents.
* Default value: `ws://talkops`
* Possible values: `ws://talkops1` `ws://talkops2`
