export const de = {
    locale: 'de-DE',
    title: 'Flugverspätung prüfen',
    intro: 'Wählen Sie einen Flughafen und einen Wochentag aus, um die erwartete Verspätungswahrscheinlichkeit zu ermitteln.',
    airportLabel: 'Flughafen',
    dayLabel: 'Wochentag',
    submit: 'Verspätung ermitteln',
    result: (delay: number, certainty: number) =>
        `Die Wahrscheinlichkeit einer Verspätung beträgt ${delay} %. Die Prognose ist zu ${certainty} % sicher.`
} as const;
