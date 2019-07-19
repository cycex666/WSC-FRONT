import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorsGridComponent } from './contractors-grid.component';

describe('ContractorsGridComponent', () => {
  let component: ContractorsGridComponent;
  let fixture: ComponentFixture<ContractorsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
