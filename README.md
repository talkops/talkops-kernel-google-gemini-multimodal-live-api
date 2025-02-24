# TalkOps Kernel: Google Gemini Multimodal Live API
![Docker Pulls](https://img.shields.io/docker/pulls/talkops/talkops-kernel-google-gemini-multimodal-live-api)

A TalkOps Kernel made to work with [TalkOps](https://link.talkops.app/talkops).


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

The voice the model uses to respond.
* Default value: `Aoede`
* Available values: `Aoede` `Charon` `Fenrir` `Kore` `Puck`

#### AGENT_URLS

A comma-separated list of WebSocket server URLs for real-time communication with specified agents.
* Default value: `ws://talkops`
