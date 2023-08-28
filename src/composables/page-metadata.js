import { watchEffect, reactive } from 'vue'
import pageMetadataConstant from '@/constants/page-metadata'

const state = reactive({
  title: pageMetadataConstant.defaultTitle,
  description: pageMetadataConstant.defaultDescription,
  image: pageMetadataConstant.defaultImage,
  metaList: []
})

watchEffect(() => {
  document.title = state.title
})

export function usePageMetadata({
    title,
    description,
    image,
    meta: metaList
} = {}) {
  if (title !== undefined) {
    state.title = title || pageMetadataConstant.defaultTitle
  }

  if (description !== undefined) {
    state.description = description || pageMetadataConstant.defaultDescription
  }

  if (image !== undefined) {
    state.image = image || pageMetadataConstant.defaultImage
  }

  state.metaList = metaList

  function reset () {
    state.title = pageMetadataConstant.defaultTitle
    state.description = pageMetadataConstant.defaultDescription
    state.image = pageMetadataConstant.defaultImage
    state.metaList = []
  }

  return {
    state,
    reset
  }
}
