# mumbela.github.io

A simple blog built with [Jekyll](https://jekyllrb.com/).  

---

## 📋 Requirements

Before running this site locally, make sure you have:

- [Ruby](https://www.ruby-lang.org/en/downloads/) (>= 2.7)  
- [RubyGems](https://rubygems.org/pages/download)  
- [Bundler](https://bundler.io/)  
- [Jekyll](https://jekyllrb.com/docs/installation/)  
- [Node.js](https://nodejs.org/) (>= 18)  
- [npm](https://www.npmjs.com/get-npm)  

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Mumbela/mumbela.github.io.git
cd mumbela.github.io
```

Install Ruby and jekyll dependencies: `bundle install`

Install Node.js dependencies: `npm install`

---

## Commands
1. Start jekyll only
`npm run start:jekyll`

    Runs Jekyll with live reload and file watching.

2. Start Jekyll with drafts
`npm run start:jekyll-drafts`

    Same as above but includes draft posts and incremental builds.

3. Start JSON API only
`npm run start:api`

    Runs json-server serving _data/db.json at http://localhost:3001

4. Start everything (Jekyll + API)
`npm start`

    Runs Jekyll and the JSON API concurrently.

5. Build site
`npm run build`

6. Note: Depending on how you installed node on your windows machine, you may need to bypass powershell's scripting policy in your terminal:

    `powershell -ExecutionPolicy Bypass npm install`

---

## Issues

If you run into problems, please open an issue:
https://github.com/Mumbela/mumbela.github.io/issues

---

## License

Licensed under [CC-BY-NC-4.0](https://spdx.org/licenses/CC-BY-NC-4.0.html).
See the LICENSE file for details.
