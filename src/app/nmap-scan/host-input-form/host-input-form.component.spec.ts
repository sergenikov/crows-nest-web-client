import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostInputFormComponent } from './host-input-form.component';

describe('HostInputFormComponent', () => {
  let component: HostInputFormComponent;
  let fixture: ComponentFixture<HostInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
