/* @ds-bundle: {"format":3,"namespace":"ElCarotDesignSystem_1067d9","components":[{"name":"ArcanaLabel","sourcePath":"components/brand/ArcanaLabel.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"StarDivider","sourcePath":"components/brand/StarDivider.jsx"},{"name":"TarotCard","sourcePath":"components/brand/TarotCard.jsx"},{"name":"Comment","sourcePath":"components/feedback/Comment.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"}],"sourceHashes":{"assets/cards.js":"9a71647f7dc0","components/brand/ArcanaLabel.jsx":"92ad3d68ee66","components/brand/Logo.jsx":"29a1f8a88488","components/brand/StarDivider.jsx":"730b1b877c27","components/brand/TarotCard.jsx":"7c9163af78d5","components/feedback/Comment.jsx":"7eee575ed434","components/forms/Button.jsx":"d0b31438f34a","ui_kits/desktop/DesktopApp.jsx":"2187ec80bfba","ui_kits/mobile/About.jsx":"9523834ee99a","ui_kits/mobile/CardReading.jsx":"426de508d3d3","ui_kits/mobile/Comments.jsx":"6b0823b906ca","ui_kits/mobile/Footer.jsx":"5b15ceab36f4","ui_kits/mobile/Gallery.jsx":"838cef1029d4","ui_kits/mobile/Home.jsx":"dd2db9d020de","ui_kits/mobile/MessageIntro.jsx":"e070b11c4d11","ui_kits/mobile/MobileApp.jsx":"0140f62aa1f1","ui_kits/mobile/QuestionInput.jsx":"7b945d57d6ea","ui_kits/mobile/StarField.jsx":"624534054aab","ui_kits/mobile/i18n.jsx":"dcadd8790d8a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElCarotDesignSystem_1067d9 = window.ElCarotDesignSystem_1067d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/cards.js
try { (() => {
/* El Carot — the 22 major arcana. Shared data for the UI kits.
 * Loaded via <script src> ; exposes window.CAROT_CARDS.
 * `img` paths are relative to the project root — adjust the prefix per page.
 * Meanings & quotes are the brand's full texts (El Carot - significados),
 * with English translations (meaning_en / quote_en) for the EN locale. */
