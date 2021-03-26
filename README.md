<div align="center">
    <div><span>🤖</span></div>
    <h1 align="center">Optimus</h1>
    <p>This is the UI library for Tripplo's Optimus design system. 
    <a href="https://github.com/Tripplo-Software/optimus" title="Tripplo Optimus">
    </a>
    <p>
      <img alt="MIT License" src="https://img.shields.io/github/license/Tripplo-Software/optimus"/>
      <img src="https://img.shields.io/github/issues/Tripplo-Software/optimus">
      <img src="https://img.shields.io/npm/v/optimus-ui">
    </p>
  </div>
  Optimus UI is a React component library built with TailwindCSS for  <a href="htpps://tripplo.co">Tripplo</a>'s frontends.

## Documentation 📝

To read up on how to use the components head over to <a href="https://optimus-ui.netlify.app/">Storybook</a>.

## Getting started ⛑️

```shell
$ yarn add optimus-ui
```

Or use NPM if you prefer:

```
$ npm i optimus-ui
```

## Usage 🍩

```tsx
import './styles.css'
//import the components from the package
import { Button, Typography } from 'optimus-ui'
//make sure to include the stylesheet in the root of your app
import 'optimus-ui/dist/optimus-ui.css'
export default function App() {
  return (
    <div className="App">
      <Typography variant="HeadingThree">Hello CodeSandbox</Typography>
      <h2>Start editing to see some magic happen!</h2>
      <Button variant="BlueDarkButton" size="small">
        Button
      </Button>
    </div>
  )
}
```

## CodeSandbox Templates 💵

- [JavaScript Starter](https://codesandbox.io/s/black-leaf-vxh85?file=/src/App.js)
- [TypeScript Starter](https://codesandbox.io/s/upbeat-babbage-ji60r?file=/src/App.tsx)

## How to contribute

TBA

## License

MIT © [Tripplo Software](https://github.com/Tripplo-Software)
