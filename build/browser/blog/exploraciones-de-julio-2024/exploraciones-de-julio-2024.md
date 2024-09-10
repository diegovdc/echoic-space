---
title: "Exploraciones de Julio 2024" 
description: "El mes del 7˚ armónico: 19 Improvisaciones/composiciones que documentan ideas, estados, emociones y temas explorados durante este mes, con particular énfasis en la creación y exploración de escalas que utilizan el 7˚ armónico en sus proporciones"
slug: exploraciones-de-julio-2024
seo:
  img: 16.jpg
  width: 1200
  height: 1200
play-action:
  action: scroll-to-id
  args: 
    - "archive-iframe"
include_in_music_archive: true
backgroundImage: 15.jpg
date: 2024-06-30
category:
  - Composición
  - Improvisación
  - Exploraciones
  - Microtonalidad
  - Erv Wilson
  - Lumatone
  - 7mo Armónico
  - Escalas no-octavantes
  - Live Coding
  - Síntesis
  - Radio Nabu Congul 98.8 FM
---


## Playlist

<div style="position: relative">
   <p style="position: absolute; top: 0; z-index: 1;">Player loading, please wait...</p>
   <iframe id="archive-iframe" style="position: relative; z-index: 2;"  src="https://archive.org/embed/musical-explorations-for-july-2024-videco&amp;playlist=1" width="500" height="500" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
</div>


[English text below]

