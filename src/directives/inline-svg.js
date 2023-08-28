export const vInlineSvg = {
  mounted(el, binding) {
    const url = binding.value
    loadInlineSvg(el, url)
  }
}

export async function loadInlineSvg (el, path, { removeInlineStyles} = {}) {
  const result = {
    svg: null
  }

  if (!(el instanceof HTMLElement)) {
    throw new TypeError('el parameter must be a type of HTMLElement')
  }

  return new Promise((resolve, reject) => {
    fetch(path)
      .then(response => response.text())
      .then(text => {
        if (!text) {
          reject(result)
        }

        const div = document.createElement('div')
        div.innerHTML = text

        const svg = result.svg = div.getElementsByTagName('svg').item(0)

        el.getAttributeNames().forEach(attributeName => {
          svg.setAttribute(attributeName, el.getAttribute(attributeName))
        })

        if (removeInlineStyles) {
          svg.querySelectorAll('path').forEach(path => {
            path.removeAttribute('style')
          })
        }

        svg.removeAttribute('xmlns:a');
        el.replaceWith(svg)
        resolve(result)
      })
      .catch(reject)
  })
}

// /**
//  * @param {HTMLElement} el
//  * @param {boolean?}    removeInlineStyles
//  */
// export async function loadInlineSvg2 (el, removeInlineStyles) {
//   const result = {
//     svg: null
//   }
//
//   if (!(el instanceof HTMLElement)) {
//     throw new TypeError('el parameter must be a type of HTMLElement')
//   }
//
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest()
//     var svgUrl = el.getAttribute('data-src') || el.getAttribute('src')
//     xhr.open('GET', svgUrl, true)
//     xhr.onload = function () {
//       var xml = xhr.responseXML;
//
//       if (!xml) {
//         reject(result)
//         return;
//       }
//
//       var svg = result.svg = xml.documentElement;
//       if (el.id) {
//         result.svg.id = el.id
//       }
//
//       var classList = el.getAttribute('class')
//       if (classList) {
//         result.svg.setAttribute('class', classList + ' replaced-svg');
//       }
//
//       if (removeInlineStyles) {
//         result.svg.querySelectorAll('path').forEach(path => {
//           path.removeAttribute('style')
//         })
//       }
//
//       result.svg.removeAttribute('xmlns:a');
//       el.replaceWith(result.svg);
//       resolve(result)
//     }
//     xhr.onerror = reject
//     xhr.send();
//   })
// }
