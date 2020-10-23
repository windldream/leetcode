/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function (expression) {
  function SyntaxNode(type) {
    const STDNAME = /^[a-zA-Z\$_][a-zA-Z\d_]*$/
    this.type = type
    this.catholic = []
    this.names = []
    this.addNext = (x) => {
      if (x instanceof SyntaxNode) {
        this.catholic.push(x)
      } else if (STDNAME.test(x)) {
        let nameNode = new SyntaxNode(Symbol.for('name'))
        nameNode.catholic.push(x)
        this.catholic.push(nameNode)
      } else {
        let numNode = new SyntaxNode(Symbol.for('number'))
        numNode.catholic.push(x)
        this.catholic.push(numNode)
      }
      if (type === Symbol.for('Dec')) {
        if (this.catholic.length >= 2) {
          let val = this.catholic.pop()
          let key = this.catholic.pop()
          if (key.type === Symbol.for('name')) {
            let c = new SyntaxNode(Symbol.for('C'))
            c.addNext(key)
            c.addNext(val)
            this.catholic.push(c)
          } else {
            this.catholic.push(key)
            this.catholic.push(val)
          }
        }
      }
    }

    this.process = (filed = {}) => {
      let vals = this.catholic
      switch (type) {
        case Symbol.for('Add'):
          return vals[0].process(filed) + vals[1].process(filed)
        case Symbol.for('Mult'):
          return vals[0].process(filed) * vals[1].process(filed)
        case Symbol.for('Exp'):
          return vals[0].process(filed)
        case Symbol.for('Dec'):
          for (let e of vals) {
            if (e.type === Symbol.for('C')) {
              let p = e.process(filed)
              filed = { ...filed, ...{ [p.k]: p.v } }
            }
          }
          return vals[vals.length - 1].process({ ...filed })
        case Symbol.for('C'):
          return { k: vals[0].catholic[0], v: vals[1].process(filed) }
        case Symbol.for('name'):
          return filed[vals[0]]
        case Symbol.for('number'):
          return parseFloat(vals[0])
      }
    }
  }

  function generateSyntaxTree(exp, k) {
    let syntax = ''
    let node = null
    while (k < exp.length) {
      switch (exp[k]) {
        case '(':
          let returns = generateSyntaxTree(exp, k + 1)
          if (node) {
            let cache = new SyntaxNode(Symbol.for('Exp'))
            cache.addNext(returns[0])
            node.addNext(cache)
            k = returns[1] + 1
          } else {
            node = new SyntaxNode(Symbol.for('Exp'))
            node.addNext(returns[0])
            k = returns[1]
          }
          break
        case ' ':
          if (!syntax) {
            k++
            break
          }
          switch (syntax) {
            case 'add':
              node = new SyntaxNode(Symbol.for('Add'))
              break
            case 'mult':
              node = new SyntaxNode(Symbol.for('Mult'))
              break
            case 'let':
              node = new SyntaxNode(Symbol.for('Dec'))
              break
            default:
              node.addNext(syntax)
              break
          }
          syntax = ''
          k++
          break
        case ')':
          if (syntax && node) node.addNext(syntax)
          return [node, k]
        default:
          syntax += exp[k++]
          break
      }
    }
    if (!node) throw new Error('parsing fial.')
    return [node, k]
  }

  let root = generateSyntaxTree(expression, 0)[0]
  return root.process()
}

evaluate('(let x 2 (mult x 5))')
