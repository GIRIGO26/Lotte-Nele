# Neles und Lottes Spieleburg

Vier Computerspiele, ausgedacht von Nele und Lotte. Alle laufen direkt im Browser, auf dem Computer, dem Tablet und dem Handy.

**Hier spielen:** https://girigo26.github.io/Lotte-Nele/

| Spiel | Von | Worum geht's? |
|---|---|---|
| [Humpelchen fliegt](humpelchen/) | Nele | Die Hexe Humpelchen fliegt mit ihrer Katze auf dem Besen und sammelt Goldstücke für einen Riesenkuchen. |
| [Das Burggespenst](burggespenst/) | Lotte | Eine tapfere Ritterin sucht die acht Teile ihrer Rüstung, während das Burggespenst sie verfolgt. |
| [Kürbisnacht auf Burg Mondstein](kuerbisnacht/) | Lotte | Kürbisse schnitzen, Torte backen, den Saal schmücken und zwei Halloween-Wettbewerbe gewinnen. |
| [Einhörner gegen Dinos](schach/) | Nele und Lotte | Schach in 3D: gegen den Computer oder zu zweit. Elo, der Schach-Elefant (oder Ela, die Schach-Elefantin), erklärt alles, und wer gewinnt, packt Geschenke aus. |

## Spielen

Die Startseite `index.html` zeigt alle vier Spiele. Ein Klick auf „Spielen“ startet das Spiel, und über „Alle Spiele“ kommt man zurück.

- Steuerung: am Computer mit Maus oder Pfeiltasten, auf dem Tablet mit dem Finger.
- Die ersten drei Spiele brauchen Internet, weil sie die 3D-Bibliothek three.js und die Schriften aus dem Netz laden.
- Das Schachspiel bringt alles selbst mit – auch three.js und die Schriften (keine Werbung, keine Anmeldung, es werden keine Daten verschickt). Gewonnene Geschenke merkt sich nur das eigene Gerät.

## Einhörner gegen Dinos (Schach)

- **Echtes 3D-Brett:** Die Figuren haben die bekannte Schachform (Krone mit Kreuz, Krönchen, Zinnen, spitzer Hut, Pferdekopf, Kugelkopf) und dazu ein Einhorn- oder Dino-Gesicht. Sie spiegeln sich zart im Brett.
- **Nie zu verwechseln:** Einhörner sind immer hell und stehen auf einem goldenen Fuß, Dinos sind immer kräftig bunt und stehen auf einem dunklen Stein-Fuß mit Glut-Rand – bei jeder Farbe, die man gewinnt.
- **Gegen den Computer** in vier Stufen. Je schwerer, desto mehr Geschenke gibt es für einen Sieg.
- **Zu zweit** an einem Gerät – nebeneinander oder gegenüber (dann dreht sich das Brett zu dem, der dran ist).
- **Elo, der Schach-Elefant,** zeigt, wohin eine Figur ziehen kann, warnt vor Fehlern, gibt Tipps und liest alles vor. Er benutzt kein Schachwort, das er nicht vorher erklärt hat. In den Einstellungen kann stattdessen **Ela, die Schach-Elefantin,** vorlesen (Frauenstimme).
- **Schach-Schule** mit elf Lektionen: alle Figuren, Schach abwehren, der „Zaubertrick“ (Rochade), Schachmatt in einem Zug.
- **Schatzkiste** mit 40 Geschenken: neue Bretter, Farben, Hüte und Sammelkarten. Sie ist auch der Kleiderschrank: Auf einer kleinen 3D-Bühne probiert man an, was Einhörner und Dinos tragen, und kann jederzeit wechseln – auch mitten im Spiel (Pause → Schatzkiste). „Wie am Anfang“ stellt alles zurück, „Würfeln“ mischt bunt. Beim Auspacken wird nichts von allein angezogen.
- In den Einstellungen kann man das Vorlesen, die Töne und das 3D-Brett ausschalten. Kann ein Gerät kein 3D, zeichnet das Spiel das Brett von selbst flach.

Der Ordner `schach/` enthält vier Dateien, die zusammengehören: `index.html` (das Spiel), `brett3d-….js` (das 3D-Brett), `stimme-….mp3` (Elos Stimme) und `ela-….mp3` (Elas Stimme).

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

- [three.js](https://threejs.org) (MIT-Lizenz) in allen vier Spielen; in den ersten drei Spielen außerdem Schriften von Google Fonts.
- Im Schachspiel die Schriften [DynaPuff](https://fonts.google.com/specimen/DynaPuff) und [Andika](https://fonts.google.com/specimen/Andika) (beide SIL Open Font License).
- Elos Stimme ist die freie deutsche Stimme „Thorsten“ von Thorsten Müller ([Thorsten-Voice](https://www.thorsten-voice.de), CC0), erzeugt mit dem Programm [Piper](https://github.com/OHF-Voice/piper1-gpl).
- Elas Stimme ist die freie deutsche Frauenstimme aus dem Datensatz [CSS10](https://github.com/Kyubyong/css10) (gemeinfreie Hörbuch-Aufnahmen von LibriVox, Sprecherin „Hokuspokus“), als Sprachmodell von [Neon AI](https://huggingface.co/neongeckocom/tts-vits-css10-de) (BSD-3-Clause-Lizenz) mit [Coqui TTS](https://github.com/coqui-ai/TTS) trainiert und mit [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) erzeugt.
