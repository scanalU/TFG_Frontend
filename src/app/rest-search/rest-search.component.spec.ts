import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestSearchComponent } from './rest-search.component';

describe('RestSearchComponent', () => {
  let component: RestSearchComponent;
  let fixture: ComponentFixture<RestSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
