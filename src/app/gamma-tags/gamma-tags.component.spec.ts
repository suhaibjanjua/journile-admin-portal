import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaTagsComponent } from './gamma-tags.component';

describe('GammaTagsComponent', () => {
  let component: GammaTagsComponent;
  let fixture: ComponentFixture<GammaTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammaTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
