class Student {
  private _name: string
  private _score: number

  constructor(name: string, score: number) {
    this._name = name
    this._score = score
  }

  get name() {
    return this._name
  }

  get score() {
    return this._score
  }
}

export default Student
