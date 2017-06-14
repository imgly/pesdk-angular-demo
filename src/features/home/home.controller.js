

export default class HomeController {
  constructor() {
    console.log("HomeController#new")
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
}