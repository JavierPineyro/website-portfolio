import type { Project } from "./types"

export const Links = [
  {
    label: 'Inicio',
    url: '#top',
  },
  {
    label: 'Proyectos',
    url: '#proyectos',
  },
  {
    label: 'Tecnologías',
    url: '#tecnologias',
  },
  {
    label: 'Sobre Mi',
    url: '#sobremi',
  },
]

const tech = {
  react: {
    name: "React",
    colors: {
      text: "text-pink-300",
      border: "border-pink-300"
    }
  },
  tailwind: {
    name: "Tailwind",
    colors: {
      text: "text-cyan-200",
      border: "border-cyan-200"
    }
  },
  cssmodules: {
    name: "Css modules",
    colors: {
      text: "text-fuchsia-400",
      border: "border-fuchsia-400"
    }
  },
  vite: {
    name: "Vite",
    colors: {
      text: "text-orange-300",
      border: "border-orange-300"
    }
  },
  nextjs: {
    name: "NextJs",
    colors: {
      text: "text-indigo-400",
      border: "border-indigo-400"
    }
  },
  typescript: {
    name: "Typescript",
    colors: {
      text: "text-sky-400",
      border: "border-sky-400"
    }
  },
  chakraui: {
    name: "ChakraUI",
    colors: {
      text: "text-lime-300",
      border: "border-lime-300"
    }
  },
  javascript: {
    name: "Javascript",
    colors: {
      text: "text-yellow-300",
      border: "border-yellow-300"
    }
  },
  nodejs: {
    name: 'Node.js',
    colors: {
      text: "text-green-600",
      border: "border-green-600"
    }
  }
}

export const ProjectsList: Project[] = [
  {
    title: "Aplicación de Gestión Turnos",
    description: "App para la gestión turnos para la peluquería/barbería 'Club de Caballeros'",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_60,w_1051/v1715355878/peluqueria_yxxryv.webm",
    
    url: "#top",
    repo: "https://github.com/JavierPineyro/peluqueria-turnos",
    stack: [
      {
        name: tech.nextjs.name,
        color: `${tech.nextjs.colors.text} ${tech.nextjs.colors.border}`
      },
      {
        name: tech.typescript.name,
        color: `${tech.typescript.colors.text} ${tech.typescript.colors.border}`
      },
      {
        name: "PostgreSQL",
        color: `${tech.tailwind.colors.text} ${tech.tailwind.colors.border}`
      },
    ]
  },
  {
    title: "Shurly acortador de links",
    description: "Acorta tus urls fácil, rápido y sin registrarte!",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_60,w_1051/v1684009911/shurly-video_g2bhxn.webm",
    url: "https://shurly-vikf.onrender.com/",
    repo: "https://github.com/JavierPineyro/shurly",
    stack: [
      {
        name: tech.nodejs.name,
        color: `${tech.nodejs.colors.text} ${tech.nodejs.colors.border}`
      },
      {
        name: tech.react.name,
        color: `${tech.react.colors.text} ${tech.react.colors.border}`
      },
      {
        name: tech.tailwind.name,
        color: `${tech.tailwind.colors.text} ${tech.tailwind.colors.border}`
      }
    ]
  },
  /*{
    title: "Weather app",
    description: "App del clima para saber la condición meteorológica de una ciudad",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_60,w_1051/v1684022427/weadr-video_x6ypns.webm",
    url: "https://weadr.vercel.app",
    repo: "https://github.com/JavierPineyro/weadr",
    stack: [
      {
        name: tech.react.name,
        color: `${tech.react.colors.text} ${tech.react.colors.border}`
      },
      {
        name: tech.cssmodules.name,
        color: `${tech.cssmodules.colors.text} ${tech.cssmodules.colors.border}`
      },
      {
        name: tech.vite.name,
        color: `${tech.vite.colors.text} ${tech.vite.colors.border}`
      },
    ]
  },*/
  {
    title: "Sistema de Gestión del Instituto Zalesak",
    description: "Sistema de Gestión para un instituto de taekwondo local",
    //thumnail: "https://res.cloudinary.com/djmwmstro/image/upload/v1738368548/Captura_desde_2025-01-31_21-08-43_gmd7zq.png",
    thumnail: "https://res.cloudinary.com/djmwmstro/image/upload/v1738368548/Captura_desde_2025-01-31_21-08-43_gmd7zq.png",
    url: "https://sistema-instituto-zalesak.vercel.app",
    repo: "https://github.com/JavierPineyro/sistema-instituto-zalesak",
    stack: [
      {
        name: tech.react.name,
        color: `${tech.react.colors.text} ${tech.react.colors.border}`
      },
      {
        name: tech.typescript.name,
        color: `${tech.typescript.colors.text} ${tech.typescript.colors.border}`
      },
      {
        name: "PostgreSQL",
        color: `${tech.tailwind.colors.text} ${tech.tailwind.colors.border}`
      },
    ]
  },
  {
    title: "Search Country App",
    description: "Web app para buscar información sobre países",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_60,w_1051/v1684022421/country-search-video_vhanyz.webm",
    url: "https://search-country-javierpineyro.vercel.app/",
    repo: "https://github.com/JavierPineyro/next-country",
    stack: [
      {
        name: tech.nextjs.name,
        color: `${tech.nextjs.colors.text} ${tech.nextjs.colors.border}`
      },
      {
        name: tech.react.name,
        color: `${tech.react.colors.text} ${tech.react.colors.border}`
      },
      {
        name: tech.typescript.name,
        color: `${tech.typescript.colors.text} ${tech.typescript.colors.border}`
      },
    ]
  },
  {
    title: "Advency challenge",
    description: "Code challenge de navidad de GoncyPozzo",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_60,w_1051/v1684022419/advency-videowebm_xuoa4s.webm",
    url: "https://javierpineyro.github.io/advency-challenge/",
    repo: "https://github.com/JavierPineyro/advency-challenge",
    stack: [
      {
        name: tech.react.name,
        color: `${tech.react.colors.text} ${tech.react.colors.border}`
      },
      {
        name: tech.chakraui.name,
        color: `${tech.chakraui.colors.text} ${tech.chakraui.colors.border}`
      },
      {
        name: tech.javascript.name,
        color: `${tech.javascript.colors.text} ${tech.javascript.colors.border}`
      },
    ]
  },
]