window.CAROT_CARDS = [{
  n: 0,
  rom: "0",
  name: "Charly García",
  arcana: "El Loco",
  img: "00-el-loco.png",
  meaning: "Charly encarna al Arcano Ø, El Loco. Representa la carta de los primeros pasos, del impulso creativo y de los comienzos caóticos. Es el espíritu libre, en movimiento, impredecible, que confía en su intuición. Incomprendido a veces, pero fiel a sí mismo. Desapegado de lo material, abierto a lo nuevo, su energía es puro potencial sin moldear. Como Charly, avanza sin miedo por el borde, arriesgando todo en nombre de lo auténtico. El Loco no teme al abismo, pero andar con la cabeza en las nubes a veces nos hace caminar muy cerca del precipicio. Atento a dónde pisas.",
  meaning_en: "Charly embodies Arcanum Ø, The Fool. It is the card of first steps, of creative impulse and chaotic beginnings. He is the free spirit — in motion, unpredictable, trusting his intuition. Misunderstood at times, but true to himself. Detached from the material, open to the new, his energy is pure unshaped potential. Like Charly, he walks fearlessly along the edge, risking everything in the name of the authentic. The Fool does not fear the abyss, but living with your head in the clouds can lead you to walk too close to the cliff. Watch where you step.",
  quote: "Hubo un tiempo que fue hermoso, y fui libre de verdad",
  quote_en: "There was a time that was beautiful, and I was truly free"
}, {
  n: 1,
  rom: "I",
  name: "Charles Chaplin",
  arcana: "El Mago",
  img: "01-el-mago.png",
  meaning: "Chaplin es el Arcano #1, número de la creación y de la individualidad. El Mago tiene el poder de tomar el vacío y darle forma. Une cielo y tierra. Observa lo que lo rodea y tiene la capacidad de transformar la realidad usando habilidades y recursos disponibles. De actor cómico a cineasta influyente, Chaplin supo convertir talento, ingenio y humor en “magia” narrativa. Canaliza lo espiritual y lo físico para lograr sus objetivos. Tenemos todo lo que necesitamos para hacer magia, y el impulso necesario para iniciar cualquier proyecto.",
  meaning_en: "Chaplin is Arcanum #1, the number of creation and individuality. The Magician has the power to take the void and give it form. He unites heaven and earth. He observes his surroundings and can transform reality using the skills and resources at hand. From comic actor to influential filmmaker, Chaplin turned talent, wit and humor into narrative “magic.” He channels the spiritual and the physical to reach his goals. We already have everything we need to make magic, and the drive required to begin any project.",
  quote: "El verdadero significado de las cosas se encuentra al tratar de decir las mismas cosas con otras palabras",
  quote_en: "The true meaning of things is found in trying to say the same things in other words"
}, {
  n: 2,
  rom: "II",
  name: "Cleopatra",
  arcana: "La Sacerdotisa",
  img: "02-la-sacerdotisa.png",
  meaning: "La Sacerdotisa es la guardiana del gran inconsciente. Representa el misterio, la sabiduría interior, lo oculto y lo femenino intuitivo. Cleopatra encarna este arquetipo desde su poder silencioso, su inteligencia estratégica y su magnetismo enigmático. Como la Sacerdotisa que guarda secretos tras el velo del templo, Cleopatra supo leer el mundo político y espiritual de su tiempo, combinando seducción con conocimiento. Su figura conecta con la intuición profunda y el saber ancestral que no necesita mostrarse para imponerse: simplemente se manifiesta y transforma.",
  meaning_en: "The High Priestess is the keeper of the great unconscious. She represents mystery, inner wisdom, the hidden and the intuitive feminine. Cleopatra embodies this archetype through her silent power, her strategic intelligence and her enigmatic magnetism. Like the Priestess who guards secrets behind the temple veil, Cleopatra knew how to read the political and spiritual world of her time, blending seduction with knowledge. Her figure connects with deep intuition and ancestral knowing that needs no display to prevail: it simply manifests and transforms.",
  quote: "Como el amor ama lo que es bello, es preciso concluir que el amor es amante de la sabiduría",
  quote_en: "Since love loves what is beautiful, we must conclude that love is a lover of wisdom"
}, {
  n: 3,
  rom: "III",
  name: "Cher",
  arcana: "La Emperatriz",
  img: "03-la-emperatriz.png",
  meaning: "La Emperatriz, símbolo de abundancia, fertilidad y creatividad, refleja el poder femenino en su máxima expresión. Cher, diva e icono de la música y la moda, encarna esta carta con su fuerza, elegancia y reinvención constante. A veces caprichosa, ella es creadora de su propio mundo, irradiando belleza, seguridad y sensualidad sin miedo a mostrarse auténtica. Su energía fértil inspira a romper esquemas, florecer y manifestar sueños en realidad. Cher representa la esencia vital de la Emperatriz: amor, poder y creación en armonía.",
  meaning_en: "The Empress, symbol of abundance, fertility and creativity, reflects feminine power at its fullest. Cher — diva and icon of music and fashion — embodies this card through her strength, elegance and constant reinvention. Sometimes capricious, she is the creator of her own world, radiating beauty, confidence and sensuality without fear of being authentic. Her fertile energy inspires us to break the mold, to bloom and bring dreams into reality. Cher is the vital essence of the Empress: love, power and creation in harmony.",
  quote: "Mom, I am a rich man",
  quote_en: "Mom, I am a rich man"
}, {
  n: 4,
  rom: "IV",
  name: "Carlomagno",
  arcana: "El Emperador",
  img: "04-el-emperador.png",
  meaning: "El Emperador simboliza orden, estructura, liderazgo y soberanía. Carlomagno, padre de Europa, encarna este poder organizador que funda leyes y construye imperios. Es la carta número 4, representa estabilidad y materia, los cuatro elementos en equilibrio y los puntos cardinales. Es el principio activo masculino que crea, defiende y guía la civilización. Su autoridad equilibra poder y amor, mostrando que el verdadero liderazgo nace del control, la responsabilidad y la sabiduría para proteger y consolidar el orden. Carlomagno inspira firmeza y visión para conquistar y unificar, siendo símbolo de gobierno y tradición.",
  meaning_en: "The Emperor symbolizes order, structure, leadership and sovereignty. Charlemagne, father of Europe, embodies this organizing power that founds laws and builds empires. As card number 4, he represents stability and matter, the four elements in balance and the cardinal points. He is the active masculine principle that creates, defends and guides civilization. His authority balances power and love, showing that true leadership is born of control, responsibility and the wisdom to protect and consolidate order. Charlemagne inspires firmness and vision to conquer and unify — a symbol of government and tradition.",
  quote: "El verdadero poder nace del equilibrio entre la autoridad firme y el amor que protege.",
  quote_en: "True power is born of the balance between firm authority and protecting love."
}, {
  n: 5,
  rom: "V",
  name: "Carlín Calvo",
  arcana: "El Papa",
  img: "05-el-papa.png",
  meaning: "El Papa es guía espiritual y puente entre mundos, símbolo de sabiduría y ternura. Carlín Calvo, con su profundidad y calidez, encarna este rol de maestro compasivo que enseña desde la emoción, el humor y la fragilidad. Como el Papa, Carlín nos invita a creer en algo más allá, en el amor que sana y en la fe que acompaña sin imponer. Recuerda que el verdadero maestro no impone, acompaña. Su legado es amoroso, espiritual y profundamente humano, conectando generaciones y dejando una huella imborrable.",
  meaning_en: "The Hierophant is a spiritual guide and bridge between worlds, a symbol of wisdom and tenderness. Carlín Calvo, with his depth and warmth, embodies this compassionate teacher who instructs through emotion, humor and fragility. Like the Hierophant, Carlín invites us to believe in something beyond — in healing love and in faith that accompanies without imposing. He reminds us that the true teacher does not impose, but walks beside us. His legacy is loving, spiritual and deeply human, connecting generations and leaving an indelible mark.",
  quote: "El maestro auténtico no solo guía, sino que camina a tu lado con compasión.",
  quote_en: "The true teacher does not merely guide; he walks beside you with compassion."
}, {
  n: 6,
  rom: "VI",
  name: "Caramelito",
  arcana: "Los Enamorados",
  img: "06-los-enamorados.png",
  meaning: "Los Enamorados simbolizan la elección, el deseo y la unión de opuestos, invitándonos a escuchar el llamado del corazón. Como en un Jardín del Edén, Caramelito aparece como un ángel que integra con dulzura lo masculino y femenino, razón y pasión, dejando atrás el control para abrirnos a nuevas opciones. Su ternura y presencia entrañable representan un amor puro e inocente, que en “El Carot” nos recuerda que elegir con el corazón, aunque simple, es un acto profundo y el inicio de la vida social con dulzura y amor.",
  meaning_en: "The Lovers symbolize choice, desire and the union of opposites, inviting us to hear the call of the heart. As in a Garden of Eden, Caramelito appears as an angel who sweetly integrates the masculine and feminine, reason and passion, letting go of control to open us to new possibilities. His tenderness and endearing presence represent a pure, innocent love — reminding us in El Carot that choosing with the heart, though simple, is a profound act and the beginning of a social life lived with sweetness and love.",
  quote: "La magia del amor radica en la sencillez de un abrazo y la pureza de una sonrisa.",
  quote_en: "The magic of love lies in the simplicity of an embrace and the purity of a smile."
}, {
  n: 7,
  rom: "VII",
  name: "Cristóbal Colón",
  arcana: "El Carro",
  img: "07-el-carro.png",
  meaning: "Esta carta representa la acción en todos los planos, la partida hacia lo nuevo y lo desconocido, con coraje para abandonar la seguridad. El Carro simboliza avance, conquista y fuerza de voluntad. Cristóbal Colón encarna esta energía de acción decidida, impulsado a ir más allá de los límites conocidos. Como el Carro, avanzó entre dudas y tormentas, guiado por una visión única. Esta carta invita a tomar el control del rumbo propio, con valentía y determinación, recordando que solo con voluntad firme se logra la verdadera conquista.",
  meaning_en: "This card represents action on every plane — the departure toward the new and the unknown, with the courage to leave safety behind. The Chariot symbolizes advance, conquest and willpower. Columbus embodies this energy of decisive action, driven to go beyond known limits. Like the Chariot, he pressed on through doubts and storms, guided by a singular vision. The card invites us to take control of our own course with bravery and determination, recalling that only firm will achieves true conquest.",
  quote: "Nunca se debe temer a ir adelante, aunque el camino sea incierto.",
  quote_en: "One should never fear going forward, even when the path is uncertain."
}, {
  n: 8,
  rom: "VIII",
  name: "El Chapulín Colorado",
  arcana: "La Justicia",
  img: "11-la-fuerza.png",
  meaning: "La Justicia representa equilibrio, causa y efecto, y reparación. El Chapulín Colorado, torpe pero justo, encarna la ética del corazón: un sentido del bien que surge de la empatía, no de libros. Su presencia, como la Justicia, aparece cuando todo parece perdido para restaurar lo que fue roto. El Chapu simboliza un estado de estabilidad material y espiritual, invitando a una introspección profunda y objetiva. Su espada corta lo superfluo y pone orden, marcando el momento de dejar el pasado atrás y actuar con astucia y precisión en el presente, buscando siempre la justicia interior.",
  meaning_en: "Justice represents balance, cause and effect, and repair. El Chapulín Colorado — clumsy but fair — embodies the ethics of the heart: a sense of good that springs from empathy, not from books. Like Justice, his presence appears when all seems lost, to restore what was broken. El Chapu symbolizes a state of material and spiritual stability, inviting deep and objective introspection. His sword cuts away the superfluous and sets order, marking the moment to leave the past behind and act with cunning and precision in the present, always seeking inner justice.",
  quote: "No contaban con mi astucia.",
  quote_en: "They weren\u2019t counting on my cunning."
}, {
  n: 9,
  rom: "IX",
  name: "Confucio",
  arcana: "El Ermitaño",
  img: "09-el-ermitano.png",
  meaning: "El Ermitaño simboliza la búsqueda interior y la sabiduría cultivada en silencio. Como Confucio, el sabio por excelencia, camina con su lámpara para iluminar a otros desde la coherencia, no el protagonismo. Invita a entrar en crisis y elevar la luz interior para guiar a otros. Sube a la montaña y contempla en soledad, lejos del ruido del mundo. Busca retrospectivamente y conecta con su propia sabiduría. Da un paso hacia lo desconocido; en este sentido, puede representar tanto la máxima comprensión como un estado de crisis profunda. El Ermitaño deja todo para ir en busca de verdad.",
  meaning_en: "The Hermit symbolizes the inner search and the wisdom cultivated in silence. Like Confucius, the sage par excellence, he walks with his lantern to light the way for others through coherence, not the spotlight. He invites us to enter crisis and raise the inner light to guide others. He climbs the mountain and contemplates in solitude, far from the noise of the world. He searches inward and connects with his own wisdom. He takes a step toward the unknown; in this sense he can represent both the highest understanding and a state of deep crisis. The Hermit leaves everything to go in search of truth.",
  quote: "El silencio es un amigo que jamás traiciona.",
  quote_en: "Silence is a friend who never betrays."
}, {
  n: 10,
  rom: "X",
  name: "Cucumelo",
  arcana: "La Rueda de la Fortuna",
  img: "10-la-rueda.png",
  meaning: "La Rueda de la Fortuna representa el cambio constante, los ciclos impredecibles, el destino en movimiento. Para entrar en nuevos mundos se requiere de una mente poco controladora y de sentidos perceptivos, despiertos. Esta carta representa el ciclo sin fin de la vida, el movimiento perpetuo del universo. Se encuentra en el centro entre el pasado y el futuro. Podemos reemplazar el miedo que aparece ante el cambio por maneras amorosas y entusiastas. Es un buen momento para abrir la percepción y estar disponible para sorprenderte.",
  meaning_en: "The Wheel of Fortune represents constant change, unpredictable cycles, destiny in motion. To enter new worlds you need a mind that does not grasp for control and senses that are perceptive and awake. This card stands for the endless cycle of life, the perpetual movement of the universe. It sits at the center between past and future. We can replace the fear that arises before change with loving, enthusiastic ways. It is a good moment to open your perception and be available to be surprised.",
  quote: "A veces hay que perderse para encontrar otro sentido.",
  quote_en: "Sometimes you have to lose your way to find another meaning."
}, {
  n: 11,
  rom: "XI",
  name: "El Che",
  arcana: "La Fuerza",
  img: "08-la-justicia.png",
  meaning: "La Fuerza representa el dominio de uno mismo, el coraje sereno y la potencia interior que no necesita imponerse. No es fuerza bruta, sino templanza, convicción y confianza. El Che encarna esta energía: su lucha no fue solo política, fue espiritual, nacida de una pasión inquebrantable por la justicia. Como la mujer que doma al león, supo canalizar su fuego interno con idealismo y entrega. Esta carta habla del poder que surge cuando se alinean cuerpo, mente y espíritu. El Che representa la fuerza que no grita, que no humilla, pero transforma. Una fuerza ética, valiente y profundamente humana. La fuerza reside en saber cuando dejarnos guiar por los instintos y cuando hacerlos callar.",
  meaning_en: "Strength represents self-mastery, serene courage and the inner power that has no need to impose itself. It is not brute force, but temperance, conviction and trust. El Che embodies this energy: his struggle was not only political, it was spiritual, born of an unshakable passion for justice. Like the woman who tames the lion, he channeled his inner fire with idealism and devotion. This card speaks of the power that arises when body, mind and spirit align. El Che is the strength that does not shout, that does not humiliate, but transforms — an ethical, brave and deeply human force. Strength lies in knowing when to follow our instincts and when to quiet them.",
  quote: "La revolución se lleva en el corazón, no en la boca para vivir de ella.",
  quote_en: "Revolution is carried in the heart, not in the mouth to live off it."
}, {
  n: 12,
  rom: "XII",
  name: "Cablin",
  arcana: "El Colgado",
  img: "12-el-colgado.png",
  meaning: "El Colgado representa una pausa necesaria, un momento de inversión de perspectiva, donde el sacrificio abre la puerta a una comprensión más profunda. Cablin, con Claudio Morgado colgado en pantalla, es imagen literal y simbólica de ese estado suspendido, entre lo absurdo y lo revelador. Esta carta no habla de inacción, sino de rendición consciente: dejar de forzar para ver desde otro ángulo. El Colgado es entrega lúdica, tiempo detenido, espera fértil. Nos invita a soltar el control, a dejar que la transformación ocurra desde el no-hacer, desde el mirar con otros ojos. A veces, colgarse es el primer paso para despertar.",
  meaning_en: "The Hanged Man represents a necessary pause, a moment when perspective inverts and sacrifice opens the door to deeper understanding. Cablin — Claudio Morgado hanging on screen — is the literal and symbolic image of that suspended state, between the absurd and the revealing. This card does not speak of inaction but of conscious surrender: to stop forcing, in order to see from another angle. The Hanged Man is playful surrender, time held still, fertile waiting. It invites us to release control, to let transformation happen through non-doing, through seeing with new eyes. Sometimes hanging upside down is the first step to waking up.",
  quote: "El que se cuelga, a veces, ve lo que nadie más está mirando.",
  quote_en: "The one who hangs sometimes sees what no one else is looking at."
}, {
  n: 13,
  rom: "XIII",
  name: "Cara Cortada",
  arcana: "La Muerte",
  img: "13-la-muerte.png",
  meaning: "La Muerte es transformación. Representa el fin de una etapa y el inicio de otra, el corte necesario para que algo nuevo pueda surgir. Cara Cortada, con su rostro marcado y su destino trágico, encarna esta energía implacable. Como la carta, trae un cambio irreversible, que arrasa con lo viejo, sin pedir permiso. Representa la ruptura con lo establecido, el precio del deseo desmedido y la oportunidad oculta en cada caída. La Muerte no es castigo, es tránsito. Nos invita a soltar, a dejar morir lo que ya no somos, para renacer más livianos, más verdaderos. Lo que duele hoy, mañana libera.",
  meaning_en: "Death is transformation. It represents the end of one stage and the start of another — the cut required for something new to arise. Cara Cortada (Scarface), with his marked face and tragic fate, embodies this implacable energy. Like the card, he brings irreversible change that sweeps away the old without asking permission. He represents the break with the established, the price of unbridled desire, and the opportunity hidden in every fall. Death is not punishment, it is passage. It invites us to let go, to let die what we no longer are, so we may be reborn lighter, truer. What hurts today sets us free tomorrow.",
  quote: "Para nacer de nuevo, primero hay que dejar morir lo viejo.",
  quote_en: "To be born again, you must first let the old die."
}, {
  n: 14,
  rom: "XIV",
  name: "Cristo",
  arcana: "La Templanza",
  img: "14-la-templanza.png",
  meaning: "Cristo encarna el arquetipo de la Templanza: unión de lo humano y lo divino, equilibrio entre materia y espíritu. Representa la capacidad de transformar el dolor en compasión, el conflicto en armonía. Como el ángel de la carta, canaliza energías opuestas y las integra con amor. No impone, fluye. Su mensaje es el de la moderación, la fe activa y el poder sanador del corazón abierto. La Templanza es alquimia espiritual, y Cristo, con su entrega, muestra que el verdadero milagro es la transformación interna, ser puente entre el cielo y la tierra.",
  meaning_en: "Christ embodies the archetype of Temperance: the union of the human and the divine, the balance between matter and spirit. It represents the capacity to transform pain into compassion, conflict into harmony. Like the angel of the card, he channels opposing energies and integrates them with love. He does not impose; he flows. His message is one of moderation, active faith and the healing power of an open heart. Temperance is spiritual alchemy, and Christ, through his self-giving, shows that the true miracle is inner transformation — to be a bridge between heaven and earth.",
  quote: "No se turbe vuestro corazón, ni tenga miedo.",
  quote_en: "Let not your heart be troubled, neither let it be afraid."
}, {
  n: 15,
  rom: "XV",
  name: "Cacho Castaña",
  arcana: "El Diablo",
  img: "15-el-diablo.png",
  meaning: "El Diablo representa la tentación, el deseo sin filtros, la sombra que habita en lo profundo del ser. Nos muestra la vía hacia nuestras partes ocultas, recordándonos que para alcanzar la luz debemos aceptar y honrar nuestro lado animal. Cacho Castaña, con su voz rasposa y su imagen de galán canalla, encarna esa figura provocadora que no oculta nada: el placer, el vicio, pero también el falso orgullo, la calumnia, la manipulación y el abuso de poder. Es el espejo de lo que reprimimos: el goce, el vicio, la trampa del ego. Esta carta no juzga, revela. Nos invita a mirar de frente nuestras ataduras y preguntarnos si aún tienen sentido. Porque solo reconociendo al Diablo, podemos dejar de servirle.",
  meaning_en: "The Devil represents temptation, unfiltered desire, the shadow that dwells in the depths of the self. He shows us the way to our hidden parts, reminding us that to reach the light we must accept and honor our animal side. Cacho Castaña, with his raspy voice and rogue-charmer image, embodies that provocative figure who hides nothing: pleasure, vice, but also false pride, slander, manipulation and the abuse of power. He is the mirror of what we repress: enjoyment, vice, the trap of the ego. This card does not judge, it reveals. It invites us to face our bonds head-on and ask whether they still make sense — because only by recognizing the Devil can we stop serving him.",
  quote: "El amor es el único vicio que vale la pena.",
  quote_en: "Love is the only vice worth having."
}, {
  n: 16,
  rom: "XVI",
  name: "Chano",
  arcana: "La Torre",
  img: "16-la-torre.png",
  meaning: "La Torre simboliza la destrucción repentina, la sacudida, el derrumbe de estructuras que creíamos firmes, y la ruptura con lo establecido para dar paso a la renovación. La energía del rayo viene a liberar una estructura que no da para más. Chano, con su historia de altos y bajos, encarna esta carta: un artista que enfrentó caídas profundas y revelaciones dolorosas. Representa ese momento explosivo que destruye para liberar, se mueve el piso, pero lo estructural se mantiene. La Torre nos recuerda que, aunque el caos asuste, es necesario para abrir paso a la luz y al crecimiento auténtico. Es un buen momento para cuidarse de los excesos.",
  meaning_en: "The Tower symbolizes sudden destruction, the shock, the collapse of structures we believed firm, and the break with the established to make way for renewal. The lightning\u2019s energy comes to free a structure that can no longer hold. Chano, with his story of highs and lows, embodies this card: an artist who faced deep falls and painful revelations. It represents that explosive moment that destroys in order to liberate — the ground shakes, but what is essential remains. The Tower reminds us that, frightening as chaos is, it is necessary to make way for light and authentic growth. It is a good time to be careful of excess.",
  quote: "El mundo está cambiando y ya no tiene explicación",
  quote_en: "The world is changing and no longer has an explanation"
}, {
  n: 17,
  rom: "XVII",
  name: "Cristian Castro",
  arcana: "La Estrella",
  img: "17-la-estrella.png",
  meaning: "La desnudez de Cristian representa al ser que ha llegado a la pureza, aquel que toma contacto con su esencia verdadera. Revela un alma que ha tocado su esencia y brilla sin máscaras. La Estresha no tiene nada que ocultar, actúa en el mundo irrigándolo, nutriéndolo con sus talentos e inteligencia. Lo que recibe del cosmos, lo vierte en la tierra para poder fertilizarla. Su generosidad es fuente inagotable, dando y recibiendo en un mismo movimiento de purificación. Representa al guía espiritual que llevamos dentro. Se dice que no hay cartas mejores que otras, pero en el Carot, esta es la carta estresha.",
  meaning_en: "Cristian\u2019s nakedness represents the being who has reached purity, the one who makes contact with their true essence. It reveals a soul that has touched its core and shines without masks. The Star has nothing to hide; it acts in the world by irrigating it, nourishing it with its talents and intelligence. What it receives from the cosmos, it pours onto the earth to make it fertile. Its generosity is an inexhaustible source, giving and receiving in a single movement of purification. It represents the spiritual guide we carry within. They say no card is better than another, but in El Carot, this is the star card.",
  quote: "Un manantial azul que me llena de amor",
  quote_en: "A blue spring that fills me with love"
}, {
  n: 18,
  rom: "XVIII",
  name: "Chayanne",
  arcana: "La Luna",
  img: "18-la-luna.png",
  meaning: "La Luna representa lo inconsciente, lo cíclico, la ilusión y los sueños. Chayanne, figura del deseo y la fantasía de generaciones, vibra en esta energía de romance, idealización y misterio. Conecta con el lado nocturno del alma: aquello que no entendemos pero sentimos profundamente. Nos invita a entrar en contacto con nuestra vulnerabilidad, nuestro lado femenino y emocional, iluminando temores, deseos y pasiones que emergen de las aguas profundas del inconsciente. La Luna es sinónimo de sueños, visiones e imaginación, de intuición, ilusión y amor total. Dejarse atravesar por sentimientos tan profundos es la llave que abre el camino hacia el autoconocimiento.",
  meaning_en: "The Moon represents the unconscious, the cyclical, illusion and dreams. Chayanne — a figure of desire and fantasy for generations — vibrates in this energy of romance, idealization and mystery. He connects with the nocturnal side of the soul: that which we do not understand but feel deeply. He invites us into contact with our vulnerability, our feminine and emotional side, illuminating fears, desires and passions that rise from the deep waters of the unconscious. The Moon is a synonym for dreams, visions and imagination, for intuition, illusion and total love. Letting yourself be moved by such deep feelings is the key that opens the path to self-knowledge.",
  quote: "Una noche de luna a la orilla del mar es el lugar perfecto para conversar",
  quote_en: "A moonlit night by the shore is the perfect place to talk"
}, {
  n: 19,
  rom: "XIX",
  name: "Celia Cruz",
  arcana: "El Sol",
  img: "19-el-sol.png",
  meaning: "El Sol es alegría, vitalidad y claridad, luz que disipa sombras y celebra la vida en plenitud. Representa éxito, confianza y crecimiento personal, siendo también símbolo del padre protector que guía con energía y calidez. Celia Cruz encarna esta carta con su risa contagiosa, energía explosiva y su inconfundible ¡Azúcar! Su brillo no solo ilumina, sino que contagia alegría y autenticidad. El Sol es felicidad sin culpa, luz que despierta y calor que abraza, como la voz y espíritu de Celia.",
  meaning_en: "The Sun is joy, vitality and clarity — light that dispels shadows and celebrates life in fullness. It represents success, confidence and personal growth, and is also a symbol of the protective father who guides with energy and warmth. Celia Cruz embodies this card with her contagious laugh, explosive energy and her unmistakable ¡Azúcar! Her brilliance not only shines, it spreads joy and authenticity. The Sun is happiness without guilt, light that awakens and warmth that embraces — like the voice and spirit of Celia.",
  quote: "La vida es un carnaval y las penas se van bailando.",
  quote_en: "Life is a carnival, and sorrows dance away."
}, {
  n: 20,
  rom: "XX",
  name: "Coco Chanel",
  arcana: "El Juicio",
  img: "20-el-juicio.png",
  meaning: "El Juicio es despertar, renacimiento, llamado interior. Representa el momento en que el alma escucha su verdad y se libera del pasado para avanzar liviana hacia lo nuevo. Coco Chanel encarna esta carta como figura que rompió moldes, resucitando a sí misma y a una época desde su visión audaz. El Juicio es ruptura y revelación: Chanel no solo creó moda, creó una nueva forma de ser mujer y definió nuevos estándares de belleza. Su vida fue un llamado a la autenticidad, una voz que emerge desde lo profundo para marcar un antes y un después. Es la elegancia de atreverse a ser.",
  meaning_en: "Judgement is awakening, rebirth, the inner call. It represents the moment the soul hears its truth and frees itself from the past to move lightly toward the new. Coco Chanel embodies this card as a figure who broke molds, resurrecting herself and an entire era through her bold vision. Judgement is rupture and revelation: Chanel did not only create fashion, she created a new way of being a woman and defined new standards of beauty. Her life was a call to authenticity, a voice rising from the depths to mark a before and an after. It is the elegance of daring to be.",
  quote: "Mi vida no me gustaba, así que la cambié.",
  quote_en: "I didn\u2019t like my life, so I changed it."
}, {
  n: 21,
  rom: "XXI",
  name: "Deepak Chopra",
  arcana: "El Mundo",
  img: "21-el-mundo.png",
  meaning: "El Mundo es la carta final del viaje de los Arcanos Mayores: representa la realización, la totalidad, la integración del ser. Marca el cierre de un ciclo evolutivo y la apertura consciente hacia uno nuevo. Chopra encarna esta energía con su visión integradora entre ciencia y espiritualidad, siendo símbolo de armonía, unidad y despertar. El Mundo es danza cósmica, presencia plena, conexión con el todo. Chopra nos recuerda que el universo está en nosotros y que al alinearnos con su sabiduría, reconocemos que ya somos completos. Es el alma que ya no busca, sino que reconoce que siempre fue parte del todo.",
  meaning_en: "The World is the final card of the Major Arcana\u2019s journey: it represents fulfillment, wholeness, the integration of the self. It marks the close of one evolutionary cycle and the conscious opening toward a new one. Chopra embodies this energy with his integrating vision between science and spirituality, a symbol of harmony, unity and awakening. The World is a cosmic dance, full presence, connection with the whole. Chopra reminds us that the universe is within us, and that by aligning with its wisdom we recognize we are already complete. It is the soul that no longer searches, but recognizes it was always part of the whole.",
  quote: "Tú no estás en el universo, tú eres el universo, una parte inseparable de él.",
  quote_en: "You are not in the universe, you are the universe, an inseparable part of it."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/cards.js", error: String((e && e.message) || e) }); }

// components/brand/ArcanaLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wide-tracked uppercase label used throughout the deck — the arcana name
 * under a character ("LA SACERDOTISA"), section eyebrows, and Roman numerals.
 * Defaults to the body serif in small-caps spacing; pass `display` for the
 * heavier display serif.
 */
function ArcanaLabel({
  children,
  display = false,
  size = 'sm',
  color = 'var(--carot-ink)',
  as = 'span',
  style = {},
  ...rest
}) {
  const sizes = {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: display ? 'var(--font-display)' : 'var(--font-body)',
      fontWeight: 700,
      fontSize: sizes[size] || sizes.sm,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ArcanaLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArcanaLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/StarDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The El Carot eight-point star — the deck's signature glyph, repeated across
 * card backs, dividers and section breaks. Renders one or more stars in a row.
 */
function StarDivider({
  count = 3,
  size = 16,
  gap = 14,
  color = 'var(--carot-ink)',
  style = {},
  ...rest
}) {
  const Star = () => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0 L14 8 L22 6 L16 12 L22 18 L14 16 L12 24 L10 16 L2 18 L8 12 L2 6 L10 8 Z"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: `${gap}px`,
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i
  })));
}
Object.assign(__ds_scope, { StarDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StarDivider.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The "EL CAROT" wordmark, set in the display serif with the wide tarot
 * letterspacing. Optionally short ("CAROT") and optionally followed by the
 * three-star divider, as seen in the app header and footer.
 */
function Logo({
  short = false,
  size = 'md',
  color = 'var(--carot-ink)',
  divider = true,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: '1.5rem',
    md: '2.25rem',
    lg: '3rem',
    xl: '4rem'
  };
  const fs = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.4em',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      letterSpacing: '0.06em',
      color,
      lineHeight: 1,
      textTransform: 'uppercase'
    }
  }, short ? 'Carot' : 'El Carot'), divider ? /*#__PURE__*/React.createElement(__ds_scope.StarDivider, {
    count: 3,
    size: Math.round(parseFloat(fs) * 6),
    gap: Math.round(parseFloat(fs) * 5),
    color: color
  }) : null);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/TarotCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A single El Carot tarot card. Shows the patterned back or a character face,
 * with a 3D flip between them. The face is the real card artwork (a tall
 * 0.535 aspect image that already includes its own frame, name plate and
 * arcana label), so the component just frames and flips it.
 */
