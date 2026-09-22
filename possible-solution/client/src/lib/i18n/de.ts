export const de = {
    locale: 'de-DE',
    title: 'Workspace Home',
    intro: 'Diese Startseite zeigt die wichtigsten Bereiche des Workspaces und bietet direkt Zugriff auf die Flugverspätungs-Demo.',
    heroBadge: 'Copilot Workspace',
    heroTitle: 'Willkommen in deinem Projektordner',
    heroText: 'Aufgebaut anhand des vorhandenen Workspaces mit klaren Bereichen für Inhalte, Admin-Docs, Daten und die Beispiel-Lösung.',
    sectionsTitle: 'Ordner im Fokus',
    demoTitle: 'Flugverspätungs-Demo',
    airportLabel: 'Flughafen',
    dayLabel: 'Wochentag',
    submit: 'Verspätung ermitteln',
    noAirports: 'Keine Flughafendaten verfügbar. Starte den Backend-Server auf Port 5000, um die Demo zu nutzen.',
    result: (delay: number, certainty: number) =>
        `Die Wahrscheinlichkeit einer Verspätung beträgt ${delay} %. Die Prognose ist zu ${certainty} % sicher.`
} as const;
