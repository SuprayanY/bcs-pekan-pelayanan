<template>
  <Teleport to="head">
    <meta
        v-for="(meta, name) in metaList"
        :key="name"
        v-bind="meta"
    >
  </Teleport>
</template>

<script setup>
import { usePageMetadata } from '@/composables/page-metadata'
import { ref, watch } from 'vue'
import pageMetadataConstant from '@/constants/page-metadata'

const head = usePageMetadata()
const metaList = ref({})

function populateTitleMeta (metaObjects) {
  pageMetadataConstant.titleMetaSet.forEach(name => {
    if (!(name in metaObjects)) {
      metaObjects[name] = {
        name,
        property: name,
        content: head.state.title
      }
    }
  })
}

function populateDescriptionMeta (metaObjects) {
  pageMetadataConstant.descriptionMetaSet.forEach(name => {
    if (!(name in metaObjects) && head.state.description) {
      metaObjects[name] = {
        name,
        property: name,
        content: head.state.description
      }
    }
  })
}

function populateImageMeta (metaObjects) {
  pageMetadataConstant.imageMetaSet.forEach(name => {
    if (!(name in metaObjects) && head.state.image) {
      metaObjects[name] = {
        name,
        property: name,
        content: head.state.image
      }
    }
  })
}

watch(() => head.state.metaList, metas => {
  const metaObjects = {}
  metas?.forEach?.(meta => {
    if (typeof meta?.name !== 'string') {
      return
    }
    metaObjects[meta.name] = { ...meta }
  })
  populateTitleMeta(metaObjects)
  populateDescriptionMeta(metaObjects)
  populateImageMeta(metaObjects)
  metaList.value = metaObjects
}, {
  immediate: true
})
</script>
