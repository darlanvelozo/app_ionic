import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhaPaginaPage } from './minha-pagina.page';

describe('MinhaPaginaPage', () => {
  let component: MinhaPaginaPage;
  let fixture: ComponentFixture<MinhaPaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MinhaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

