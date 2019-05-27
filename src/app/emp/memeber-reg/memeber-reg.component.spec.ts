import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberRegComponent } from './memeber-reg.component';

describe('MemeberRegComponent', () => {
  let component: MemeberRegComponent;
  let fixture: ComponentFixture<MemeberRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeberRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeberRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
