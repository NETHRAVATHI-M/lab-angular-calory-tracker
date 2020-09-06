import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsCountComponent } from './fruits-count.component';

describe('FruitsCountComponent', () => {
  let component: FruitsCountComponent;
  let fixture: ComponentFixture<FruitsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
