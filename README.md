# Neles und Lottes Spieleburg

Drei Computerspiele, ausgedacht von Nele und Lotte. Alle laufen direkt im Browser, auf dem Computer und auf dem Tablet.

| Spiel | Von | Worum geht's? |
|---|---|---|
| [Humpelchen fliegt](humpelchen/) | Nele | Die Hexe Humpelchen fliegt mit ihrer Katze auf dem Besen und sammelt Goldstücke für einen Riesenkuchen. |
| [Das Burggespenst](burggespenst/) | Lotte | Eine tapfere Ritterin sucht die acht Teile ihrer Rüstung, während das Burggespenst sie verfolgt. |
| [Kürbisnacht auf Burg Mondstein](kuerbisnacht/) | Lotte | Kürbisse schnitzen, Torte backen, den Saal schmücken und zwei Halloween-Wettbewerbe gewinnen. |

## Spielen

Die Startseite `index.html` zeigt alle drei Spiele. Ein Klick auf „Spielen“ startet das Spiel, und über „← Alle Spiele“ kommt man zurück.

- Steuerung: am Computer mit den Pfeiltasten, auf dem Tablet mit dem Finger.
- Die Spiele brauchen Internet, weil sie die 3D-Bibliothek three.js und die Schriften aus dem Netz laden.

## Als Webseite einschalten (GitHub Pages)

1. Im Repository auf **Settings** → **Pages** gehen.
2. Bei **Source** „Deploy from a branch“ wählen, dann Branch **main** und Ordner **/ (root)**.
3. Speichern. Nach ein bis zwei Minuten steht dort die Adresse der Seite.

Bei einem kostenlosen GitHub-Konto muss das Repository dafür öffentlich sein.

## Ordner

```
index.html          Startseite
humpelchen/         Humpelchen fliegt
burggespenst/       Das Burggespenst
kuerbisnacht/       Kürbisnacht auf Burg Mondstein
bilder/             Vorschaubilder für die Startseite
```

## Wer hat's gemacht?

Ideen, Wünsche und Spieltests: Nele und Lotte.
Programmiert mit Claude, einer KI von Anthropic.
Verwendet [three.js](https://threejs.org) (MIT-Lizenz) und Schriften von Google Fonts.
