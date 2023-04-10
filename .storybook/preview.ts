import { Preview } from '@storybook/react'

import style1 from "./style1.css"
import style2 from "./style2.css"
import style3 from "./style3.css"


async function loadStyle1() {
  await new Promise(resolve => setTimeout(resolve, 30));
  return style1
  // return (await import(/* webpackIgnore: true */ "./style1.css")).default
}

async function loadStyle2() {
  await new Promise(resolve => setTimeout(resolve, 30));
  return style2
  // return (await import(/* webpackIgnore: true */ "./style2.css")).default
}


async function loadStyle3() {
  await new Promise(resolve => setTimeout(resolve, 30));
  return style3
  // return (await import(/* webpackIgnore: true */ "./style3.css")).default
}

async function withStyles(context) {
  const { title } = context;

  // console.log("before")

  let finalStyles = ""

  if (title.startsWith("Example")) {
    finalStyles += await loadStyle1()
  }

  if (title.startsWith("Testing")) {
    finalStyles += await loadStyle2()
    finalStyles += await loadStyle3()
  }

  console.log({finalStyles})

  const existingStyleTag = document.querySelector('[data-name="customStyle"]')

  if (existingStyleTag) {
    existingStyleTag.textContent = finalStyles
  } else {
    var style = document.createElement('style');
    style.textContent = finalStyles
    style.dataset.name = "customStyle"
    document.head.appendChild(style)
  }

  // console.log("after")


  return {}
}


const preview: Preview = {
  loaders: [withStyles],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
}
export default preview