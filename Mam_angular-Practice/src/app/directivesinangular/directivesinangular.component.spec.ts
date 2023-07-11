import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesinangularComponent } from './directivesinangular.component';

describe('DirectivesinangularComponent', () => {
  let component: DirectivesinangularComponent;
  let fixture: ComponentFixture<DirectivesinangularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesinangularComponent]
    });
    fixture = TestBed.createComponent(DirectivesinangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
