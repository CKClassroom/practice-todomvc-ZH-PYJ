import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFilterComponent } from './footer-filter.component';

describe('FooterFilterComponent', () => {
  let component: FooterFilterComponent;
  let fixture: ComponentFixture<FooterFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
