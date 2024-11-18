import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  panels = [
    {
      image: './../assets/panel/panel.svg',
      alt: 'descripción alternativa',
      title: 'Figma UI Kit',
      text: 'Simplificá tu proyecto con nuestra librería de componentes y guía de estilos, para una implementación ágil y sencilla.',
      link: './img/ui-kit/UI_KIT_-_Obelisco.fig',
      ariaLabel: 'Enlace de descarga de UI KIT.',
      buttonText: 'Descargar UI Kit'
    },
    {
      image: './../assets/panel/panel1.svg',
      alt: 'descripción alternativa',
      title: 'Sistema y estándares',
      text: 'Conocé las características que deben cumplir los desarrollos digitales para el Gobierno de la Ciudad de Buenos Aires impulsados por la Agencia de Sistemas de Información.',
      link: 'https://gcba.github.io/estandares/',
      ariaLabel: 'Enlace a Sistema y estandares de obelisco.',
      buttonText: 'Explorar sistema'
    },
    {
      image: './../assets/panel/panel2.svg',
      alt: 'descripción alternativa',
      title: 'Storybook',
      text: 'Descubrí nuestros componentes accesibles para la creación y desarrollo de productos digitales.',
      link: 'https://gcba.github.io/Obelisco/?path=/story/comenzar-inicio--instalacion',
      ariaLabel: 'Enlace a herramienta Obelisco.',
      buttonText: 'Conocer componentes'
    }
  ];
  
  news = [
    {
      image: './../assets/card/homev1.svg',
      alt: 'descripción alternativa',
      badges: ['comunicación'],
      title: 'Conocé nuestra resolución',
      text: 'Descargá la resolución publicada en el Boletín Oficial del Gobierno de la Ciudad de Buenos Aires.',
      link: 'https://documentosboletinoficial.buenosaires.gob.ar/publico/ck_PE-RES-MJGGC-SECITD-94-23-6626.pdf',
      ariaLabel: 'Enlace a resolución.',
      publicationDate: '17/05/2023'
    },
    {
      image: './../assets/card/homev1.svg',
      alt: 'descripción alternativa',
      badges: ['Buenas Prácticas', 'comunicación'],
      title: 'Mirá todas las plantillas',
      text: 'Para ahorrar tiempo y optimizar tu trabajo, te facilitamos plantillas.',
      link: 'https://gcba.github.io/obelisco-demo/index.html',
      ariaLabel: 'Enlace a templates de ejemplo.',
      publicationDate: '1/7/2023'
    }
  ];
  
}
