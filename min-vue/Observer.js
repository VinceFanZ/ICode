let uid = 0
class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach((sub) => sub.update())
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
}
Dep.target = null

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.cb = cb
    this.vm = vm
    this.getter = expOrFn
    this.deps = []
    this.newDeps = []
  }
}

class Observer {
  constructor(data) {
    this.data = data
    this.walk(data)
  }
  walk(data) {
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key])
    })
  }
}

function observer(value) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}

function defineReactive(data, key, val) {
  const dep = new Dep()
  let childOb = observer(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
      }
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      val = newVal
      dep.notify()
    }
  })
}
