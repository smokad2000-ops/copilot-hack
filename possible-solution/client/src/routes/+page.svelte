<script lang="ts">
    import type { Airport } from "$lib";
    import { de } from "$lib/i18n/de";
    export let data: { airports?: Airport[] };

    export let form: { result?: { delay: number; certainty: number } } | undefined;

    const airports: Airport[] = data.airports ?? [];
    const workspaceSections = [
        {
            name: "content",
            title: "Workshop-Inhalte",
            description: "Aufgaben und Lernpfade für den Hackathon."
        },
        {
            name: "admin",
            title: "Admin-Leitfäden",
            description: "Setup und Ablaufdokumente für Moderation und Betreuung."
        },
        {
            name: "docs",
            title: "Dokumentation",
            description: "Zusätzliche Informationen zu Extensions, Tools und Nutzung."
        },
        {
            name: "data",
            title: "Datengrundlage",
            description: "CSV-Dateien als Basis für Modelltraining und Vorhersagen."
        },
        {
            name: "possible-solution",
            title: "Beispiel-Lösung",
            description: "Referenzimplementierung mit Client und Python-Server."
        }
    ] as const;

    // Wochentage für die Anzeige: Montag beginnt mit dem Wert 1.
    const days = Array.from({length: 7}, (_, i) => {
        return {
            name: new Intl.DateTimeFormat(de.locale, { weekday: 'long'}).format(new Date(2021, 7, i + 2)),
            value: i + 1
        }
    });

    if(form && form.result) {
        console.log(form.result);
    }
</script>

<svelte:head>
    <title>{de.title}</title>
    <meta name="description" content={de.intro} />
</svelte:head>

<main>
    <section class="hero">
        <span class="badge">{de.heroBadge}</span>
        <h1>{de.heroTitle}</h1>
        <p>{de.heroText}</p>
    </section>

    <section class="workspace">
        <h2>{de.sectionsTitle}</h2>
        <div class="grid">
            {#each workspaceSections as section (section.name)}
                <article class="card">
                    <p class="path">{section.name}</p>
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                </article>
            {/each}
        </div>
    </section>

    <section class="demo">
        <h2>{de.demoTitle}</h2>

        {#if airports.length === 0}
            <p class="notice">{de.noAirports}</p>
        {:else}
            <form method="POST" action="?/getDelay">
                <label for="airport">{de.airportLabel}</label>
                <select id="airport" name="airport">
                    {#each airports as airport (airport.id)}
                        <option value={airport.id}>{airport.name}</option>
                    {/each}
                </select>

                <label for="day">{de.dayLabel}</label>
                <select id="day" name="day">
                    {#each days as day (day.value)}
                        <option value={day.value}>{day.name}</option>
                    {/each}
                </select>

                <button type="submit">{de.submit}</button>
            </form>
        {/if}

        {#if form && form.result}
            <div class="result">{de.result(Math.round(form.result.delay * 100), Math.round(form.result.certainty * 100))}</div>
        {/if}
    </section>
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: "Space Grotesk", "Segoe UI", sans-serif;
        background:
            radial-gradient(circle at 20% 20%, rgba(255, 202, 99, 0.45), transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(115, 194, 251, 0.35), transparent 36%),
            linear-gradient(140deg, #fff6e9 0%, #f4fbff 52%, #f8ffe7 100%);
        color: #14222e;
    }

    main {
        max-width: 1080px;
        margin: 0 auto;
        padding: 2rem 1rem 3rem;
        display: grid;
        gap: 2rem;
    }

    .hero,
    .workspace,
    .demo {
        background: rgba(255, 255, 255, 0.84);
        border: 1px solid rgba(20, 34, 46, 0.08);
        border-radius: 1.1rem;
        padding: 1.4rem;
        box-shadow: 0 14px 38px rgba(20, 34, 46, 0.08);
        animation: rise 0.5s ease-out both;
    }

    .badge {
        display: inline-block;
        background: #14222e;
        color: #f4fbff;
        border-radius: 999px;
        padding: 0.3rem 0.8rem;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    h1 {
        margin: 0.8rem 0 0.5rem;
        font-size: clamp(1.9rem, 4vw, 3rem);
        line-height: 1.1;
    }

    h2 {
        margin-top: 0;
        font-size: 1.4rem;
    }

    .grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    .card {
        background: #ffffff;
        border: 1px solid rgba(20, 34, 46, 0.09);
        border-radius: 0.8rem;
        padding: 1rem;
    }

    .path {
        margin: 0 0 0.5rem;
        color: #00708a;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    form {
        display: grid;
        gap: 0.6rem;
    }

    label {
        font-weight: 600;
    }

    select,
    button {
        font: inherit;
        padding: 0.65rem 0.75rem;
        border-radius: 0.55rem;
        border: 1px solid rgba(20, 34, 46, 0.26);
    }

    button {
        background: #0d6a58;
        color: #f6fffd;
        border: 0;
        cursor: pointer;
        font-weight: 700;
        transition: transform 0.15s ease;
    }

    button:hover {
        transform: translateY(-1px);
    }

    .notice {
        margin: 0;
        color: #8c4200;
        font-weight: 600;
    }

    .result {
        margin-top: 1rem;
        background: #e9fff4;
        border: 1px solid #93dfb3;
        border-radius: 0.7rem;
        padding: 0.75rem;
    }

    @media (max-width: 640px) {
        main {
            padding: 1.1rem 0.8rem 2rem;
        }
    }

    @keyframes rise {
        from {
            opacity: 0;
            transform: translateY(9px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
