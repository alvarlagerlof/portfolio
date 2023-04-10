import { Preview } from '@storybook/react'

async function withStyles(context) {
  const { parameters: { stylesPath } } = context;
  // Asynchronously import styles and append them to `<head>`

  console.log("before")
  await new Promise(resolve => setTimeout(resolve, 30));

  var style = document.createElement('style');
  style.id = 'myFavicon';
  style.textContent = `button { background: red !important; }`

  document.head.appendChild(style)
  console.log("after")

  console.log(context)


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