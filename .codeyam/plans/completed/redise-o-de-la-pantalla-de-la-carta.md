---
title: "Rediseño de la pantalla de la carta"
mode: ui
createdAt: "2026-10-08T23:00:31Z"
step: 11
source: prototype
---

# Rediseño de la pantalla de la carta (lectura)

Rediseño sutil de la pantalla de lectura (`CardReading`), en desktop y mobile. El layout de dos columnas en desktop y la carta no cambian. Cambia la columna de texto: abre nombrando la carta y los botones van en una fila. El diseño elegido ya es el **default** del componente, así que `/reading` lo usa.

## Diseño elegido

**Sin pregunta (desktop y mobile):**
1. El nombre del personaje como titular (display, 54px desktop / 40px mobile, crema). Ej.: **Confucio**.
2. Debajo, un eyebrow: `ARCANO IX · EL ERMITAÑO` (`Arcanum` en inglés).
3. La cita de la carta (itálica, salvia), las estrellas y el significado, como antes.
4. Acciones:
   - Desktop: una sola fila con el botón relleno **Elegir otra carta** y los links Compartir / Descargar Imagen.
   - Mobile: **Elegir otra carta** a todo el ancho y debajo Compartir y Descargar como dos botones con borde, lado a lado.
5. Mobile: se sacaron las estrellitas que iban justo debajo del bloque nombre/arcano. Hay más aire entre el nombre y el arcano.

**Con pregunta:**
- La pregunta va **arriba de todo**, encima del nombre, y **sin la etiqueta "Tu pregunta"**.
- Tipografía de la pregunta: display más chica (26px desktop / 23px mobile) en verde salvia, con comillas grandes decorativas en `--carot-sage-divider`. Es la variante `QuestionText variant="comillas"`.
- Después vienen el nombre, el arcano debajo, la interpretación de la IA (sin cita) y las acciones.

## Archivos tocados
- `components/CardReading.tsx`:
  - Props nuevos: `design` (default `'identidad'`), `questionStyle` (default `'comillas'`), `showQuestionLabel` (default `false`), `arcanaBelow` (default `true`).
  - La rama desktop delega la columna de texto a `IdentityColumn`.
  - La rama mobile tiene condicionales para `design === 'identidad'`.
- `components/CardReadingDesktopDesigns.tsx` (nuevo): `IdentityColumn`, `QuestionText`, y las opciones descartadas `QuoteColumn` y `SheetColumn`.
- `.codeyam/isolation-props/CardReading.ts` / `.render.tsx`:
  - El escenario ahora es un objeto `{ design, cardN, desktop, question, interpretation, questionStyle, showQuestionLabel, arcanaBelow }`.
  - `desktop: true` hace que la captura use `100vw` en vez de 390px.
- `.codeyam/isolation-props/harness.tsx`: `StubInterpret` responde `/api/interpret` con un texto fijo durante el render. Así los escenarios con pregunta nunca llaman a Gemini ni guardan la pregunta en la base real (Neon).

## Escenarios
- Elegidos:
  - `cardreading-desktop-identidad`
  - `cardreading-mobile-identidad`
  - `cardreading-desktop-pregunta-comillas-sin-etiqueta`
  - `cardreading-mobile-pregunta-comillas-sin-etiqueta`
- Referencia del diseño anterior: `cardreading-desktop-clasica` (pasa `design: 'clasica'` explícito).
- Descartados, a borrar:
  - `cardreading-desktop-cita`, `cardreading-desktop-ficha`
  - `cardreading-desktop-pregunta-display` / `-liviana` / `-comillas`
  - `cardreading-mobile-pregunta-display` / `-liviana` / `-comillas`
  - `cardreading-desktop-identidad-pregunta`, `cardreading-mobile-identidad-pregunta`: quedaron renderizando los defaults nuevos, así que son duplicados de los `-comillas-sin-etiqueta`.

## Pendientes para formalizar
1. **Limpieza de lo descartado:**
   - Sacar `QuoteColumn`, `SheetColumn` y las variantes de `QuestionText` que no se usan (`actual`, `display`, `liviana`).
   - Colapsar los props de prototipo (`design`, `questionStyle`, `showQuestionLabel`, `arcanaBelow`) en el comportamiento fijo elegido.
   - Borrar la rama "clásica" vieja y los escenarios descartados.
2. **i18n:** hay textos fijos en el componente que conviene pasar a `lib/i18n.tsx`:
   - `Arcano` / `Arcanum`.
   - `Descargar` / `Download`, la etiqueta corta del botón mobile; desktop sigue usando `t.download` ("Descargar Imagen").
3. **Tests:** cubrir el orden pregunta → nombre → arcano → interpretación, que la etiqueta "Tu pregunta" no aparezca y la fila de acciones en ambos layouts.
4. El home mobile **no** cambia: se probaron dos variantes, se descartaron y se revirtieron.

## Plan de extracción (Deconstruct, paso 11)

