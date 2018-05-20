---
layout: post
title: ¿Como proteger tus archivos/carpetas en Linux?
---
## Introducción 
A veces "Si no es que siempre" es necesario proteger nuestros archivos de cualquier intruso o mirón. 

Si eres de los que suele compartir su pc, con algún familiar o cualquier otra persona, quizá haya archivos o carpetas quisieras  restringir su acceso. Si esto es así te invito a conocer como proteger tus "archivos/carpetas" en este sistema operativo.

## Vamos a ello!

En linux , los permisos a recursos tales como "carpetas/archivos/directorios" se pueden manejar de distintas formas, y una de ellas es el sistema numerico octal.

Vé aqui una imagen.

![Permisos Linux]({{ site.baseurl }}/images/permisos_Linux.png)

Como vemos en la imagen cada uno de estos permisos, corresponden a un numero en el sistema numérico octal.

El rwx vemos que pertenece al numero 7,lo que significa que si tenemos "777" estamos haciendo referencia a los permisos de lectura, escritura y ejecución. 

Lo mismo aplicá para los demás permisos, en esta ocasión los permisos que nos interesan son los de "rwx" y "- - -" siendo  "777" y "000" en sistema octal.

En dónde "000" se refiere a que no se concede ningun permiso para el usuario actual.

