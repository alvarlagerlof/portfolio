import { Preview } from '@storybook/react'

async function loadStyle1() {
  await new Promise(resolve => setTimeout(resolve, 30));
  return `button { background: red !important; }`
}

async function loadStyle2() {
  await new Promise(resolve => setTimeout(resolve, 30));
  return `button { background: green !important; }`
}


async function loadStyle3() {
  await new Promise(resolve => setTimeout(resolve, 30));
  return `button { padding: 20px !important; }`
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