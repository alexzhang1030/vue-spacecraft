import { createRenderer } from 'vue'
import type { HostElement } from 'vue'

function patchProp(
  el: HostElement,
  key: string,
  prevValue: any,
  nextValue: any
) {}

const { render, createApp } = createRenderer({
  patchProp,
  insert,
  remove,
  createElement,
  // ...
})