function TarotCard({
  face = null,
  // image src of the card artwork
  back = null,
  // image src of the patterned back (falls back to sage field)
  flipped = false,
  // false = show back, true = show face
  width = 220,
  alt = '',
  onClick,
  style = {},
  ...rest
}) {
  const radius = 'var(--radius-lg)';
  const faceStyle = {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    borderRadius: radius,
    overflow: 'hidden',
    boxShadow: 'var(--shadow-card)'
  };
  const SageBack = () => /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--carot-sage-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--carot-ink)',
      borderRadius: radius
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "46%",
    viewBox: "0 0 24 24",
    fill: "var(--carot-cream)",
    stroke: "var(--carot-ink)",
    strokeWidth: "0.5",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0 L14 8 L22 6 L16 12 L22 18 L14 16 L12 24 L10 16 L2 18 L8 12 L2 6 L10 8 Z"
  })));
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      width: typeof width === 'number' ? `${width}px` : width,
      aspectRatio: '0.535',
      perspective: '1400px',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform .7s cubic-bezier(.4,.1,.2,1)',
      transformStyle: 'preserve-3d',
      transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: faceStyle
  }, back ? /*#__PURE__*/React.createElement("img", {
    src: back,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement(SageBack, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...faceStyle,
      transform: 'rotateY(180deg)'
    }
  }, face ? /*#__PURE__*/React.createElement("img", {
    src: face,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      background: 'var(--carot-cream)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--carot-cream)',
      borderRadius: radius,
      border: '2px solid var(--carot-ink)'
    }
  }))));
}
Object.assign(__ds_scope, { TarotCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TarotCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Comment.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * A single reader comment, no login required. Shows the visitor's name in the
 * display serif and their message in the body serif, separated by a thin
 * hairline — the lightweight community note style for El Carot.
 */
function Comment({
  name,
  text,
  nameColor = 'var(--carot-ink)',
  textColor = 'var(--text-muted)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: nameColor,
      marginBottom: '4px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: textColor
    }
  }, text));
}
Object.assign(__ds_scope, { Comment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Comment.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * El Carot button. Three variants drawn from the deck's mobile UI:
 *  - primary: solid sage block, dark ink label, gently rounded (e.g. "Elegir otra carta")
 *  - outline: sage keyline on transparent (secondary on parchment)
 *  - text:    underlined inline action with an optional leading icon
 *             (e.g. "Compartir", "Descargar imagen como Wallpaper")
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  fullWidth = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      font: 'var(--text-sm)'
    },
    md: {
      padding: '14px 22px',
      font: 'var(--text-base)'
    },
    lg: {
      padding: '18px 28px',
      font: 'var(--text-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: s.font,
    lineHeight: 1.1,
    letterSpacing: '0.01em',
    cursor: 'pointer',
    transition: 'background-color .18s ease, color .18s ease, opacity .18s ease, transform .06s ease',
    width: fullWidth ? '100%' : 'auto',
    border: 'none',
    background: 'none',
    color: 'var(--carot-ink)'
  };
  const variants = {
    primary: {
      background: 'var(--carot-sage)',
      color: 'var(--text-on-sage)',
      padding: s.padding,
      borderRadius: 'var(--radius-md)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--carot-ink)',
      padding: s.padding,
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--carot-sage)'
    },
    text: {
      padding: '6px 0',
      color: 'var(--carot-ink)',
      borderBottom: '1.5px solid var(--carot-ink)',
      borderRadius: 0,
      gap: '12px'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop/DesktopApp.jsx
try { (() => {
const DS = window.ElCarotDesignSystem_1067d9;
const {
  Logo,
  StarDivider,
  ArcanaLabel,
  TarotCard,
  Button,
  Comment
} = DS;
const ShareI = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8.6",
  y1: "13.5",
  x2: "15.4",
  y2: "17.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "15.4",
  y1: "6.5",
  x2: "8.6",
  y2: "10.5"
}));
const DownI = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21h16"
}));
const IgI = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "6.5",
  r: "1.1",
  fill: "currentColor",
  stroke: "none"
}));
const DESK_SEED = [{
  name: "Lucía",
  text: "Me salió La Estrella justo cuando más lo necesitaba. Gracias por este mazo hermoso ✨"
}, {
  name: "Tomás",
  text: "Charly como El Loco es perfecto. No se me ocurre nadie mejor."
}, {
  name: "Marian",
  text: "Lo uso todas las mañanas con el café. Mi ritual favorito."
}];
function DesktopFan({
  assetPrefix,
  onDraw
}) {
  const back = assetPrefix + 'card-back.jpg';
  const N = 13,
    spread = 64,
    step = spread / (N - 1);
  const [hover, setHover] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '48px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 24,
      color: 'var(--carot-ink)',
      margin: '40px 0 0',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 28,
      opacity: .6
    }
  }, "\u2190"), "Deslizate por el mazo y eleg\xED tu carta del d\xEDa.", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 28,
      opacity: .6
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 520,
      marginTop: 40
    }
  }, Array.from({
    length: N
  }).map((_, i) => {
    const angle = -spread / 2 + i * step;
    const lift = hover === i ? -34 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: onDraw,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(-1),
      style: {
        position: 'absolute',
        left: '50%',
        bottom: -40,
        width: 168,
        height: 314,
        marginLeft: -84,
        transformOrigin: 'bottom center',
        transform: `rotate(${angle}deg) translateY(${lift}px)`,
        transition: 'transform .22s cubic-bezier(.4,.1,.2,1)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: back,
      alt: "",
      draggable: "false",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        borderRadius: 14,
        border: '2px solid var(--carot-ink)',
        boxShadow: '0 10px 26px rgba(53,48,41,.24)'
      }
    }));
  })));
}
function DesktopComments() {
  const [list, setList] = React.useState(DESK_SEED);
  const [form, setForm] = React.useState(false);
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');
  const inp = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    color: 'var(--carot-ink)',
    background: 'var(--carot-cream)',
    border: '1px solid var(--carot-taupe-deep)',
    borderRadius: 8,
    padding: '12px 14px',
    outline: 'none'
  };
  const submit = () => {
    if (!name.trim() || !text.trim()) return;
    setList([{
      name: name.trim(),
      text: text.trim()
    }, ...list]);
    setName('');
    setText('');
    setForm(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: '0 auto',
      padding: '10px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ArcanaLabel, {
    display: true,
    size: "lg"
  }, "Comentarios (", list.length, ")"), !form && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setForm(true)
  }, "Comentar")), form && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: inp,
    placeholder: "Tu nombre",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inp,
      resize: 'vertical',
      minHeight: 84
    },
    placeholder: "Tu comentario\u2026",
    value: text,
    onChange: e => setText(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: submit
  }, "Publicar"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: () => setForm(false)
  }, "Cancelar"))), list.map((c, i) => /*#__PURE__*/React.createElement(Comment, {
    key: i,
    name: c.name,
    text: c.text
  })));
}
function DesktopReading({
  card,
  assetPrefix,
  onAgain
}) {
  const [flipped, setFlipped] = React.useState(false);
  React.useEffect(() => {
    setFlipped(false);
    const t = setTimeout(() => setFlipped(true), 260);
    return () => clearTimeout(t);
  }, [card.n]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0 0',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      padding: '36px 40px 0',
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 36
    }
  }, /*#__PURE__*/React.createElement(TarotCard, {
    back: assetPrefix + 'card-back.jpg',
    face: assetPrefix + 'cards/' + card.img,
    flipped: flipped,
    width: 340,
    alt: card.name
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ArcanaLabel, {
    display: true,
    size: "lg",
    style: {
      letterSpacing: '.12em'
    }
  }, card.rom), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      color: 'var(--carot-ink)',
      margin: '8px 0 10px',
      lineHeight: 1.02
    }
  }, card.name), /*#__PURE__*/React.createElement(ArcanaLabel, {
    size: "md"
  }, card.arcana), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.7,
      color: 'var(--carot-ink)',
      margin: '26px 0 0'
    }
  }, card.meaning), /*#__PURE__*/React.createElement(StarDivider, {
    count: 3,
    size: 16,
    style: {
      margin: '30px 0',
      justifyContent: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.3,
      color: 'var(--carot-ink)',
      margin: 0,
      maxWidth: 520
    }
  }, "\u201C", card.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      margin: '34px 0 30px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    icon: /*#__PURE__*/React.createElement(ShareI, null)
  }, "Compartir"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    icon: /*#__PURE__*/React.createElement(DownI, null)
  }, "Descargar como Wallpaper")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onAgain
  }, "Elegir otra carta"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(DesktopComments, null)), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--carot-charcoal)',
      marginTop: 64,
      padding: '56px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md",
    color: "var(--carot-cream)",
    divider: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--carot-cream)'
    }
  }, "\xBFQu\xE9 es esto?"), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "var(--carot-cream)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0 L14 8 L22 6 L16 12 L22 18 L14 16 L12 24 L10 16 L2 18 L8 12 L2 6 L10 8 Z"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--carot-cream)'
    }
  }, "Comprar Mazo")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(IgI, null)
  }, "Seguir en Instagram"))));
}
function DesktopApp({
  assetPrefix
}) {
  const cards = window.CAROT_CARDS;
  const [view, setView] = React.useState('pick');
  const [card, setCard] = React.useState(null);
  const draw = () => {
    setCard(cards[Math.floor(Math.random() * cards.length)]);
    setView('reading');
    window.scrollTo(0, 0);
  };
  const again = () => {
    setView('pick');
    window.scrollTo(0, 0);
  };
  return view === 'pick' ? /*#__PURE__*/React.createElement(DesktopFan, {
    assetPrefix: assetPrefix,
    onDraw: draw
  }) : /*#__PURE__*/React.createElement(DesktopReading, {
    card: card,
    assetPrefix: assetPrefix,
    onAgain: again
  });
}
window.DesktopApp = DesktopApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop/DesktopApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/About.jsx
try { (() => {
/* "¿Qué es esto?" — a short description of the El Carot project. */
function About({
  onBack,
  onMenu,
  onDraw,
  instagramUrl
}) {
  const {
    t
  } = window.useCarot();
  const display = "var(--font-display)";
  const sage = 'var(--carot-sage-light)';
  const cream = 'var(--carot-cream-text)';
  const p = {
    fontFamily: 'var(--font-body)',
    fontSize: 17,
    lineHeight: 1.75,
    color: 'var(--carot-cream-text)',
    margin: '0 0 18px',
    textAlign: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--carot-screen)',
      padding: '0 30px 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '30px 0 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": t.back,
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      padding: 6,
      margin: -6,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: sage,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "11,5 4,12 11,19"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 17,
      color: 'rgba(175,188,167,.6)'
    }
  }, t.aboutTitle), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '30px 0 22px',
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 40,
      lineHeight: 1.05,
      color: cream
    }
  }, "El Carot"), /*#__PURE__*/React.createElement("p", {
    style: p,
    dangerouslySetInnerHTML: {
      __html: t.aboutP1html.replace(/<strong>/g, '<strong style="color:' + sage + '">')
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, t.aboutP2), /*#__PURE__*/React.createElement("p", {
    style: p
  }, t.aboutP3), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0 26px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: sage,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0 L14.2 8 L22 5.6 L16.4 12 L22 18.4 L14.2 16 L12 24 L9.8 16 L2 18.4 L7.6 12 L2 5.6 L9.8 8 Z"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...p,
      fontFamily: display,
      fontSize: 22,
      color: sage,
      margin: 0
    }
  }, t.aboutTagline[0], /*#__PURE__*/React.createElement("br", null), t.aboutTagline[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onDraw,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      border: 'none',
      cursor: 'pointer',
      marginTop: 30,
      background: 'var(--carot-sage-light)',
      color: '#2b2922',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 21,
      padding: '18px 22px',
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "#2b2922",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 1 L14 8.4 L21.4 6.2 L16.2 12 L21.4 17.8 L14 15.6 L12 23 L10 15.6 L2.6 17.8 L7.8 12 L2.6 6.2 L10 8.4 Z"
  })), t.drawCard), /*#__PURE__*/React.createElement("a", {
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      textDecoration: 'none',
      marginTop: 14,
      background: 'transparent',
      color: sage,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 17,
      padding: '15px 22px',
      borderRadius: 14,
      border: '1.5px solid var(--carot-sage-light)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.1",
    fill: "currentColor",
    stroke: "none"
  })), t.followInstagram));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/CardReading.jsx
