import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanResultHolderComponent } from './scan-result-holder.component';

describe('ScanResultHolderComponent', () => {
  let component: ScanResultHolderComponent;
  let fixture: ComponentFixture<ScanResultHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanResultHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanResultHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
