---
title: 2 canones de aceleración
description: Con Nanc-in-a-Can
slug: 2-canones-de-aceleracion
file_name: 2-canones-de-aceleracion.mp3
track_name: 2 canones de aceleración
backgroundImage: 2-canones-de-aceleracion.png
date: 2019-02-14
category:
  - Composición
  - SuperCollider
  - Exploraciones
  - Nanc-in-a-Can
  - Canon
---

Primera aproximación a canons de aceleración usando la función de coseno para generar aceleraciones y desaceleraciones graduales.

Música producida con [Nanc-in-a-Can](https://github.com/nanc-in-a-can/canon-generator).

```supercollider
(
var transps = Array.series(12, 12*4, -4).mirror.reverse;
Can.converge(\canon1,
	melody: Can.melody(
        durs: (1!400).collect({|x, i| x-((i*0.03).cos*1.4)+1.1})*[1, 1.5, 1, 1, 1]/3,
        notes: ([34, 37, 48, 41].mirror+10).pipe(_!400, _+transps,  _.flatten)
	),
	cp: 370,
	voices: Can.convoices(
		tempos: Array.series(10, 13, 1)*50,
        transps: [0,4,5,4,5, 2,0, 7]
	),
	repeat: 1,
    instruments: [\sin]
).play;
)

(
var transps = Array.series(12, 12*3, -4).mirror.reverse;
Can.converge(\canon2,
	melody: Can.melody(
        durs: (1!400).collect({|x, i| x-((i*0.03).cos*0.5)-0.3}),
        notes: ([34, 37, 48, 41].mirror.collect(_*rrand(0.8, 1.2))+ 10).pipe(_!400, _+transps,  _.flatten).scramble
    ),
	cp: 200,
	voices: Can.convoices(
		tempos: Array.series(20, 13, 0.2)*50,
        transps: (0!16)
	),
	repeat: 1,
    instruments: [\sin]
).play;
)
```

Nota, la función `.pipe` puede encontrarse [aquí](https://github.com/diegovdc/sc-object-extensions/blob/master/Object.sc).