try { (() => {
const {
  TarotCard,
  StarDivider,
  ArcanaLabel,
  Button
} = window.ElCarotDesignSystem_1067d9;
const ShareIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "19",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8.6",
  y1: "13.5",
  x2: "15.4",
  y2: "17.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "15.4",
  y1: "6.5",
  x2: "8.6",
  y2: "10.5"
}));
const DownIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "19",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21h16"
}));
const cardOutlineBtn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  width: '100%',
  boxSizing: 'border-box',
  background: 'transparent',
  border: '1px solid rgba(175,188,167,.35)',
  borderRadius: 14,
  padding: '17px 22px',
  cursor: 'pointer',
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: 19,
  letterSpacing: '.01em',
  color: 'var(--carot-sage-light)'
};

/* The reading: card flips face-up on mount, then the meaning unfolds below. */
function CardReading({
  card,
  assetPrefix,
  onDrawAgain,
  onMenu,
  question,
  interpretation,
  interpreting,
  dailyDate
}) {
  const {
    t,
    lang
  } = window.useCarot();
  const [flipped, setFlipped] = React.useState(false);
  React.useEffect(() => {
    setFlipped(false);
    const t = setTimeout(() => setFlipped(true), 250);
    return () => clearTimeout(t);
  }, [card.n]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 26px 0',
      background: 'var(--carot-screen)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '30px 0 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": t.back,
    onClick: onDrawAgain,
    style: {
      background: 'none',
      border: 'none',
      padding: 6,
      margin: -6,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--carot-sage-light)",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "11,5 4,12 11,19"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24
    }
  })), dailyDate && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 6,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--carot-sage-light)',
      marginBottom: 4
    }
  }, t.dailyLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 19,
      color: 'var(--carot-cream-text)'
    }
  }, dailyDate)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(TarotCard, {
    back: assetPrefix + 'card-back.jpg',
    face: assetPrefix + 'cards/' + card.img,
    flipped: flipped,
    width: 214,
    alt: card.name + ' — ' + card.arcana
  })), question ? /*#__PURE__*/React.createElement(StarDivider, {
    count: 3,
    size: 15,
    color: "var(--carot-sage-light)",
    style: {
      margin: '26px 0 14px'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StarDivider, {
    count: 3,
    size: 13,
    color: "#5B6256",
    style: {
      margin: '28px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 21,
      lineHeight: 1.45,
      color: 'var(--carot-sage-light)',
      textAlign: 'center',
      margin: 0
    }
  }, "\u201C", window.cardText(card, 'quote', lang), "\u201D"), /*#__PURE__*/React.createElement(StarDivider, {
    count: 3,
    size: 13,
    color: "#5B6256",
    style: {
      margin: '20px 0 0'
    }
  })), question ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--carot-sage-light)',
      margin: '22px 0 8px'
    }
  }, t.yourQuestion), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 1.4,
      color: 'var(--carot-cream-text)',
      textAlign: 'center',
      margin: '0 0 6px'
    }
  }, "\u201C", question, "\u201D"), interpreting ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--carot-sage-light)',
      textAlign: 'center',
      margin: '18px 0 0'
    }
  }, t.interpreting) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--carot-cream-text)',
      textAlign: 'center',
      margin: '18px 0 0'
    }
  }, interpretation)) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--carot-cream-text)',
      textAlign: 'center',
      margin: '20px 0 0'
    }
  }, window.cardText(card, 'meaning', lang)), /*#__PURE__*/React.createElement(StarDivider, {
    count: 3,
    size: 13,
    color: "#5B6256",
    style: {
      margin: '52px 0 50px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: cardOutlineBtn
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(DownIcon, null)), t.download), /*#__PURE__*/React.createElement("button", {
    style: cardOutlineBtn
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(ShareIcon, null)), t.share), /*#__PURE__*/React.createElement("button", {
    onClick: onDrawAgain,
    style: {
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--carot-sage-light)',
      color: '#2b2922',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 20,
      padding: '18px 22px',
      borderRadius: 14
    }
  }, t.drawAnother)), /*#__PURE__*/React.createElement(StarDivider, {
    count: 3,
    size: 13,
    color: "#5B6256",
    style: {
      margin: '52px 0 50px'
    }
  }));
}
window.CardReading = CardReading;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/CardReading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Comments.jsx
try { (() => {
const {
  Button
} = window.ElCarotDesignSystem_1067d9;
const C_MUTED = 'rgba(255,255,255,.42)';
const C_HAIR = '1px solid rgba(175,188,167,.16)';

/* A single comment: message, then name + date. */
function CommentRow({
  name,
  date,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 16,
      color: C_MUTED
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 14,
      color: C_MUTED,
      letterSpacing: '.06em'
    }
  }, date)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--carot-cream-text)'
    }
  }, text));
}

