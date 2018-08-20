import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSectionOrderDetailsComponent } from './title-section-order-details.component';

describe('TitleSectionOrderDetailsComponent', () => {
  let component: TitleSectionOrderDetailsComponent;
  let fixture: ComponentFixture<TitleSectionOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleSectionOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleSectionOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
