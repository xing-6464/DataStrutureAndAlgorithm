class Student extends Object {
  private _name: string
  private _score: number

  constructor(name: string, score: number) {
    super()
    this._name = name
    this._score = score
  }

  get name() {
    return this._name
  }

  get score() {
    return this._score
  }

  toString(): string {
    return `Student(name: ${this.name}，score: ${this.score})`
  }
}

export { Student }
