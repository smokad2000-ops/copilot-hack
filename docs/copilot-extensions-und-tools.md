# GitHub Copilot Extensions, Plugins & Automatisierungs-Tools

Übersicht recherchierter, real existierender Erweiterungen und Werkzeuge rund
um GitHub Copilot (Stand: September 2026). Quellen: GitHub Marketplace,
offizielle GitHub-Dokumentation, GitHub-Blog.

## 1. Offizielle Copilot Extensions (Marketplace)

| Extension | Zweck |
|---|---|
| Docker | Docker-Assets erzeugen, Container analysieren, Schwachstellen prüfen |
| Microsoft Azure / Azure Pipelines | Cloud-Infrastruktur bauen, testen, deployen |
| GitHub Actions & Advanced Security | CI/CD automatisieren, Security-Scans |
| Microsoft Teams | Benachrichtigungen und Workflow-Aktionen in Teams |
| GitHub Copilot Debug CLI | Extensions vom Terminal aus bauen/testen/debuggen |

## 2. Bekannte Drittanbieter-Extensions

| Extension | Zweck |
|---|---|
| PerplexityAI | Web-verifizierte Antworten auf Entwicklerfragen |
| Stack Overflow | Fragen/Antworten direkt in Copilot Chat |
| Sentry | Fehlererkennung, Issue-Management, Monitoring |
| DataStax (AstraDB) | Datenbankverwaltung |
| CircleCI / Travis CI | Build- und Deploy-Automatisierung |
| Shopify | Theme-/Headless-Deployment |
| LaunchDarkly | Feature-Flag-Management |
| Stripe | Zahlungsintegration, API-Doku |
| Octopus Deploy | Deployment-Monitoring/-Trigger |
| SonarQube Cloud | Code-Qualität und Sicherheitsanalyse |
| GitGuardian | Secrets-Erkennung |
| AWS Connector for GitHub | AWS-/Repo-Workflows synchronisieren |
| Render | Continuous Deployment |
| Slack | GitHub-Events als Slack-Benachrichtigungen |
| MongoDB | Datenbank-Tools/Monitoring |
| Linear | PR-/Commit-Workflows automatisieren |
| ReadMe | API-Dokumentation in Copilot Chat |
| Mermaid Chart | Diagramme per natürlicher Sprache erzeugen |
| Arm | Arm-Cloud-Infrastruktur verwalten |

Vollständige, aktuelle Liste: https://github.com/marketplace?type=copilot-extensions

## 3. Copilot CLI – Plugins & MCP-Server

Copilot CLI unterstützt eigene Plugins und externe MCP-Server (Model Context
Protocol), die zusätzliche Tools/Kontext bereitstellen.

```sh
# Plugins
copilot plugin marketplace list
copilot plugin marketplace browse MARKETPLACE-NAME
copilot plugin install PLUGIN-NAME@MARKETPLACE-NAME

# MCP-Server
copilot mcp list
copilot mcp add <name>
copilot mcp remove <name>
```

Konfigurationsorte: global `~/.copilot/mcp-config.json`,
projektbezogen `.github/mcp.json` bzw. `.vscode/mcp.json`.

Relevante Repos/Registries:
- https://github.com/github/awesome-copilot – Community-Sammlung von
  Instructions, Prompts, Skills, Agents und MCP-Server-Konfigurationen.
- https://github.com/microsoft/mcp-dotnet-samples (Ordner `awesome-copilot`) –
  MCP-Server als Katalog/Registry für Copilot-Anpassungen.

Beispiel für einen häufig genutzten MCP-Server (Browserautomatisierung):
```sh
npx @playwright/mcp@latest
```

## 4. Automatisierungs-Tools im GitHub-Ökosystem

- **GitHub Actions** – Workflow-Automatisierung (CI/CD, Scheduling, Events).
- **GitHub Apps** – Serverseitige Integrationen mit granularen Berechtigungen.
- **Dependabot** – automatisierte Abhängigkeits-Updates & Sicherheits-Patches.
- **CodeQL** – automatisierte Security-/Code-Qualitätsanalyse.
- **Copilot Coding Agent** – bearbeitet GitHub Issues autonom und öffnet PRs.
- **Agent Merge / Auto-Merge-Workflows** – automatisierte Review-Ticks, Konflikt-
  und CI-Fixes an offenen Pull Requests.

## 5. Custom Agents, Chat Modes & Skills (VS Code / Copilot Chat)

Neben Marketplace-Extensions lässt sich Copilot durch dateibasierte
Anpassungen im Repo erweitern:

| Mechanismus | Ort | Zweck |
|---|---|---|
| Custom Agents | `.github/agents/*.md` (YAML-Frontmatter) | Eigene Personas mit festen Tools/Instructions/Modell |
| Chat Modes | `.github/chatmodes/*.chatmode.md` | Vordefinierte Chat-Personas (z. B. Security-Reviewer, Planner) |
| Instructions | `.github/instructions/*.instructions.md` | Repo-/Pfad-spezifische Verhaltensregeln |
| Prompt-Dateien | `.github/prompts/*.prompt.md` | Wiederverwendbare Slash-Command-Prompts |
| Agent Plugins | Marketplace-Pakete | Bündeln Skills, Tools, Hooks, MCP-Server, Slash-Commands |

Community-Sammlungen:
- https://github.com/github/awesome-copilot – Instructions, Prompts, Chat Modes, Agents
- https://github.com/dfinke/awesome-copilot-chatmodes – kuratierte `.chatmode.md`-Personas

## 6. Offizielle & verbreitete MCP-Server

| MCP-Server | Zweck |
|---|---|
| `github/github-mcp-server` | GitHub-Issues/PRs/Repos direkt ansprechen |
| `microsoft/mcp` (Azure.Mcp.Server, Fabric.Mcp.Server) | Azure-Ressourcen, Power BI/Fabric-Datenzugriff |
| `@playwright/mcp` | Browserautomatisierung/E2E-Tests |
| `modelcontextprotocol/servers` (filesystem, fetch, git, sequential-thinking u. a.) | Referenzimplementierungen des MCP-Projekts |
| `modelcontextprotocol/registry` | zentrale, durchsuchbare Registry aller bekannten MCP-Server |

Enterprise-Admins können eine eigene, geprüfte MCP-Registry/Allowlist
konfigurieren, siehe
https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry

## 7. Offizielle Dokumentation

- https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing
- https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers
- https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/extend-copilot-chat-with-mcp
- https://docs.github.com/en/copilot/reference/custom-agents-configuration
- https://code.visualstudio.com/docs/agent-customization/agent-plugins
- https://github.blog/changelog/2025-02-19-announcing-the-general-availability-of-github-copilot-extensions/

## Hinweis

Diese Liste erhebt keinen Anspruch auf Vollständigkeit — "alle" existierenden
Plugins/Tools automatisch zu erfassen und lokal zu installieren ist weder
sinnvoll noch sicher (unbekannte Herkunft/Berechtigungen). Stattdessen wurde
eine kuratierte, quellenbelegte Übersicht mit Links zu den offiziellen,
laufend aktualisierten Registries erstellt.
