# Home-Remote

Control your media devices from your phone. (On Linux 🐧)

## Screenshot

<p align="center">
  <img width="250px" src="https://user-images.githubusercontent.com/9076894/159057400-13036571-5e5e-4d3b-83d1-0773fd989802.png" alt="Screenshot"/>
</p>

## Information

This progressive web app lets you control media (browser players like YouTube or
Netflix, desktop applications like Spotify or VLC) on your PC from your phone
(or tablet). The server is started on the device to control, and devices in the
**same Wifi** network can access the web interface, relaying commands to the PC.
The commands triggered involve `playerctl` and `pactl`, and are strictly limited
for now.

## Background

This project came into being because until recently, I used a bluetooth mouse to
control my PC from my couch. This involved a quickly draining battery, as well
as the need for sniper-level accuracy to hit UI elements with the cursor from far
away.

With this, I (and you) can control the media running on my PC from a phone,
replacing the bluetooth mouse.

## Features

For now, only barebones functionality exists.

### Commands

Player based (`playerctl`):

- Play
- Pause

System based (`pactl`):

- Volume increase
- Volume decrease

#### Future Commands

Also possible, but not yet implemented:

- Next track/video
- Skip forward/backward (to specific position or an interval)
- Select which media player is targeted instead of the default (most recent)
- Automatic UI element triggring (probably needs browser add-on or cursor automation)

### Other

The web interface is **PWA compatible**. I.e. the bookmark can be saved as an app on your phone.

## Setup

Simple steps to run this yourself after cloning the repo. (No npm package or something similar yet)

### PC/Server

1. `yarn install`
2. `yarn build`
3. `yarn start -p $PORT`

The "server" needs to be the same system on which the player runs/the sound is controlled.

### Phone/Tablet

1. Visit `http://<ip-or-dns-of-pc>:<port>`.
2. ?????
3. **CONVENIENCE**
