import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBookItemComponent } from './google-book-item.component';

describe('GoogleBookItemComponent', () => {
  let component: GoogleBookItemComponent;
  let fixture: ComponentFixture<GoogleBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
