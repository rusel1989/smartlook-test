import { observable } from 'mobx'

class Store {
  @observable users = new Map()
  @observable posts = new Map()
}

export default new Store()