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

## Sin intrusos o mirones
Lo primero que haremos es abrir una terminal (control+alt+t) y localizar la carpeta, directorio o archivo que deseamos proteger.  
Una vez que hemos encontrado el directorio, carpeta o archivo que deseamos proteger escribiremos en la terminal lo siguiente:
```
chmod 000 [carpeta/directorio/archivo]

```
Este comando lo que hará es limitar el acceso solo a nuestro usuario root, dónde solo el root podrá realizar operaciones con el recurso. En cambio si es un usuario normal sin permisos de root, y esté desea ver el recurso, se le niegara el acceso.

### ¿Como reestablecezco los permisos?

Bueno para hacer esto basta con abrir de nuevo una terminal (control+alt+t) y localizar la carpeta a regresar los permisos, para esto simplemente escribimos el siguiente comando:

```
chmod 777 [carpeta/directorio/archivo]
```
y vuála tu carpeta estará desprotegida nuevamente ;).

#### Nota

Este método no es una protección difinitiva para tus archivos, pero si que te puede servir para intrusos inexperimentados.
Saludos!!!.

