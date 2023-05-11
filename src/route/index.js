// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================

var header = {
  name: {
    firstname: 'Mark',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ per month',
  address: 'Lviv Region Lviv Stryjska 13',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'href=mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
               work on a new project I learn the domain and try to understand the idea of the project. Good team
               player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experiance',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,

    main: {
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'HandleBars', point: 9, isTop: false },
        { name: 'VS Code', point: 8, isTop: true },
        { name: 'Git', point: 7, isTop: false },
        { name: 'Terminal', point: 6, isTop: true },
        { name: 'NPM', point: 5, isTop: true },
        { name: 'React', point: 0, isTop: false },
        { name: 'PHP', point: null, isTop: false },
      ],
      hobbies: [
        { name: 'HTML Cding', isMain: true },
        { name: 'Driving', isMain: true },
        { name: 'Eating', isMain: true },
        { name: 'Building', isMain: false },
        { name: 'Farming', isMain: false },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,
    main: {
      educations: [
        { name: 'Kyiv Univer', isEnd: true },
        { name: 'Lviv Univer', isEnd: false },
        { name: 'Lviv PoliTech', isEnd: true },
        { name: 'Lviv Step Univer', isEnd: false },
      ],
      certificates: [
        { name: 'Developer', id: 10 },
        { name: 'Tester', id: 9 },
        { name: 'Designer', id: 8 },
        { name: 'Admin', id: 7 },
      ],
    },
    footer,
  })
})
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior FS Dev',
          company: {
            name: 'IT BRAINS',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmout: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about:
                'Airbnb competitot.High-load application',
              stacks: [
                { name: 'React' },
                { name: 'HTML' },
                { name: 'NodeJS' },
              ],
              awards: [
                { name: 'Certificat 1' },
                { name: 'Certificat 2' },
                { name: 'Certificat 3' },
              ],
              stackAmout: 3,
              awardAmout: 3,
            },
          ],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
