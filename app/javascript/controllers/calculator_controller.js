import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  }

  print1() {
    const screenElement = this.element.querySelector('#calculator-screen')
   screenElement.innerHTML +='1'

  }
}
