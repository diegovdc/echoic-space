---
title: Experimentando con fluent can
description: una nueva API para Nanc-in-a-Can
slug: 2019-03-23_experimentando-con-fluent-can
# file_name: 21-nubes-y-28-palabras-version-2.mp3
track_name: Experimentando con fluent can
backgroundImage: 2019-03-23_experimentando-con-fluent-can.png
date: 2019-03-23
category: Bitácora
---


5 canones que parten de un modelo: el canon `a`.

Una serie de duraciones que crece y decrece.

Cada canon tiene un periodo distinto por lo que gradualmente van desfasándose unos de otros generando diferentes patrones y acentuaciones.

Las capas agudas me hacen pensar en una textura noturna de insectos.

```supercollider
Can.init
s.boot


(
~durs = (1..2**3.6)
.pipe(
    _.log2,
    {|n| n - (n.asInteger)}, 
    _*2,
    _+1,
    _.normalize,
    _+0.1,
)
)
(
a = FluentCan(\loggy, durs: ~durs, notes: [40, \rest, [40, 40, 47]], tempos: [1, 7/6], transps: [0, 12], period: 4)
.play
)

(
b = a.copy.def_(\l2)
.cp_(10)
.durs_(a.durs)
.durs_(~durs)
.instruments_([\sin])
.mapNotes(_*[1.5, 1.2])
.mapTransps(_+[7, 7.2])
.meta_((amp: 0.1))
.mapTempos(_.pipe(_.collect({|t, i| t*(i+1)}), _.postln))
.period_(5)
.play
)


(c = b.copy.def_(\l3)
.mapNotes(_*[1, 1, 1.3]*[1.1, 0.9])
.durs_(~durs)
.period_(5 + 7/5)
.mapTempos(_*[1, 7/5])
.meta_((amp: 0.02))
.play
)


(d = c.copy.def_(\l4)
.durs_(~durs)
.mapNotes(_.pipe(_.rotate(10), _+[3, 2, 1, 0]))
.period_(5 + 10/5)
.mapTempos(_*[1, 9/5])
.meta_((amp: 0.01))
.play
)

(
e = d.copy.def_(\l5)
// .durs_(~durs)
.mapTransps(_+19)
.mapNotes(_+[0, -1, -2, -3, -4, -3, -2, -1, 0])
.period_(d.period+13)
.play
)
```