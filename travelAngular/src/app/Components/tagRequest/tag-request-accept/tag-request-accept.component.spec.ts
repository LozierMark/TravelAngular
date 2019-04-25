import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRequestAcceptComponent } from './tag-request-accept.component';

describe('TagRequestAcceptComponent', () => {
  let component: TagRequestAcceptComponent;
  let fixture: ComponentFixture<TagRequestAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagRequestAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRequestAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
