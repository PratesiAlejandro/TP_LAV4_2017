import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJuegosComponent } from './home-juegos.component';

describe('HomeJuegosComponent', () => {
  let component: HomeJuegosComponent;
  let fixture: ComponentFixture<HomeJuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