## Introducción
Durante Julio en el canal de `tuning` del sintetizador `Surge` en Discord [Jacky Ligon](https://jackyligon.com/) promovió la creación de piezas musicales usando el armónico 7, puesto que este mes es séptimo del año. La propuesta involucraba la utilización de las combinaciones de 7 con otros números primos correspondientes a los diversos días del mes, por lo que se exploraron intervalos como 11/7, 14/13, 17/7, etc. 

Algunas de estas piezas también forman parte de bocetos realizados para y durante la residencia en [Radio Nabu Congul 98.8 FM, Anaphoria](https://anaphoria.com/cortina.html).

## For Erv Wilson (22 tone 7-limit Marimba Scale) (Julio 1)

Desde que conocí su trabajo he pensado que las escalas diseñadas por Erv Wilson son algunas de las más elegantes y fascinantes con las que he tocado. Para empezar este mes quise comenzar con una escala que desconocía, proveniente del [archivo Scala](https://www.huygens-fokker.org/scala/downloads.html). 
La pieza fue escrita en una de las permutaciones Marwa de algún MOS (momento de simetría) de la escala de 22 tonos.

``` 
! wilson7.scl
!
Wilson's 22-tone 7-limit 'marimba' scale
 22
!
 28/27
 16/15
 10/9
 9/8
 7/6
 6/5
 5/4
 35/27
 4/3
 27/20
 45/32
 35/24
 3/2
 14/9
 8/5
 5/3
 27/16
 7/4
 9/5
 15/8
 35/18
 2/1
```

## Seveny Noodles (I - III) - periodo 7/4 - (Julio 2)

Tres pequeñas piezas usando una escala con un periodo de `7/4`.

```
! 10tone-7o4-period.scl
!

 10
!
2560/2401
8/7
1280/1029
4/3
10240/7203
3456/2401
3/2
80/49
12/7
7/4
```

Las proporciones usadas para la escala se pueden calcular de la siguiente manera:

```clj
1
4/3
3/2
8/7
8/7 * 5/4
8/7 * 5/4 * 4/3
7/4 * 5/4
7/4 * 5/4 * 4/3
7/4 * 3/2
7/4 * 3/2 * 9/8
```

## Wilson 7/4 MOS (I y II) (Julio 7)
Dos piezas usando diferentes subconjuntos de un MOS con un generador de 7/4.

## Longer Seveny Noodles (I - IV) (Julio 8)
Cuatro piezas más extensas continuando la exploración de la escala con periodo `7/4` descrita más arriba.

## Homenaje a un Raga (Julio 9)
Pieza inspirada por algunas ejecuciones del Raga Darbari que escuche en esos días. El Raga Darbari es también una escala de limite 7. Pero en este casu utilicé una escala derivada de la escala de periodo `7/4` descrita más arriba. Sin embargo, el caracter de la música sí se inspira en este raga.

## Tres piezas sobre 7/11 (Julio 11)
Las primeras dos piezas están basadas en una escala que utiliza únicamente 2, 7 y 11 como factores. Se trata de una escala simétrica y que es una estructura constante.

```
! 11t-7&11-CS.scl
!

 11
!
128/121
8/7
77/64
14/11
11/8
16/11
11/7
128/77
7/4
121/64
2/1
```

La última pieza es una escala de variedad estrica de tres intervalos diseñada por Jacky Ligon.

Los timbres utilizados también fueron diseñados por Ligon.

## 5-EDO NEJI basado en 14/13 (Julio 13 y 14)
Escala cercana a 5 divisiones iguales por octava, simétrica y utiliza el intervalo de 14/13.

```
! 7&13-5ED2-NEJI
!
Symmetric NEJI based on 14/13^2
 5
!
196/169
4/3
3/2
169/98
2/1
```

Se puede calcular de la siguiente manera:

```
1
14/13 * 14/13
13/7 * 13/14)
4/3
3/2
```

La síntesis fue realizada con Surge.

## Danza de la Sinapsis Micelial - 17/7 JI - (Julio 17)

La escala tiene un periodo de una tritava (`3/1`) para poder utiliza el intervalo 17/7 sin reducirlo a la octava.

```
! 17/7
!

 8
!
17/14
4/3
3/2
34/21
2/1
17/7
8/3
3/1
```

El código en `clojure` que genera esta escala muestra su sencillez.

```clojure
(let [cell [1 17/7]]        
  (concat cell
    (map #(* 3/2 %) cell)
    (map #(* 17/5 3/2 %) cell)))
```

Se trata de las proporciones `1/1` y `17/7` concatenados a sus proyecciones sobre `3/2` y posteriormente sobre el `17/5` de `/3/2`.

Síntesis realizada con Surge, con patches de Jacky Lingon y A.Liv, Pisome Send Sound. Y la pieza fue generada con live coding.

## Algo Esperanzador ...eso parece (Pa' Toñita) - 7-EDO NEJI (Julio 23)

Pieza live codeada con otra escala simétrica que se aproxima a 7 divisiones iguales por octava. Puesto que las terceras en las triadas son neutras, la música tiene una ambigüedad en la percepción; para mi escucha, al comienzo la armonía suena con una tendencia a un color menor, pero durante el transcurso de la pieza comienza a tender a un color armónico mayor.

```
! 23/7
!

 7
!
23/21
69/56
4/3
3/2
23/14
16/9
2/1
```

El código de `clojure` se parece mucho al de la pieza anterior.

```
(let [cell [1 23/7 4/3]]
  (concat cell
          (map #(* 4/3 %) cell)
          (map #(* 3/2 %) cell)))
```

La síntesis fue realizada con Surge e incluye un patch de A.Liv.

## La Bestia No Respira - escala primodal /29 - (Julio 29)
El nombre deriva, si no me equivoco de una referencia de Morton Feldman acerca de la concepción de Stravinsky del órgano.

La escala es hexatónica y todos los intervalos se construyen sobre el armónico `29`. Por lo que puede considerars como una escala primodal.

```
! 7 & 29
!
An experiment
 6
!
35/29
42/29
46/29
49/29
55/29
2/1
```

## Invocación (para Suzanne y Terry) - 31/28 JI (Julio 31)
Pieza en homenaje a Suzanne Ciani y Terry Riley. La proporcion principal es 31/28.

```
1
31/28
31/28 * 3/2
31/28 * 7/6 
31/28 ** 31/28 * 7/6
```

Se utilizaron 3 variantes de la escala: una de 3 tonos, otra de 4 y otra de 5. Cada parte de la improvisación agrega una nota más.

```
! 31o28[5]
!

 5
!
31/28
31/24
961/672
93/56
2/1
```

La síntesis fue realizada con Surge.

------------


## Introduction
During July, in the `tuning` channel of the `Surge` synthesizer Discord server, [Jacky Ligon](https://jackyligon.com/) promoted the creation of musical pieces using the 7th harmonic, as this month is the seventh of the year. The proposal involved using combinations of 7 with other prime numbers corresponding to the different days of the month, exploring intervals such as 11/7, 14/13, 17/7, etc.

Some of these pieces are also part of sketches made for and during the residency at [Radio Nabu Congul 98.8 FM, Anaphoria](https://anaphoria.com/cortina.html).

## For Erv Wilson (22 tone 7-limit Marimba Scale) (July 1)
Since discovering his work, I have thought that the scales designed by Erv Wilson are some of the most elegant and fascinating. To start this month, I wanted to begin with a scale I was unfamiliar with, found in the [Scala archive](https://www.huygens-fokker.org/scala/downloads.html). 
The piece was written in one of the Marwa permutations of a MOS (moment of symmetry) of the 22-tone scale.

``` 
! wilson7.scl
!
Wilson's 22-tone 7-limit 'marimba' scale
 22
!
 28/27
 16/15
 10/9
 9/8
 7/6
 6/5
 5/4
 35/27
 4/3
 27/20
 45/32
 35/24
 3/2
 14/9
 8/5
 5/3
 27/16
 7/4
 9/5
 15/8
 35/18
 2/1
```

## Seveny Noodles (I - III) - 7/4 Period - (July 2)
Three short pieces using a scale with a `7/4` period.

```
! 10tone-7o4-period.scl
!

 10
!
2560/2401
8/7
1280/1029
4/3
10240/7203
3456/2401
3/2
80/49
12/7
7/4
```

The ratios used for the scale can be calculated as follows:

```clj
1
4/3
3/2
8/7
8/7 * 5/4
8/7 * 5/4 * 4/3
7/4 * 5/4
7/4 * 5/4 * 4/3
7/4 * 3/2
7/4 * 3/2 * 9/8
```

## Wilson 7/4 MOS (I and II) (July 7)
Two pieces using different subsets of a MOS with a 7/4 generator.

## Longer Seveny Noodles (I - IV) (July 8)
Four longer pieces continuing the exploration of the scale with the `7/4` period described above.

## Homage to a Raga (July 9)
Piece inspired by some performances of Raga Darbari I listened to during those days. The Raga Darbari is also a 7-limit scale. However, in this case, I used a scale derived from the `7/4` period scale described above. Nonetheless, the character of the music is inspired by this raga.

## Three Pieces on 7/11 (July 11)
The first two pieces are based on a scale that uses only 2, 7, and 11 as factors. It is a symmetric scale and has a constant structure.

```
! 11t-7&11-CS.scl
!

 11
!
128/121
8/7
77/64
14/11
11/8
16/11
11/7
128/77
7/4
121/64
2/1
```

The last piece is a strict variety scale of three intervals designed by Jacky Ligon.

The timbres used were also designed by Ligon.

## 5-EDO NEJI based on 14/13 (July 13 and 14)
A scale close to 5 equal divisions per octave, symmetric, and uses the interval of 14/13.

```
! 7&13-5ED2-NEJI
!
Symmetric NEJI based on 14/13^2
 5
!
196/169
4/3
3/2
169/98
2/1
```

It can be calculated as follows:

```
1
14/13 * 14/13
13/7 * 13/14)
4/3
3/2
```

The synthesis was done with Surge.

## Dance of the Mycelial Synapse - 17/7 JI - (July 17)

The scale has a period of a tritave (`3/1`) to allow the use of the 17/7 interval without reducing it to the octave.

```
! 17/7
!

 8
!
17/14
4/3
3/2
34/21
2/1
17/7
8/3
3/1
```

The `clojure` code that generates this scale shows its simplicity.

```clojure
(let [cell [1 17/7]]        
  (concat cell
    (map #(* 3/2 %) cell)
    (map #(* 17/5 3/2 %) cell)))
```

These are the ratios `1/1` and `17/7` concatenated to their projections over `3/2` and later over `17/5` of `/3/2`.

Synthesis performed with Surge, using patches by Jacky Lingon and A.Liv, Pisome Send Sound. The piece was generated with live coding.

## Something Hopeful...it Seems (For Toñita) - 7-EDO NEJI (July 23)

A live-coded piece with another symmetric scale that approximates 7 equal divisions per octave. Since the thirds in the triads are neutral, the music has an ambiguity in perception; in my listening, at the beginning, the harmony sounds with a tendency towards a minor color, but throughout the piece, it begins to tend towards a major harmonic color.

```
! 23/7
!

 7
!
23/21
69/56
4/3
3/2
23/14
16/9
2/1
```

The `clojure` code is very similar to that of the previous piece.

```
(let [cell [1 23/7 4/3]]
  (concat cell
          (map #(* 4/3 %) cell)
          (map #(* 3/2 %) cell)))
```

The synthesis was done with Surge and includes a patch by A.Liv.

## The Beast Does Not Breathe - primodal scale /29 - (July 29)
The name derives, if I am not mistaken, from a reference by Morton Feldman about Stravinsky's conception of the organ.

The scale is hexatonic, and all ratios are built on the `29` harmonic, so it can be considered a primodal scale.

```
! 7 & 29
!
An experiment
 6
!
35/29
42/29
46/29
49/29
55/29
2/1
```

## Invocation (for Suzanne and Terry) - 31/28 JI (July 31)
Piece in homage to Suzanne Ciani and Terry Riley. The main ratio is 31/28.

```
1
31/28
31/28 * 3/2
31/28 * 7/6 
31/28 ** 31/28 * 7/6
```

Three variants of the scale were used: one of 3 tones, one of 4, and another of 5. Each part of the improvisation adds one more note.

```
! 31o28[5]
!

 5
!
31/28
31/24
961/672
93/56
2/1
```

The synthesis was done with Surge.
