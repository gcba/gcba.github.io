import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObeliscoV1Component } from './obelisco-v1.component';

describe('ObeliscoV1Component', () => {
  let component: ObeliscoV1Component;
  let fixture: ComponentFixture<ObeliscoV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObeliscoV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObeliscoV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
