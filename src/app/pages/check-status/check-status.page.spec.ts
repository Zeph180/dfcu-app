import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckStatusPage } from './check-status.page';

describe('CheckStatusPage', () => {
  let component: CheckStatusPage;
  let fixture: ComponentFixture<CheckStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
