import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};


/* 1 - Revisión del proyecto anterior: Revisé el proyecto existente de la nueva web de Obelisco v2, pero el proyecto estaba hecho en Angular 14.
2 - Creación de un nuevo proyecto: Generé un nuevo proyecto utilizando Angular 17, para aprovechar las mejoras y nuevas características de la versión más reciente.
3 - Migración de contenido: Migré todo el contenido existente del proyecto anterior al nuevo proyecto.
4 - Implementación de un sistema de rutas: El proyecto anterior no contaba con un sistema de rutas, así que lo implementé para mejorar la navegación entre componentes.
5 - Actualización de librerías de iconos: Actualicé las librerías de iconos que se estaban utilizando, ya que la versión anterior estaba deprecada.
6 - Refactorización y organización de componentes: Separé el contenido en distintos componentes para tener una estructura más limpia y ordenada del código. */