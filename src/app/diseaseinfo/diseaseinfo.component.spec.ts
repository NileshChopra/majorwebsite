import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseinfoComponent } from './diseaseinfo.component';

describe('DiseaseinfoComponent', () => {
  let component: DiseaseinfoComponent;
  let fixture: ComponentFixture<DiseaseinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseaseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
