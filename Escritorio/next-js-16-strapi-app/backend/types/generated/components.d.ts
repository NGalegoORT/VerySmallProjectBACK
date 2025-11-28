import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentCard extends Struct.ComponentSchema {
  collectionName: 'components_component_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentCarrousel extends Struct.ComponentSchema {
  collectionName: 'components_component_carrousels';
  info: {
    displayName: 'Carrousel';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
    link: Schema.Attribute.Component<'component.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface ComponentSitioUno extends Struct.ComponentSchema {
  collectionName: 'components_component_sitio_unos';
  info: {
    displayName: 'SitioUno';
  };
  attributes: {
    alt: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String;
  };
}

export interface ComponentSitios extends Struct.ComponentSchema {
  collectionName: 'components_component_sitios';
  info: {
    displayName: 'Sitios';
  };
  attributes: {
    sitioUno: Schema.Attribute.Component<'component.sitio-uno', true>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'component.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface SingleSubTitle extends Struct.ComponentSchema {
  collectionName: 'components_single_sub_titles';
  info: {
    displayName: 'SubTitle';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
  };
}

export interface SingleTitle extends Struct.ComponentSchema {
  collectionName: 'components_single_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SingleVideo extends Struct.ComponentSchema {
  collectionName: 'components_single_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    media: Schema.Attribute.Media<'videos' | 'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.card': ComponentCard;
      'component.carrousel': ComponentCarrousel;
      'component.link': ComponentLink;
      'component.sitio-uno': ComponentSitioUno;
      'component.sitios': ComponentSitios;
      'layout.hero-section': LayoutHeroSection;
      'single.sub-title': SingleSubTitle;
      'single.title': SingleTitle;
      'single.video': SingleVideo;
    }
  }
}
