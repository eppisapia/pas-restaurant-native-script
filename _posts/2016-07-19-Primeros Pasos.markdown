---
layout: post
title: Primeros Pasos
date:   2016-07-18 13:52:50 -0430
categories: jekyll update
permalink: /primeros_pasos/
---

 ***1. Ambiente***
 
 NativeScript esta disponible como una librería javascript de [Node](https://nodejs.org/en/) tras su instalación requiere ejecutar el comando "tns doctor", el cual es propio del framework, para verificar la configuración del entorno y proceder a ejecutar el script de instalación asistida de los requerimientos para el uso del framework. Se siguió el proceso de instalación de la página oficial [Native Script - Set Up Your System](http://docs.nativescript.org/angular/start/quick-setup.html)
 
 Adicionalmente instalaremos Angular 2 con el comando

```
  npm install angular2
```

***2. Crear una aplicación***

Abrimos el terminal o consola y nos dirigimos al directorio donde queremos crear la aplicación como usaremos Angular pasaremos la etiqueta "--ng" para que Native Script implemente la plantilla de angular al crear los directorios:	

```
  tns create MyAppName --ng
  cd MyAppName
```

 Si nos dirigimos adentro de la carpeta de la aplicación podremos ver la estructura que ha montado el framework
 
<img style="display: block;
    margin-left: auto;
    margin-right: auto;" src="{{site.url}}/Images/Archivos_Iniciales.png">

 - app: Es la carpeta donde se desarrolla la aplicación, contiene todos los recursos para su construcción.
 - hooks: Por defecto, contiene una serie de archivos que NativeScript utiliza para preprocesar las instrucciones en código JavaScript.
 - node_modules: Carpeta estándar para los módulos de Node que utiliza el proyecto.
 - platforms: Es el directorio que contiene la configuración para traducir las instrucciones JavasScript a las plataformas agregadas a la aplicación.
 - package.json: Lista de módulos de Node que tiene el proyecto.
 - references.d.ts: Este archivo lista todas las declaraciones del mecanografiado que utiliza la aplicación. 
 - tsconfig.json: Contiene la configuración para el mecanografiado de su aplicación.

<p> </p>

Una vez creada la aplicación se debe agregar las plataformas en las que nuestro código sera interpretado, de lo contrario no podremos ejecutarlo en el dispositivo, para lo cual ejecutamos el siguiente código:

```
  (Para iOS)
    tns platform add ios
    
  (Para Android)
    tns platform add android
```

Tras haber agregado la plataforma podremos ejecutar el ejemplo con el comando

```
  (Para iOS)
    tns run ios
    
  (Para Android)
    tns run android
```

<img style="display: block;
    margin-left: auto;
    margin-right: auto;" src="{{site.url}}/Images/Primera_Vista.png">
