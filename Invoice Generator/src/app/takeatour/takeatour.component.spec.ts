import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeatourComponent } from './takeatour.component';

describe('TakeatourComponent', () => {
  let component: TakeatourComponent;
  let fixture: ComponentFixture<TakeatourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeatourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeatourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
