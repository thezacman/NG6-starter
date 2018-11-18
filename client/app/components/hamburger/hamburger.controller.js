class HamburgerController {
   constructor() {
      this.className = ''
      this.menuEl = document.querySelector('div.show-for-small')
      this.isActive = false
      this.activeClassName = 'is-active'
   }

   changeState() {
      if (this.isActive) {
         this.className = ''
         this.menuEl.classList.remove('expanded')
      } else {
         this.className = this.activeClassName
         this.menuEl.classList.add('expanded')
      }
      this.isActive = !this.isActive
   }
}

export default HamburgerController