/* Login-free comments. */
function Comments() {
  const {
    t
  } = window.useCarot();
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState(t.seedComments);
  const [form, setForm] = React.useState(false);
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');
  const userAdded = React.useRef([]);

  // keep seed comments in the active language, preserving any the visitor added
  React.useEffect(() => {
    setList([...userAdded.current, ...t.seedComments]);
  }, [t]);
  const today = () => {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()}`;
  };
  const submit = () => {
    if (!name.trim() || !text.trim()) return;
    const entry = {
      name: name.trim(),
      date: today(),
      text: text.trim()
    };
    userAdded.current = [entry, ...userAdded.current];
    setList([entry, ...list]);
    setName('');
    setText('');
    setForm(false);
    setOpen(true);
  };
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: 15,
    color: 'var(--carot-ink)',
    background: 'var(--carot-cream)',
    border: '1px solid var(--carot-taupe-deep)',
    borderRadius: 10,
    padding: '11px 13px',
    outline: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 26px 16px',
      background: 'var(--carot-screen)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      margin: '0 0 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 19,
      color: C_MUTED
    }
  }, t.commentsTitle, " (", list.length, ")"), !form && /*#__PURE__*/React.createElement("button", {
    onClick: () => setForm(true),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 18,
      color: 'var(--carot-sage-light)'
    }
  }, t.commentCta)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: C_HAIR
    }
  }, list.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '26px 0',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.42)'
    }
  }, t.commentsEmpty[0], /*#__PURE__*/React.createElement("br", null), t.commentsEmpty[1]) : /*#__PURE__*/React.createElement(CommentRow, list[0])), open && list.slice(1).map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: C_HAIR
    }
  }, /*#__PURE__*/React.createElement(CommentRow, c))), form && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: t.yourName,
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      resize: 'vertical',
      minHeight: 66
    },
    placeholder: t.yourComment,
    value: text,
    onChange: e => setText(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    style: {
      border: 'none',
      cursor: 'pointer',
      background: 'var(--carot-sage-light)',
      color: '#2b2922',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      padding: '9px 18px',
      borderRadius: 10
    }
  }, t.post), /*#__PURE__*/React.createElement("button", {
    onClick: () => setForm(false),
    style: linkBtn
  }, t.cancel))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: C_HAIR,
      paddingTop: 4
    }
  }, list.length > 1 ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: toggleBtn
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .2s',
      fontSize: 14
    }
  }, "\u2304"), open ? t.viewLess : t.viewAll) : /*#__PURE__*/React.createElement("span", null)));
}
const linkBtn = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px 0',
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: 15,
  color: 'rgba(255,255,255,.42)'
};
const toggleBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '14px 0',
  marginLeft: 0,
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: 18,
  color: 'rgba(255,255,255,.42)'
};
window.Comments = Comments;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Comments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Footer.jsx
try { (() => {
/* Dark footer shown at the bottom of the reading. */
function Footer({
  onAbout,
  onDaily,
  onGallery,
  instagramUrl
}) {
  const {
    t
  } = window.useCarot();
  const sage = 'var(--carot-sage-light)';
  const muted = 'rgba(255,255,255,.40)';
  const mono = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
  const navLink = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px 0',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: 17,
    letterSpacing: '.01em',
    color: muted
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#111111',
      padding: '46px 26px 48px',
      marginTop: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: navLink,
    onClick: onAbout
  }, t.footAbout), /*#__PURE__*/React.createElement("a", {
    style: navLink,
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t.footBuy), /*#__PURE__*/React.createElement("button", {
    style: navLink,
    onClick: onDaily
  }, t.footDaily), /*#__PURE__*/React.createElement("button", {
    style: navLink,
    onClick: onGallery
  }, t.footGallery)), /*#__PURE__*/React.createElement("a", {
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Instagram",
    style: {
      color: muted,
      display: 'inline-flex',
      margin: '28px 0 30px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.1",
    fill: "currentColor",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: mono,
      fontSize: 13,
      lineHeight: 1.8,
      color: muted
    }
  }, /*#__PURE__*/React.createElement("div", null, t.createdBy, " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/bastadanii/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#d98fd0',
      textDecoration: 'none'
    }
  }, "bastadanii")), /*#__PURE__*/React.createElement("div", null, t.developedIn, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#8fd99a'
    }
  }, "CodeYam"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 28,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: sage,
      marginTop: 40
    }
  }, "El Carot"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: mono,
      fontSize: 13,
      letterSpacing: '.06em',
      color: muted,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2665"), /*#__PURE__*/React.createElement("span", null, t.footLove), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2665")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Gallery.jsx
try { (() => {
/* "Ver todas las cartas" — the full deck in a two-column grid. Tap any card
 * to open its reading. */
function Gallery({
  cards,
  assetPrefix,
  onBack,
  onMenu,
  onSelect,
  onAbout,
  onDaily,
  instagramUrl
}) {
  const {
    t
  } = window.useCarot();
  const display = "var(--font-display)";
  const sage = 'var(--carot-sage-light)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--carot-screen)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '30px 0 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": t.back,
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      padding: 6,
      margin: -6,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: sage,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "11,5 4,12 11,19"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 17,
      color: 'rgba(175,188,167,.6)'
    }
  }, t.galleryTitle), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '22px 0 6px',
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 34,
      lineHeight: 1.05,
      color: 'var(--carot-cream-text)'
    }
  }, t.galleryHeading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: sage
    }
  }, t.gallerySub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, cards.map(card => /*#__PURE__*/React.createElement("button", {
    key: card.n,
    onClick: () => onSelect(card),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetPrefix + 'cards/' + card.img,
    alt: card.name + ' — ' + card.arcana,
    draggable: "false",
    style: {
      width: '100%',
      aspectRatio: '0.535',
      objectFit: 'cover',
      display: 'block',
      borderRadius: 10,
      border: '2px solid rgba(175,188,167,.45)',
      boxShadow: '0 8px 22px rgba(0,0,0,.4)'
    }
  }))))), /*#__PURE__*/React.createElement(Footer, {
    onAbout: onAbout,
    onDaily: onDaily,
    onGallery: onBack,
    instagramUrl: instagramUrl
  }));
}
window.Gallery = Gallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Home.jsx
try { (() => {
/* El Carot — Home / landing screen.
 * Welcome eyebrow, the EL CAROT wordmark, a star (hamburger) menu, a central
 * "carta del día" illustration, and the three experience buttons. */
function Home({
  onPick,
  onMenu,
  assetPrefix
}) {
  const {
    t
  } = window.useCarot();
  const display = "var(--font-display)";
  const sage = 'var(--carot-sage-light)'; // #afbca7
  const cream = 'var(--carot-cream-text)'; // #e9d9c7

  const allCards = window.CAROT_CARDS || [];
  // three distinct random cards, re-picked every time the Home screen mounts
  const fan = React.useMemo(() => {
    const idx = allCards.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx.slice(0, 3).map(i => allCards[i]);
  }, []);
  const F_W = 190;
  const STEP_X = 168; // horizontal gap between card centres
  const STEP_ROT = 7; // tilt per step from centre
  const mid = (fan.length - 1) / 2;
  const [opened, setOpened] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setOpened(true), 80);
    return () => clearTimeout(t);
  }, []);
  const btn = {
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    cursor: 'pointer',
    background: 'var(--carot-sage-light)',
    color: '#2b2922',
    fontFamily: display,
    fontWeight: 400,
    fontSize: 21,
    letterSpacing: '.01em',
    padding: '20px 18px',
    borderRadius: 14,
    textAlign: 'center',
    lineHeight: 1.1,
    transition: 'background-color .18s ease, transform .06s ease'
  };
  const press = e => {
    e.currentTarget.style.transform = 'translateY(1px)';
  };
  const release = e => {
    e.currentTarget.style.transform = 'translateY(0)';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--carot-screen)',
      padding: '0 26px 30px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(window.LangToggle, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: display,
      fontWeight: 400,
      fontSize: 17,
      color: 'rgba(175,188,167,.65)',
      letterSpacing: '.02em'
    }
  }, t.welcome), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 58,
      lineHeight: 1,
      letterSpacing: '.03em',
      color: sage,
      textTransform: 'uppercase'
    }
  }, "El Carot"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 0',
      margin: '0 -26px',
      minHeight: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: F_W,
      height: Math.round(F_W / 0.535)
    }
  }, fan.map((c, i) => {
    const rel = i - mid;
    const tx = rel * STEP_X;
    const rot = rel * STEP_ROT;
    const isCenter = Math.abs(rel) < 0.5;
    return /*#__PURE__*/React.createElement("div", {
      key: c.n,
      style: {
        position: 'absolute',
        left: '50%',
        top: 0,
        width: F_W,
        marginLeft: -F_W / 2,
        transform: `translateX(${opened ? tx : tx * 0.6}px) translateY(${Math.abs(rel) * 26 - 34}px) rotate(${rot}deg) scale(${opened ? 1 : 0.92})`,
        transition: 'transform .6s cubic-bezier(.2,.7,.16,1), opacity .6s ease',
        opacity: opened ? 1 : 0,
        zIndex: 20 - Math.round(Math.abs(rel) * 5)
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: assetPrefix + 'cards/' + c.img,
      alt: c.name,
      draggable: "false",
      style: {
        display: 'block',
        width: '100%',
        aspectRatio: '0.535',
        objectFit: 'cover',
        borderRadius: 9,
        border: '2px solid rgba(233,217,199,.5)',
        boxShadow: isCenter ? '0 18px 44px rgba(0,0,0,.6)' : '0 12px 30px rgba(0,0,0,.5)',
        animation: 'carot-sway 6.5s ease-in-out infinite',
        animationDelay: `${i * 1.3}s`,
        transformOrigin: '50% 50%'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onMouseDown: press,
    onMouseUp: release,
    onMouseLeave: release,
    onClick: () => onPick('message')
  }, t.homeMessage), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onMouseDown: press,
    onMouseUp: release,
    onMouseLeave: release,
    onClick: () => onPick('question')
  }, t.homeQuestion), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      background: 'transparent',
      color: sage,
      border: '1.5px solid var(--carot-sage-light)'
    },
    onMouseDown: press,
    onMouseUp: release,
    onMouseLeave: release,
    onClick: () => onPick('daily')
  }, t.homeDaily)));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MessageIntro.jsx
try { (() => {
/* Card-pick screen (message / question / "sacar una carta"): a heading, a short
 * instruction, and the deck as a large swipeable carousel — one big card upright
 * in the centre, neighbours peeking in, arrows on each side. Tap the centre card
 * (or an arrow + tap) to draw. */
function MessageIntro({
  title,
  heading,
  lines,
  assetPrefix,
  onBack,
  onMenu,
  onPick
}) {
  const {
    t
  } = window.useCarot();
  const display = "var(--font-display)";
  const sage = 'var(--carot-sage-light)';
  const cream = 'var(--carot-cream-text)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--carot-screen)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '30px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": t.back,
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      padding: 6,
      margin: -6,
      cursor: 'pointer',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: sage,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "11,5 4,12 11,19"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 17,
      color: 'rgba(175,188,167,.6)',
      letterSpacing: '.01em',
      padding: '0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 24px 0',
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 31,
      lineHeight: 1.12,
      color: cream
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0 0',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.7,
      color: sage
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement(DeckCarousel, {
    back: assetPrefix + 'card-back.jpg',
    onDraw: onPick,
    t: t
  }));
}

/* The big swipeable face-down deck with side arrows. */
function DeckCarousel({
  back,
  onDraw,
  t
}) {
  const N = window.CAROT_CARDS && window.CAROT_CARDS.length || 22;
  const CARD_W = 214;
  const CARD_H = Math.round(CARD_W / 0.535);
  const SPACING = 244;
  const TILT = 6;
  const MAX_TILT = 14;
  const [active, setActive] = React.useState(Math.floor(N / 2));
  const [drag, setDrag] = React.useState(0);
  const startX = React.useRef(null);
  const moved = React.useRef(false);
  const clamp = i => Math.max(0, Math.min(N - 1, i));
  const onDown = e => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    moved.current = false;
  };
  const onMove = e => {
    if (startX.current == null) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const dx = x - startX.current;
    if (Math.abs(dx) > 4) moved.current = true;
    setDrag(dx);
  };
  const onUp = () => {
    if (startX.current == null) return;
    const steps = Math.round(-drag / (SPACING * 0.55));
    if (steps !== 0) setActive(a => clamp(a + steps));
    setDrag(0);
    startX.current = null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      flex: 1,
      minHeight: CARD_H + 40,
      marginTop: 16
    },
    onMouseDown: onDown,
    onMouseMove: onMove,
    onMouseUp: onUp,
    onMouseLeave: onUp,
    onTouchStart: onDown,
    onTouchMove: onMove,
    onTouchEnd: onUp
  }, Array.from({
    length: N
  }).map((_, i) => {
    const offset = (i - active) * SPACING + drag;
    if (Math.abs(offset) > 560) return null;
    const rel = offset / SPACING;
    const isCenter = i === active && drag === 0;
    const dist = Math.min(Math.abs(rel), 2);
    const scale = 1 - dist * 0.07;
    const opacity = 1 - dist * 0.2;
    const tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, rel * TILT));
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => {
        if (moved.current) return;
        if (i === active) onDraw();else setActive(i);
      },
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: CARD_W,
        height: CARD_H,
        marginLeft: -CARD_W / 2,
        marginTop: -CARD_H / 2,
        transformOrigin: '50% 88%',
        transform: `translateX(${offset}px) rotate(${tilt}deg) scale(${scale})`,
        transition: startX.current == null ? 'transform .34s cubic-bezier(.4,.1,.2,1), opacity .34s' : 'none',
        opacity,
        zIndex: 100 - Math.round(dist * 10),
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: back,
      alt: "",
      draggable: "false",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        borderRadius: 16,
        border: isCenter ? '2px solid rgba(233,217,199,.6)' : '2px solid rgba(233,217,199,.22)',
        boxShadow: isCenter ? '0 22px 54px rgba(0,0,0,.6)' : '0 12px 32px rgba(0,0,0,.45)',
        pointerEvents: 'none'
      }
    }));
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": t.prev,
    onClick: () => setActive(a => clamp(a - 1)),
    style: arrowStyle('left', active === 0)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "32",
    viewBox: "0 0 13 28",
    fill: "none",
    stroke: "#14110e",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9.5,4 4,14 9.5,24"
  }))), /*#__PURE__*/React.createElement("button", {
    "aria-label": t.next,
    onClick: () => setActive(a => clamp(a + 1)),
    style: arrowStyle('right', active === N - 1)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "32",
    viewBox: "0 0 13 28",
    fill: "none",
    stroke: "#14110e",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3.5,4 9,14 3.5,24"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 0 22px',
      textAlign: 'center',
      color: 'rgba(175,188,167,.6)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      letterSpacing: '.18em'
    }
  }, String(active + 1).padStart(2, '0'), " / ", N));
}
function arrowStyle(side, atEnd) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 10,
    transform: 'translateY(-50%)',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--carot-sage-light)',
    border: 'none',
    padding: 0,
    cursor: atEnd ? 'default' : 'pointer',
    zIndex: 200,
    boxShadow: '0 4px 14px rgba(0,0,0,.4)',
    animation: `carot-nudge-${side} 2.4s ease-in-out infinite`,
    visibility: atEnd ? 'hidden' : 'visible'
  };
}
window.MessageIntro = MessageIntro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MessageIntro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* El Carot — mobile app shell.
 * Views: home (landing) -> message/question (fanned deck) -> reading.
 * A star (hamburger) menu overlays from any screen. Every screen is dark. */
const CAROT_IG_URL = 'https://www.instagram.com/el_carot/';
function MobileApp({
  assetPrefix
}) {
  const cards = window.CAROT_CARDS;
  const STR = window.CAROT_STRINGS;
  const [lang, setLangState] = React.useState(window.carotDetectLang);
  const t = STR[lang];
  const setLang = React.useCallback(l => {
    setLangState(l);
    try {
      localStorage.setItem('carot_lang', l);
    } catch (e) {}
  }, []);
  const intents = {
    message: {
      title: t.messageTitle,
      heading: t.messageHeading,
      lines: t.messageLines
    },
    draw: {
      title: t.drawTitle,
      heading: t.drawHeading,
      lines: t.drawLines
    }
  };
  const [view, setView] = React.useState('home'); // 'home' | 'message' | 'question' | 'reading'
  const [card, setCard] = React.useState(null);
  const [menu, setMenu] = React.useState(false);
  const [question, setQuestion] = React.useState(null);
  const [interpretation, setInterpretation] = React.useState('');
  const [interpreting, setInterpreting] = React.useState(false);
  const [dailyDate, setDailyDate] = React.useState(null);
  const [origin, setOrigin] = React.useState('home');
  const scroller = React.useRef(null);
  const barColor = 'var(--carot-sage-light)';
  const scrollTop = () => {
    if (scroller.current) scroller.current.scrollTop = 0;
  };
  const go = v => {
    setMenu(false);
    setView(v);
    scrollTop();
  };
  const toggleMenu = () => setMenu(m => {
    const next = !m;
    if (next) scrollTop();
    return next;
  });
  const draw = () => {
    setQuestion(null);
    setInterpretation('');
    setInterpreting(false);
    setDailyDate(null);
    setOrigin(view === 'draw' ? 'draw' : 'message');
    setCard(cards[Math.floor(Math.random() * cards.length)]);
    go('reading');
  };
  const drawDaily = () => {
    setQuestion(null);
    setInterpretation('');
    setInterpreting(false);
    // same card for the whole local calendar day
    const d = new Date();
    const key = '' + d.getFullYear() + (d.getMonth() + 1) + d.getDate();
    let h = 0;
    for (let i = 0; i < key.length; i++) h = h * 31 + key.charCodeAt(i) >>> 0;
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const mesesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    setDailyDate(lang === 'en' ? `${mesesEn[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}` : `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`);
    setOrigin('home');
    setCard(cards[h % cards.length]);
    go('reading');
  };
  const ask = async q => {
    const drawn = cards[Math.floor(Math.random() * cards.length)];
    setQuestion(q);
    setInterpretation('');
    setInterpreting(true);
    setDailyDate(null);
    setOrigin('question');
    setCard(drawn);
    go('reading');
    try {
      const baseMeaning = window.cardText(drawn, 'meaning', lang);
      const prompt = lang === 'en' ? `You are El Carot, an Argentine tarot — warm, intimate and a little mystical-but-playful. Speak in natural, affectionate English.\n\nThe person asked: “${q}”\n\nThey drew the card ${drawn.name} (${drawn.arcana}). Its base meaning is: ${baseMeaning}\n\nWrite a short interpretation (3 to 5 sentences, a single paragraph) that answers their concrete question in light of this card. Address them as “you,” warmly. Don’t repeat the question, don’t use headings or lists, and don’t mention that you are an AI.` : `Sos El Carot, un tarot argentino, cálido, íntimo y un poco místico-pero-jugado. Hablás en español rioplatense usando voseo (“elegí”, “mirá”, “confiá”).\n\nLa persona preguntó: “${q}”\n\nLe salió la carta ${drawn.name} (${drawn.arcana}). Su significado base es: ${baseMeaning}\n\nEscribí una interpretación breve (3 a 5 oraciones, un solo párrafo) que responda su pregunta concreta a la luz de esta carta. Dirigite a “vos”, con calidez. No repitas la pregunta, no uses encabezados ni listas, no menciones que sos una IA.`;
      const text = await window.claude.complete(prompt);
      setInterpretation((text || '').trim() || baseMeaning);
    } catch (e) {
      setInterpretation(window.cardText(drawn, 'meaning', lang));
    } finally {
      setInterpreting(false);
    }
  };
  const pick = intent => {
    if (intent === 'daily') return drawDaily();
    go(intent);
  };
  return /*#__PURE__*/React.createElement(window.CarotLangContext.Provider, {
    value: {
      lang,
      t,
      setLang
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--carot-screen)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      flex: 1,
      overflowY: 'auto',
      position: 'relative'
    }
  }, view === 'home' && /*#__PURE__*/React.createElement(Home, {
    onPick: pick,
    onMenu: () => setMenu(true),
    assetPrefix: assetPrefix
  }), (view === 'message' || view === 'draw') && /*#__PURE__*/React.createElement(MessageIntro, _extends({}, intents[view], {
    assetPrefix: assetPrefix,
    onBack: () => go('home'),
    onMenu: () => setMenu(true),
    onPick: draw
  })), view === 'question' && /*#__PURE__*/React.createElement(QuestionInput, {
    onBack: () => go('home'),
    onMenu: () => setMenu(true),
    onAsk: ask
  }), view === 'about' && /*#__PURE__*/React.createElement(About, {
    onBack: () => go('home'),
    onMenu: () => setMenu(true),
    onDraw: () => go('draw'),
    instagramUrl: CAROT_IG_URL
  }), view === 'gallery' && /*#__PURE__*/React.createElement(Gallery, {
    cards: cards,
    assetPrefix: assetPrefix,
    onBack: () => go('home'),
    onMenu: () => setMenu(true),
    onAbout: () => go('about'),
    onDaily: drawDaily,
    instagramUrl: CAROT_IG_URL,
    onSelect: c => {
      setQuestion(null);
      setInterpretation('');
      setInterpreting(false);
      setDailyDate(null);
      setOrigin('gallery');
      setCard(c);
      go('reading');
    }
  }), view === 'reading' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CardReading, {
    card: card,
    assetPrefix: assetPrefix,
    onDrawAgain: () => go(origin),
    onMenu: () => setMenu(true),
    question: question,
    interpretation: interpretation,
    interpreting: interpreting,
    dailyDate: dailyDate
  }), /*#__PURE__*/React.createElement(Comments, null), /*#__PURE__*/React.createElement(Footer, {
    onAbout: () => go('about'),
    onDaily: drawDaily,
    onGallery: () => go('gallery'),
    instagramUrl: CAROT_IG_URL
  })), menu && /*#__PURE__*/React.createElement(CarotMenu, {
    onPick: pick,
    onAbout: () => go('about'),
    onGallery: () => go('gallery'),
    instagramUrl: CAROT_IG_URL
  })), /*#__PURE__*/React.createElement(MenuToggle, {
    open: menu,
    onToggle: toggleMenu,
    label: menu ? t.close : t.menu
  })));
}

/* The single star↔X button, locked to one spot above everything so the star
 * spins and crossfades into the close X without moving. */
function MenuToggle({
  open,
  onToggle,
  label
}) {
  const sage = 'var(--carot-sage-light)';
  const tween = {
    transition: 'transform .4s cubic-bezier(.34,.12,.2,1), opacity .28s ease',
    transformOrigin: '12px 12px'
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    "aria-expanded": open,
    onClick: onToggle,
    style: {
      position: 'absolute',
      top: 22,
      right: 18,
      width: 44,
      height: 44,
      zIndex: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    style: {
      overflow: 'visible'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0 L14.2 8 L22 5.6 L16.4 12 L22 18.4 L14.2 16 L12 24 L9.8 16 L2 18.4 L7.6 12 L2 5.6 L9.8 8 Z",
    fill: sage,
    style: {
      ...tween,
      opacity: open ? 0 : 1,
      transform: open ? 'rotate(108deg) scale(.45)' : 'rotate(0deg) scale(1)'
    }
  }), /*#__PURE__*/React.createElement("g", {
    stroke: sage,
    strokeWidth: "1.9",
    strokeLinecap: "round",
    style: {
      ...tween,
      opacity: open ? 1 : 0,
      transform: open ? 'rotate(0deg) scale(1)' : 'rotate(-108deg) scale(.45)'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "19",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  }))));
}

/* Star (hamburger) menu overlay. */
function CarotMenu({
  onPick,
  onAbout,
  onGallery,
  instagramUrl
}) {
  const {
    t
  } = window.useCarot();
  const display = 'var(--font-display)';
  const sage = 'var(--carot-sage-light)';
  const item = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '6px 0',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: 17,
    letterSpacing: '.01em',
    color: 'var(--carot-cream-text)'
  };
  const close = () => {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 500,
      background: 'rgba(28,28,28,.97)',
      display: 'flex',
      flexDirection: 'column',
      padding: '64px 30px 36px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 34,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: item,
    onClick: onAbout
  }, t.menuAbout), /*#__PURE__*/React.createElement("button", {
    style: item,
    onClick: onGallery
  }, t.menuAllCards), /*#__PURE__*/React.createElement("a", {
    style: {
      ...item,
      textDecoration: 'none'
    },
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t.menuBuy), /*#__PURE__*/React.createElement("a", {
    style: {
      ...item,
      textDecoration: 'none'
    },
    href: "https://github.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, t.menuOpenSource), /*#__PURE__*/React.createElement("a", {
    style: {
      ...item,
      textDecoration: 'none'
    },
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t.menuInstagram)), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "false",
    style: {
      textAlign: 'center',
      userSelect: 'none',
      paddingTop: 12,
      fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
      fontSize: 15,
      letterSpacing: '.04em',
      textTransform: 'none',
      color: 'rgba(255,255,255,.42)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2665"), /*#__PURE__*/React.createElement("span", null, t.menuLove), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2665")));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/QuestionInput.jsx
try { (() => {
/* "Tengo una pregunta específica" — the user writes their question, then draws
 * a card. The reading interprets that card in light of the question (via AI). */
function QuestionInput({
  onBack,
  onMenu,
  onAsk
}) {
  const {
    t
  } = window.useCarot();
  const display = "var(--font-display)";
  const sage = 'var(--carot-sage-light)';
  const cream = 'var(--carot-cream-text)';
  const [q, setQ] = React.useState('');
  const ready = q.trim().length > 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--carot-screen)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '30px 24px 0',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": t.back,
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      padding: 6,
      margin: -6,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: sage,
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "11,5 4,12 11,19"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 17,
      color: 'rgba(175,188,167,.6)',
      padding: '0 8px'
    }
  }, t.questionTitle), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '24px 24px 0',
      textAlign: 'center',
      fontFamily: display,
      fontWeight: 400,
      fontSize: 36,
      lineHeight: 1.05,
      color: cream
    }
  }, t.questionHeading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 30px 0',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.5,
      color: cream
    }
  }, t.questionSub), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '22px 24px 0',
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: t.questionPlaceholder,
    style: {
      flex: 1,
      width: '100%',
      boxSizing: 'border-box',
      resize: 'none',
      background: 'transparent',
      border: '1px solid rgba(175,188,167,.35)',
      borderRadius: 16,
      padding: '20px 22px',
      outline: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 300,
      fontSize: 18,
      lineHeight: 1.5,
      color: cream
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px 26px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => ready && onAsk(q.trim()),
    disabled: !ready,
    style: {
      width: '100%',
      border: 'none',
      cursor: ready ? 'pointer' : 'default',
      background: 'var(--carot-sage-light)',
      color: '#2b2922',
      opacity: ready ? 1 : 0.5,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 22,
      padding: '20px 22px',
      borderRadius: 14,
      transition: 'opacity .2s ease'
    }
  }, t.drawCard)));
}
window.QuestionInput = QuestionInput;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/QuestionInput.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/StarField.jsx
try { (() => {
/* Shared eight-point-star card back, used for the fanned deck on the
 * "Quiero recibir un mensaje" screen. Cream stars on a muted sage field. */
function carotStarPath(cx, cy, R, r) {
  const pts = 8;
  const step = Math.PI / pts;
  let d = '';
  for (let i = 0; i < pts * 2; i++) {
    const rad = i % 2 === 0 ? R : r;
    const a = i * step - Math.PI / 2;
    const x = cx + rad * Math.cos(a);
    const y = cy + rad * Math.sin(a);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2) + ' ';
  }
  return d + 'Z';
}
const CAROT_STAR_A = carotStarPath(14, 14, 11.5, 5.2);
const CAROT_STAR_B = carotStarPath(42, 42, 11.5, 5.2);

/* A single face-down card. Uses the real printed star-pattern card back
 * (assets/card-back.jpg) when `src` is given; falls back to the vector field. */
function StarCardBack({
  width = 150,
  height = 250,
  src = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 14,
      overflow: 'hidden',
      background: '#a6b69a',
      border: '2px solid #2c2a24',
      boxShadow: '0 14px 34px rgba(0,0,0,.42)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    draggable: "false",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      pointerEvents: 'none'
    }
  }) : /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "xMidYMid slice",
    style: {
      display: 'block'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "carot-star-field",
    width: "56",
    height: "56",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: CAROT_STAR_A,
    fill: "#ecdcc7",
    stroke: "#33312b",
    strokeWidth: "1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: CAROT_STAR_B,
    fill: "#ecdcc7",
    stroke: "#33312b",
    strokeWidth: "1.1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "#a6b69a"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#carot-star-field)"
  })));
}
window.StarCardBack = StarCardBack;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/StarField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/i18n.jsx
try { (() => {
/* El Carot — internationalization (ES / EN).
 * Exposes:
 *   window.CAROT_STRINGS        — { es:{…}, en:{…} } UI copy
 *   window.CarotLangContext     — React context { lang, t, setLang }
 *   window.useCarot()           — hook returning { lang, t, setLang }
 *   window.carotDetectLang()    — initial language from storage → locale → timezone
 *   window.cardText(card, field, lang) — card.meaning / card.quote in the active language
 *   window.LangToggle           — the ESP / ENG segmented switch
 */
(function () {
  const STRINGS = {
    es: {
      langName: 'Español',
      // Home
      welcome: '¡Bienvenida!',
      homeMessage: 'Quiero recibir un mensaje',
      homeQuestion: 'Tengo una pregunta específica',
      homeDaily: 'Carta del Día',
      // intents (message / draw)
      messageTitle: 'Quiero recibir un mensaje',
      messageHeading: '¿Sobre qué quisieras recibir un mensaje?',
      messageLines: ['Conectá con ese tema.', 'Respirá hondo.', 'Elegí tu carta.'],
      drawTitle: 'Sacar una carta',
      drawHeading: 'Sacar una carta',
      drawLines: ['Respirá hondo.', 'Elegí tu carta.'],
      // QuestionInput
      questionTitle: 'Tengo una pregunta específica',
      questionHeading: 'Dejá tu pregunta',
      questionSub: 'Cuanto más específica sea tu pregunta, mejor devolución te podremos hacer.',
      questionPlaceholder: 'Dejá tu pregunta aquí',
      drawCard: 'Sacar una carta',
      // CardReading
      dailyLabel: 'Carta del día',
      yourQuestion: 'Tu pregunta',
      interpreting: 'Interpretando tu carta…',
      download: 'Descargar Imagen',
      share: 'Compartir',
      drawAnother: 'Elegir otra carta',
      // Comments
      commentsTitle: 'Comentarios',
      commentCta: 'Comentar',
      commentsEmpty: ['Todavía no hay comentarios.', 'Sé el primero en dejar uno ✨'],
      yourName: 'Tu nombre',
      yourComment: 'Tu comentario…',
      post: 'Publicar',
      cancel: 'Cancelar',
      viewAll: 'Ver todos los comentarios',
      viewLess: 'Ver menos',
      seedComments: [{
        name: 'Lucía',
        date: '03.06.2026',
        text: 'Me salió La Estrella justo cuando más lo necesitaba. Gracias por este mazo hermoso ✨'
      }, {
        name: 'Tomás',
        date: '29.05.2026',
        text: 'Charly como El Loco es perfecto. No se me ocurre nadie mejor jaja.'
      }, {
        name: 'Marian',
        date: '21.05.2026',
        text: 'Lo uso todas las mañanas con el café. Mi ritual favorito.'
      }],
      // Menu
      menuAbout: 'Sobre El Carot',
      menuAllCards: 'Ver todas las cartas',
      menuBuy: 'Comprar Mazo',
      menuOpenSource: 'Open Source',
      menuInstagram: 'Instagram',
      menuLove: 'El Carot te ama',
      footLove: 'te ama',
      // Footer
      footAbout: 'Sobre El Carot',
      footBuy: 'Comprar Mazo',
      footDaily: 'Carta del día',
      footGallery: 'Ver todas las cartas',
      createdBy: 'Creado por',
      developedIn: 'Desarrollado en',
      // About
      aboutTitle: '¿Qué es esto?',
      aboutP1html: 'Un mazo de tarot de los 22 arcanos mayores, donde cada arcano está encarnado por un personaje querido cuyo nombre empieza con <strong>C</strong> — por eso, el <em>C-arot</em>.',
      aboutP2: 'Charly García es El Loco, Cleopatra es La Sacerdotisa, Celia Cruz es El Sol. El arte respeta las composiciones clásicas del Rider–Waite, pero collagea la cara de cada figura en la escena, impresa en un estilo cálido, gastado y hecho a mano.',
      aboutP3: 'Acá podés tirar una carta, verla darse vuelta y leer su mensaje. Sin cuentas, sin vueltas.',
      aboutTagline: ['Tirá con confianza.', 'El Carot te ama ♥'],
      followInstagram: 'Seguir en Instagram',
      // Gallery
      galleryTitle: 'Todas las cartas',
      galleryHeading: 'Los 22 arcanos',
      gallerySub: 'Tocá la que te llame.',
      // aria
      back: 'Volver',
      menu: 'Menú',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente'
    },
    en: {
      langName: 'English',
      welcome: 'Welcome!',
      homeMessage: 'I want to receive a message',
      homeQuestion: 'I have a specific question',
      homeDaily: 'Card of the Day',
      messageTitle: 'I want to receive a message',
      messageHeading: 'What would you like a message about?',
      messageLines: ['Connect with that theme.', 'Take a deep breath.', 'Choose your card.'],
      drawTitle: 'Draw a card',
      drawHeading: 'Draw a card',
      drawLines: ['Take a deep breath.', 'Choose your card.'],
      questionTitle: 'I have a specific question',
      questionHeading: 'Ask your question',
      questionSub: 'The more specific your question, the better the reading we can give you.',
      questionPlaceholder: 'Type your question here',
      drawCard: 'Draw a card',
      dailyLabel: 'Card of the day',
      yourQuestion: 'Your question',
      interpreting: 'Reading your card…',
      download: 'Download Image',
      share: 'Share',
      drawAnother: 'Draw another card',
      commentsTitle: 'Comments',
      commentCta: 'Comment',
      commentsEmpty: ['No comments yet.', 'Be the first to leave one ✨'],
      yourName: 'Your name',
      yourComment: 'Your comment…',
      post: 'Post',
      cancel: 'Cancel',
      viewAll: 'View all comments',
      viewLess: 'View less',
      seedComments: [{
        name: 'Lucía',
        date: '06.03.2026',
        text: 'I drew The Star right when I needed it most. Thank you for this beautiful deck ✨'
      }, {
        name: 'Tomás',
        date: '05.29.2026',
        text: 'Charly as The Fool is perfect. Can\u2019t think of anyone better haha.'
      }, {
        name: 'Marian',
        date: '05.21.2026',
        text: 'I use it every morning with my coffee. My favorite ritual.'
      }],
      menuAbout: 'About El Carot',
      menuAllCards: 'See all cards',
      menuBuy: 'Buy the Deck',
      menuOpenSource: 'Open Source',
      menuInstagram: 'Instagram',
      menuLove: 'El Carot loves you',
      footLove: 'loves you',
      footAbout: 'About El Carot',
      footBuy: 'Buy the Deck',
      footDaily: 'Card of the day',
      footGallery: 'See all cards',
      createdBy: 'Created by',
      developedIn: 'Developed at',
      aboutTitle: 'What is this?',
      aboutP1html: 'A tarot deck of the 22 major arcana, where each arcanum is embodied by a beloved character whose name starts with <strong>C</strong> — hence, the <em>C-arot</em>.',
      aboutP2: 'Charly García is The Fool, Cleopatra is The High Priestess, Celia Cruz is The Sun. The art keeps the classic Rider–Waite compositions, but collages each figure\u2019s face into the scene, printed in a warm, worn, handmade style.',
      aboutP3: 'Here you can draw a card, watch it flip over, and read its message. No accounts, no fuss.',
      aboutTagline: ['Pull with confidence.', 'El Carot loves you ♥'],
      followInstagram: 'Follow on Instagram',
      galleryTitle: 'All cards',
      galleryHeading: 'The 22 arcana',
      gallerySub: 'Tap the one that calls you.',
      back: 'Back',
      menu: 'Menu',
      close: 'Close',
      prev: 'Previous',
      next: 'Next'
    }
  };

  // ---- initial language: saved override → browser locale → timezone ----
  function detectLang() {
    try {
      const saved = localStorage.getItem('carot_lang');
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) {}
    const locales = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    if (locales.some(l => /^es\b|^es-/i.test(l))) return 'es';
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (/Argentina|Buenos_Aires|Cordoba|Catamarca|Mendoza|Montevideo|Santiago|Asuncion|La_Paz|Lima|Bogota|Caracas|Guayaquil|Quito|Mexico_City|Monterrey|Tijuana|Guatemala|Tegucigalpa|Managua|Costa_Rica|Panama|El_Salvador|Santo_Domingo|Havana|San_Juan|Madrid|Canary|Ceuta/i.test(tz)) return 'es';
    } catch (e) {}
    return 'en';
  }
  function cardText(card, field, lang) {
    if (!card) return '';
    if (lang === 'en') return card[field + '_en'] || card[field];
    return card[field];
  }
  const Ctx = React.createContext({
    lang: 'es',
    t: STRINGS.es,
    setLang: function () {}
  });

  // ---- ES / EN minimal switch ----
  function LangToggle(props) {
    const ctx = React.useContext(Ctx);
    const seg = {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '.08em',
      lineHeight: 1
    };
    const on = {
      ...seg,
      color: 'var(--carot-sage-light)',
      fontWeight: 500
    };
    const off = {
      ...seg,
      color: 'rgba(255,255,255,.32)',
      fontWeight: 400
    };
    return React.createElement('div', {
      role: 'group',
      'aria-label': 'Language',
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, React.createElement('button', {
      style: ctx.lang === 'es' ? on : off,
      'aria-pressed': ctx.lang === 'es',
      onClick: function () {
        ctx.setLang('es');
      }
    }, 'ES'), React.createElement('span', {
      'aria-hidden': 'true',
      style: {
        color: 'rgba(255,255,255,.22)',
        fontSize: 11
      }
    }, '/'), React.createElement('button', {
      style: ctx.lang === 'en' ? on : off,
      'aria-pressed': ctx.lang === 'en',
      onClick: function () {
        ctx.setLang('en');
      }
    }, 'EN'));
  }
  window.CAROT_STRINGS = STRINGS;
  window.CarotLangContext = Ctx;
  window.useCarot = function () {
    return React.useContext(Ctx);
  };
  window.carotDetectLang = detectLang;
  window.cardText = cardText;
  window.LangToggle = LangToggle;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/i18n.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArcanaLabel = __ds_scope.ArcanaLabel;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StarDivider = __ds_scope.StarDivider;

__ds_ns.TarotCard = __ds_scope.TarotCard;

__ds_ns.Comment = __ds_scope.Comment;

__ds_ns.Button = __ds_scope.Button;

})();
