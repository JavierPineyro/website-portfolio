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

// export const Projects = [
//   {
//     title: "Juego Tic-Tac-Toe",
//     description: "Mini juego construído con React y Tailwind",
//     url: "https://tic-tac-toe-vite-javierpineyro.vercel.app/",
//     repo: "https://github.com/JavierPineyro/tic-tac-toe-vite",
//     stack: [
//       {name: "React", color: "text-pink-400 border-pink-400"}, 
//       {name: "Tailwind", color: "text-cyan-300 border-cyan-300"}, 
//       {name: "Vite", color: "text-orange-500 border-orange-500"}
//     ]
//   },
//   {
//     title: "Search Country App",
//     description: "Web app para buscar información sobre países",
//     url: "https://search-country-javierpineyro.vercel.app/",
//     repo: "https://github.com/JavierPineyro/next-country",
//     stack: [
//       {name: "NextJs", color:"text-indigo-400 border-indigo-400"}, 
//       {name: "React", color: "text-pink-400 border-pink-400"}, 
//       {name: "Typescript", color:"text-sky-500 border-sky-500"}
//     ]
//   },
//   {
//     title: "Advency challenge",
//     description: "Code challenge de navidad de GoncyPozzo",
//     url: "https://javierpineyro.github.io/advency-challenge/",
//     repo: "https://github.com/JavierPineyro/advency-challenge",
//     stack: [
//       {name: "React", color: "text-pink-400 border-pink-400"}, 
//       {name: "ChakraUI", color:"text-lime-500 border-lime-500"}, 
//       {name: "Javascript", color:"text-yellow-500 border-yellow-500"}
//     ]
//   },
//   {
//     title: "TODO app",
//     description: "Aplicación Web TO-DO para organizar tareas",
//     url: "https://javierpineyro.github.io/to-do-chakra/",
//     repo: "https://github.com/JavierPineyro/to-do-chakra",
//     stack: [
//       {name: "React", color: "text-pink-400 border-pink-400"}, 
//       {name: "ChakraUI", color:"text-lime-500 border-lime-500"}, 
//       {name: "Vite", color: "text-orange-500 border-orange-500"}
//     ]
//   },
//   {
//     title: "Mini Tienda w/ Shopping Cart",
//     description: "Mini Ecommerce con carrito de compras",
//     url: "https://github.com/JavierPineyro/mini-cart",
//     repo: "https://github.com/JavierPineyro/mini-cart",
//     stack: [
//       {name: "React", color: "text-pink-400 border-pink-400"}, 
//       {name: "Typescript", color:"text-sky-500 border-sky-500"}, 
//       {name: "Tailwind", color: "text-cyan-300 border-cyan-300"}
//     ]
//   }
// ]

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

export const Projects = [
  {
    title: "Weather app",
    description: "App del clima para saber la condición meteorológica de una ciudad",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_55,w_1051/v1684022427/weadr-video_x6ypns.webm",
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
  },
  {
    title: "Shurly acortador de links",
    description: "Acorta tus urls fácil, rápido y sin registrarte!",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_55,w_1051/v1684009911/shurly-video_g2bhxn.webm",
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
  {
    title: "Search Country App",
    description: "Web app para buscar información sobre países",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_55,w_1051/v1684022421/country-search-video_vhanyz.webm",
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
    title: "Juego Tic-Tac-Toe",
    description: "Mini juego construído con React y Tailwind",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_55,w_1051/v1684022413/tictactoe-video_xtyplo.webm",
    url: "https://tic-tac-toe-vite-javierpineyro.vercel.app/",
    repo: "https://github.com/JavierPineyro/tic-tac-toe-vite",
    stack: [
      {
        name: tech.react.name,
        color: `${tech.react.colors.text} ${tech.react.colors.border}`
      },
      {
        name: tech.tailwind.name,
        color: `${tech.tailwind.colors.text} ${tech.tailwind.colors.border}`
      },
      {
        name: tech.vite.name,
        color: `${tech.vite.colors.text} ${tech.vite.colors.border}`
      },
    ]
  },
  {
    title: "TODO app",
    description: "Aplicación Web TO-DO para organizar tareas",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_55,w_1051/v1684278943/todo-chakra-video_kq31fo.webm",
    url: "https://javierpineyro.github.io/to-do-chakra/",
    repo: "https://github.com/JavierPineyro/to-do-chakra",
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
        name: tech.vite.name,
        color: `${tech.vite.colors.text} ${tech.vite.colors.border}`
      }
    ]
  },
  {
    title: "Advency challenge",
    description: "Code challenge de navidad de GoncyPozzo",
    thumnail: "https://res.cloudinary.com/javipineyro/video/upload/c_scale,q_55,w_1051/v1684022419/advency-videowebm_xuoa4s.webm",
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
