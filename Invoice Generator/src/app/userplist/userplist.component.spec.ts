import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplistComponent } from './userplist.component';

describe('UserplistComponent', () => {
  let component: UserplistComponent;
  let fixture: ComponentFixture<UserplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
