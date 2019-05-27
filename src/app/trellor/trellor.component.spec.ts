import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrellorComponent } from './trellor.component';

describe('TrellorComponent', () => {
  let component: TrellorComponent;
  let fixture: ComponentFixture<TrellorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrellorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrellorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
