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

## 5. Offizielle Dokumentation

- https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing
- https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers
- https://github.blog/changelog/2025-02-19-announcing-the-general-availability-of-github-copilot-extensions/

## Hinweis

Diese Liste erhebt keinen Anspruch auf Vollständigkeit — "alle" existierenden
Plugins/Tools automatisch zu erfassen und lokal zu installieren ist weder
sinnvoll noch sicher (unbekannte Herkunft/Berechtigungen). Stattdessen wurde
eine kuratierte, quellenbelegte Übersicht mit Links zu den offiziellen,
laufend aktualisierten Registries erstellt.
