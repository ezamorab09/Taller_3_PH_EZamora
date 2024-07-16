import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CambioMonedaComponent } from './cambio-moneda.component';

describe('CambioMonedaComponent', () => {
  let component: CambioMonedaComponent;
  let fixture: ComponentFixture<CambioMonedaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CambioMonedaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CambioMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