Nada de `CardReadingDesktopDesigns.tsx`, `QuestionText`, `IdentityColumn`, `QuoteColumn` o `SheetColumn` está en el glosario. Sólo los referencian `components/CardReading.tsx` y `.codeyam/isolation-props/CardReading.{ts,render.tsx}`.

**Funciones puras → `lib/reading.ts` (+ `lib/reading.test.ts`)**
1. `originRoute(origin)` reemplaza a `ORIGIN_ROUTE` (CardReading.tsx:32-37, 121).
2. `navTitleFor(origin, t)` (CardReading.tsx:122-123).
3. `arcanumLine(card, t)` → "Arcano IX · El Ermitaño" (CardReading.tsx:359/365, Designs:143/149).
4. `readingBody({ question, interpreting, interpretation, card, lang, t })` → `{ text, pending }` (CardReading.tsx:227, 405-418).

**i18n → `lib/i18n.tsx`**
5. Claves nuevas `arcanum` (Arcano/Arcanum) y `downloadShort` (Descargar/Download).

**Hooks (un archivo cada uno, en `lib/`)**
6. `useCardFlip(cardN, instant)` (CardReading.tsx:64-79).
7. `useInterpretation(card, question, lang)` → `{ interpretation, interpreting }` (CardReading.tsx:84-119).
8. `useReadingActions(card, lang, t)` → `{ toast, savingImage, onShare, onDownload }` (CardReading.tsx:126-154).

**Componentes (uno por archivo, en `components/`)**
9. `ShareIcon.tsx` y `DownloadIcon.tsx` (CardReading.tsx:15-30).
10. `ReadingToast.tsx`: el aviso fijo (CardReading.tsx:156-179).
11. `DailyDateBadge.tsx`: etiqueta diaria + fecha. Recibe `align` y `size` porque aparece en los dos layouts (CardReading.tsx:202-209 y 328-335).
12. `SwayingCard.tsx`: el wrapper con el balanceo + `TarotCard`. Recibe `width` y `shadow` (CardReading.tsx:210-212 y 337-341).
13. `ReadingQuestion.tsx`: sólo la variante "comillas" de `QuestionText`, con prop `mobile` (Designs:90-98).
14. `CardIdentity.tsx`: nombre (h1) y el arcano debajo, con prop `mobile` para el tamaño y la alineación (Designs:141-144, CardReading.tsx:357-360).
15. `CardQuote.tsx`: la cita en itálica salvia, con prop `mobile` (Designs:156, CardReading.tsx:386-388).
16. `ReadingBody.tsx`: el párrafo de significado/interpretación con el color pending (Designs:160, CardReading.tsx:405-418).
17. `DrawAnotherButton.tsx`: el botón relleno; con `fullWidth` es la versión mobile (Designs:65-76/162, CardReading.tsx:425-430).
18. `ReadingActionLink.tsx`: link de desktop con ícono + texto (Designs:50-63/113-126).
19. `ReadingOutlineButton.tsx`: botón mobile con borde (CardReading.tsx:290-307, 432-443).
20. `ReadingActionsDesktop.tsx`: una fila con DrawAnother + Compartir + Descargar Imagen (Designs:161-166).
21. `ReadingActionsMobile.tsx`: DrawAnother a todo el ancho + el par Compartir/Descargar (CardReading.tsx:424-445).
22. `ReadingTextColumn.tsx`: la columna de desktop, en orden pregunta → identidad → cita (sólo sin pregunta) + estrellas → cuerpo → acciones. Reemplaza a `IdentityColumn`.
23. `ReadingDesktop.tsx`: `DesktopNav` + columna de la carta (DailyDateBadge, SwayingCard) + `ReadingTextColumn` (CardReading.tsx:196-286).
24. `ReadingMobile.tsx`: header + DailyDateBadge + SwayingCard + pregunta/identidad + cita + cuerpo + StarDividers + `ReadingActionsMobile` (CardReading.tsx:309-472).
25. `BackHeader.tsx`: se le agrega un `onBack` opcional para que el mobile lo reuse en lugar de su header en línea (CardReading.tsx:311-326).
26. `CardReading.tsx` queda en: hooks + `isDesktop ? <ReadingDesktop/> : <ReadingMobile/>` + `<ReadingToast/>`. Sin los props `design`, `questionStyle`, `showQuestionLabel` ni `arcanaBelow`.

**Borrado**
27. `components/CardReadingDesktopDesigns.tsx` completo, la rama "clásica" (desktop y mobile) y las ramas `design !== 'identidad'`.
28. Escenarios: los descartados más `cardreading-desktop-clasica`, que deja de existir (cita, ficha, pregunta-display/-liviana/-comillas ×2, identidad-pregunta ×2), junto con sus screenshots. Hay que actualizar `isolation-props/CardReading.ts` + `.render.tsx` para sacar `design`/`questionStyle`/`showQuestionLabel`/`arcanaBelow`.

**Tests**: `lib/reading.test.ts` para los puntos 1-4, y tests de componente para el orden pregunta → nombre → arcano → interpretación, la ausencia de "Tu pregunta" y las filas de acciones.