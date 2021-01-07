import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsValidationFormComponent } from './js-validation-form.component';

describe('JsValidationFormComponent', () => {
  let component: JsValidationFormComponent;
  let fixture: ComponentFixture<JsValidationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsValidationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
