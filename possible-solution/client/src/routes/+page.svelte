<script lang="ts">
    import type { Airport } from "$lib";
    import { de } from "$lib/i18n/de";
    export let data;

    export let form;

    const airports: Airport[] = data.airports;

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

<h1>{de.title}</h1>
<p>{de.intro}</p>

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
    <br>

    <button type="submit">{de.submit}</button>
</form>

<br />

{#if form && form.result}
    <div>{de.result(Math.round(form.result.delay * 100), Math.round(form.result.certainty * 100))}</div>
{/if}