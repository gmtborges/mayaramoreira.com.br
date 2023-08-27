import { getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Início', href: '/' },
    { text: 'Sobre mim', href: '/#sobre-mim' },
    { text: 'Currículo', href: '/#curriculo' },
    { text: 'Trabalhos', href: '/#trabalhos' },
    { text: 'Blog', href: '/blog' },
  ],
  actions: [
    {
      text: 'Contato',
      href: '#',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Endereço',
      links: [
        { text: 'Clinica X', href: '#' },
        { text: 'Clinica y', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '@dramayaramoreiraa', href: 'https://instagram.com/dramayaramoreiraa' },
    { text: 'Whatsapp +55 62 9', href: 'https://wa.me/55629' },
    { text: 'Telefone: +55 62 9', href: 'tel://+55629' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/dramayaramoreiraa' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contato@mayaramoreira.com.br' },
  ],
  footNote: `
    Feito com 💙 por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://gmtborges.com/" target="_blank">gmtbores.com</a>
  `,
};
