class MinVue {
  constructor(options) {
    this._init(options)
  }
  _init(options) {
    this.$options = options
    if (this.$options.data) initData(this)
    if (this.$options.methods) initMethod(this)
    if (this.$options.el) {
      this.$mount()
    }
  }
  $mount() {
    this.update()
  }
  update() {
    let el = this.$options.el
    el = el && query(el)
    if (this.$options.template) {
      this.el = {}
      el.innerHTML = ''
      el.appendChild(this.el)
    }
  }
  setState(data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key]
    })
    this.update()
  }
}

function query(el) {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      return document.createElement('div')
    }
    return selected
  }
  return el
}

function initData(vm) {
  let data = vm.$options && vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm, vm) : data || {}
  Object.keys(data).forEach((key) => {
    proxy(vm, '_data', key)
  })
}

function proxy(target, sourceKey, key) {
  const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true
  }
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function prosySetter(val) {
    this[sourceKey][key] = val
  }
  Object.defineProerty(target, key, sharedPropertyDefinition)
}

function initMethod(vm) {
  const event = vm.$options.methods
  Object.keys(event).forEach((key) => {
    vm[key] = event[key].bind(vm)
  })
}

// https://github.com/buppt/YourVue/tree/master/oldSrc/1.main_flow
