# Neles und Lottes Spieleburg

Vier Computerspiele, ausgedacht von Nele und Lotte. Alle laufen direkt im Browser, auf dem Computer, dem Tablet und dem Handy.

**Hier spielen:** https://girigo26.github.io/Lotte-Nele/

| Spiel | Von | Worum geht's? |
|---|---|---|
| [Humpelchen fliegt](humpelchen/) | Nele | Die Hexe Humpelchen fliegt mit ihrer Katze auf dem Besen und sammelt Goldstücke für einen Riesenkuchen. |
| [Das Burggespenst](burggespenst/) | Lotte | Eine tapfere Ritterin sucht die acht Teile ihrer Rüstung, während das Burggespenst sie verfolgt. |
| [Kürbisnacht auf Burg Mondstein](kuerbisnacht/) | Lotte | Kürbisse schnitzen, Torte backen, den Saal schmücken und zwei Halloween-Wettbewerbe gewinnen. |
| [Einhörner gegen Dinos](schach/) | Nele und Lotte | Schach in 3D: gegen den Computer oder zu zweit. Elo, der Schach-Elefant, erklärt alles, und wer gewinnt, packt Geschenke aus. |

## Spielen

Die Startseite `index.html` zeigt alle vier Spiele. Ein Klick auf „Spielen“ startet das Spiel, und über „Alle Spiele“ kommt man zurück.

- Steuerung: am Computer mit Maus oder Pfeiltasten, auf dem Tablet mit dem Finger.
- Die ersten drei Spiele brauchen Internet, weil sie die 3D-Bibliothek three.js und die Schriften aus dem Netz laden.
- Das Schachspiel bringt alles selbst mit (keine Werbung, keine Anmeldung, es werden keine Daten verschickt). Gewonnene Geschenke merkt sich nur das eigene Gerät.

## Einhörner gegen Dinos (Schach)

- **Gegen den Computer** in vier Stufen. Je schwerer, desto mehr Geschenke gibt es für einen Sieg.
- **Zu zweit** an einem Gerät – nebeneinander oder gegenüber (dann dreht sich das Brett zu dem, der dran ist).
- **Elo, der Schach-Elefant,** zeigt, wohin eine Figur ziehen kann, warnt vor Fehlern, gibt Tipps und liest alles vor.
- **Schach-Schule** mit zehn Lektionen: alle Figuren, Schach abwehren, Schachmatt in einem Zug.
- **Schatzkiste** mit 40 Geschenken: neue Bretter, Farben, Hüte und Sammelkarten.
- In den Einstellungen kann man das Vorlesen, die Töne und das 3D-Brett ausschalten.

Der Ordner `schach/` enthält nur zwei Dateien: `index.html` (das ganze Spiel) und `stimme-….mp3` (Elos Stimme).

## Als Webseite einschalten (GitHub Pages)

1. Im Repository auf **Settings** → **Pages** gehen.
2. Bei **Source** „Deploy from a branch“ wählen, dann Branch **main** und Ordner **/ (root)**.
3. Speichern. Nach ein bis zwei Minuten steht dort die Adresse der Seite.

Bei einem kostenlosen GitHub-Konto muss das Repository dafür öffentlich sein.

## Etwas Neues hochladen

1. Auf github.com das Repository **Lotte-Nele** öffnen.
2. Oben **Add file** → **Upload files** wählen.
3. Den Ordner oder die Dateien ins Fenster ziehen (ein Ordner behält seinen Namen).
4. Unten auf **Commit changes** klicken.
5. Ein bis zwei Minuten warten – dann ist die Webseite aktualisiert.

## Ordner

```
index.html          Startseite
humpelchen/         Humpelchen fliegt
burggespenst/       Das Burggespenst
kuerbisnacht/       Kürbisnacht auf Burg Mondstein
schach/             Einhörner gegen Dinos (Schach)
bilder/             Vorschaubilder für die Startseite
```

## Wer hat's gemacht?

Ideen, Wünsche und Spieltests: Nele und Lotte.
Programmiert mit Claude, einer KI von Anthropic.

Verwendet werden:

- [three.js](https://threejs.org) (MIT-Lizenz) und Schriften von Google Fonts in den ersten drei Spielen.
- Im Schachspiel die Schriften [DynaPuff](https://fonts.google.com/specimen/DynaPuff) und [Andika](https://fonts.google.com/specimen/Andika) (beide SIL Open Font License).
- Elos Stimme ist die freie deutsche Stimme „Thorsten“ von Thorsten Müller ([Thorsten-Voice](https://www.thorsten-voice.de), CC0), erzeugt mit dem Programm [Piper](https://github.com/OHF-Voice/piper1-gpl).
