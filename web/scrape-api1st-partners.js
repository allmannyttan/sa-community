const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const path = require('path')

module.exports = function () {
  return new Promise((resolve, reject) => {
    request('https://api1st.org/', {}, (err, res, body) => {
      if (err) {
        console.error(err)
        return reject(err)
      }
      const $ = cheerio.load(body)
      const bla = []
      $('footer .footer-widget__about a').map((i, el) => {
        bla.push({
          ...el.children[0].attribs,
          href: el.attribs.href,
        })
      })

      const file_path = path.join(__dirname, 'public/', 'partners.json')
      fs.writeFileSync(file_path, JSON.stringify(bla))
      resolve(file_path)
    })
  })
}
