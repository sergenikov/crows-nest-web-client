import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanDashboardComponent } from './scan-dashboard.component';

describe('ScanDashboardComponent', () => {
  let component: ScanDashboardComponent;
  let fixture: ComponentFixture<ScanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
