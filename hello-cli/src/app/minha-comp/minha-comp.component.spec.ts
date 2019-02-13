import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaCompComponent } from './minha-comp.component';

describe('MinhaCompComponent', () => {
  let component: MinhaCompComponent;
  let fixture: ComponentFixture<MinhaCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
