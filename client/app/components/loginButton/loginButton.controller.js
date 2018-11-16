class LoginButtonController {
  constructor() {
    this.texts = ['Login', 'Logout']
    this.isLoggedIn = false
    this.text = this.texts[0]
  }

  changeState() {
    this.isLoggedIn = !this.isLoggedIn
    this.text = this.texts[Number(this.isLoggedIn)]
  }
}

export default LoginButtonController
