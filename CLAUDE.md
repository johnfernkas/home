# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

This is a Home Assistant configuration repository. It is deployed directly onto a Home Assistant instance — files here are the live config. There is no build step; HA reads YAML directly. The `esphome/` subdirectory contains firmware configs for ESP-based devices flashed separately via ESPHome.

## Linting

```bash
make lint   # runs yamllint with .yamllint.yaml config
```

CI runs both `make lint` and a full HA config check (via `frenck/action-home-assistant`) on every push. The HA check uses `secrets_ci.yaml` as a stand-in for the real `secrets.yaml` (which is gitignored).

## MCP Server

An `ha-mcp` MCP server is configured project-locally (via `claude mcp add-json`), using the HAOS ha-mcp add-on with a webhook proxy for remote access. Connection URLs and tokens are stored in local Claude Code config, not in this repo.

This gives 88 tools covering entity registry, area management, device registry, automation management, history, and more. Prefer this over direct REST API calls. The `HA_TOKEN` env var is also available for raw REST API access.

## Architecture

### Home Assistant config (`/`)

`configuration.yaml` is the root. It uses HA's `!include` and `!include_dir_merge_*` directives to pull in other files:

| File/dir | Purpose |
|---|---|
| `automations.yaml` | UI-managed automations (edited in HA, synced here via git) |
| `scripts.yaml` | Intentionally empty — all scripts are UI-managed in HA |
| `scenes.yaml` | UI-managed scenes |
| `groups.yaml` | Entity groups |
| `customize.yaml` | Entity customization overrides |
| `shell_commands.yaml` | Shell command integrations |
| `integrations/` | One file per platform integration |

The `integrations/` directory holds configs for: Lutron Caséta (smart lighting, uses local TLS certs in `/ssl/lutron/`), input booleans, and Lovelace dashboard resources. `sensor.yaml`, `switch.yaml`, and `binary_sensor.yaml` are intentionally empty `[]` — all platform integrations have been migrated to UI config entries. InfluxDB and bhyve are now UI-managed config entries.

### Scripts

All scripts are UI-managed and stored in HA, not in `scripts.yaml`. Key scripts:

- `sleep_mode_on_actions` — turns off lights, starts fans, activates nighttime mode
- `sleep_mode_off_actions` — turns on lights, stops fans, prints morning brief to ESC/POS thermal printer
- `renew_lets_encrypt_ssl_certificates` — renews SSL certs via Let's Encrypt add-on

### Secrets

Real secrets live in `secrets.yaml` (gitignored). `secrets_ci.yaml` contains placeholder values used only for CI validation. When adding a new `!secret` reference, add a matching placeholder key to `secrets_ci.yaml`.

### ESPHome devices (`esphome/`)

Each `.yaml` is a device firmware config. Devices currently in use:

- `basement_aq_sensor.yaml` — ESP8266, HTU21D temp/humidity + PMSX003 air quality sensor (currently offline/unavailable)
- `upsy-desky-76dbcc.yaml` — Standing desk controller, uses upstream `tjhorner/upsy-desky` package
- `konnected-64e394.yaml` — Garage door opener, uses upstream `konnected-io/konnected-esphome` package

Shared WiFi credentials come from `esphome/secrets.yaml` (gitignored). `esphome/archive/` holds old configs no longer deployed.

### Lovelace frontend

Lovelace is in `storage` mode (managed via UI). `integrations/lovelace.yaml` only registers HACS frontend resources (Mushroom cards, card-templater).

### Blueprints (`blueprints/`)

Standard HA blueprints for motion-triggered lights and notifications. Not customized beyond stock HA examples.

## Key automations

- **Sleep Mode On/Off** — triggered by `input_boolean.sleep_mode`; optional time-based triggers can be enabled separately
- **Driveway lights** — motion-activated after sunset
- **Dishwasher** — sends notification when cycle finishes; switches upstairs AC to fan mode while running and restores when done
- **Irrigation** — two sets (every other day / every three days) for front and backyard; toggled seasonally via enable/disable in HA
- **Christmas lights** — sunset on / 2am off, guard against `unavailable` state

## Sync workflow

Changes can originate from two places:
1. **This repo** (Claude Code / local editor) — commit and push; HA auto-pulls at 4am via the git-pull add-on
2. **HAOS VS Code server** — push from there before pulling locally to avoid merge conflicts
