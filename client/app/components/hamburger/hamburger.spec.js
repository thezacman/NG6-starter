import HamburgerModule from './hamburger';
import HamburgerController from './hamburger.controller';
import HamburgerComponent from './hamburger.component';
import HamburgerTemplate from './hamburger.html';

describe('Hamburger', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HamburgerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HamburgerController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HamburgerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = HamburgerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(HamburgerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HamburgerController);
    });
  });
});
