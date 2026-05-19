# Home Assistant Configuration

John Fernkas's Home Assistant configuration for the house in Indianapolis.

## Setup

- **HA instance:** [home.johnfernkas.com](https://home.johnfernkas.com)
- **Hardware:** Home Assistant OS on dedicated hardware
- **Sync:** This repo auto-pulls to HA at 4am daily via the git-pull add-on. Changes from the HAOS VS Code server should be pushed before pulling locally.

## Devices & Integrations

### Lighting
- **Lutron Caséta** — primary smart lighting throughout the house (local TLS connection)
- **Philips Hue** — guest bedroom sconces
- **ZHA** — Zigbee coordinator for Aqara/LUMI devices

### Climate
- **Ecobee** — downstairs thermostat (`climate.downstairs`), provides weather data
- **Midea AC** — upstairs bedroom window unit (`climate.midea_ac`)
- **Ecobee** — office thermostat (`climate.office`)

### Audio
- **Sonos** — Front Room (Sonos Five surrounds), Kitchen, Upstairs Bathroom, Sonos Move (portable), Office (Sonos Five)

### Security
- **SimpliSafe** — whole-home alarm system
- **UniFi Protect** — G3 Instant camera in basement
- **Konnected** — garage door opener (`cover.konnected_64e394_garage_door`)

### Appliances
- **Bosch Dishwasher** — Home Connect integration
- **GE Profile Opal Ice Maker** — basement

### Outdoor
- **Bhyve** — smart irrigation (front and back yard)
- **Driveway floodlights** — motion-activated via Lutron

### Other
- **ESPHome** — basement AQ sensor (offline), standing desk controller, garage door
- **ESC/POS Thermal Printer** — Epson TM-T88IV via Pi Zero W TCP→USB bridge on the local network
- **iPad Kiosk** — HA dashboard kiosk in the office (browser_mod)
- **SimpliSafe** — alarm panel

## Key Automations

| Automation | Description |
|---|---|
| Sleep Mode On | Triggered by `input_boolean.sleep_mode`; turns off lights, starts fans, arms alarm |
| Sleep Mode Off | Turns on lights, prints morning brief to thermal printer (if John is home) |
| Morning Brief | Prints weather forecast + office temp to thermal printer on wake |
| Dishwasher Done | Push notification to John's iPhone when cycle finishes |
| Dishwasher AC | Switches upstairs AC to fan while dishwasher runs, restores when done |
| Driveway Lights | Motion-activated after sunset; override via helper |
| Irrigation | Front and backyard on configurable schedules (every 2 or 3 days) |

## Repo Structure

```
/
├── configuration.yaml      # Root config
├── automations.yaml        # UI-managed automations
├── scripts.yaml            # Intentionally empty (all scripts UI-managed)
├── scenes.yaml             # UI-managed scenes
├── groups.yaml             # Entity groups
├── customize.yaml          # Entity customization overrides
├── shell_commands.yaml     # Shell command integrations
├── integrations/           # One file per platform
├── esphome/                # ESPHome device firmware configs
│   └── archive/            # Old/retired device configs
└── blueprints/             # HA automation blueprints
```
