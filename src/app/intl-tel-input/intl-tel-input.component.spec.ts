import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IntlTelInputComponent } from './intl-tel-input.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('IntlTelInputComponent', () => {
  let component: IntlTelInputComponent;
  let fixture: ComponentFixture<IntlTelInputComponent>;
  let inputElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlTelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // check if input is present
  it('input element is present', () => {
    inputElement = fixture.debugElement.query(By.css('input[type=tel]'));
  })

});
