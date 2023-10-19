import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoliciatarPage } from './soliciatar.page';

describe('SoliciatarPage', () => {
  let component: SoliciatarPage;
  let fixture: ComponentFixture<SoliciatarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SoliciatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
