1. Füge ein semantisches Element hinzu, indem **Navigationselemente** untergebracht werden.
2. Lege für das Element eine CSS Klasse mit dem Namen "menu" an und weise dieser die Hintergrundfarbe `hsl(0, 0%, 80%)` zu.
3. Füge als Kindelement des Navigationselements eine **ungeordnete Liste** mit den drei Einträgen *Startseite*, *Dashboard* und *Meine Kurse* ein.
4. Entferne die Punkte vor den einzelnen `<li>`-Elemente. Dafür benötigst du eine neue CSS Klasse für das `<ul>`-Element!
5. Lege für die einzelnen `<li>`-Elemente über CSS Regeln mit dem Selektor `.menu>li` fest, dass diese ein Padding von 20px haben.
6. Aktuell ist die Navigationsleiste vertikal. Das liegt daran, dass die `<li>`-Elemente **Block** Elemente sind. Stelle diese auf Inline um, damit sie nichtmehr die ganze Breite einnehmen.