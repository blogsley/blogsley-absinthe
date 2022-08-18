import { deserialize } from './'

export default class Block {
  constructor () {
  }
  serialize (block) {
  }
  deserialize (data) {
    console.log('deserializing children')
    console.log(data)
    const children = [...data.children]
    data = Object.assign({}, data)
    //const children = data.children
    if (children && Array.isArray(children)) {
      for ( var i = 0; i < children.length; i++) {
        var child = deserialize(children[i])
        children[i] = child
        //console.log(child)
      } 
    }
    data.children = children
    return data
  }
}
