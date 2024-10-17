import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoHomepageComponent } from './apresentacao-homepage.component';

describe('ApresentacaoHomepageComponent', () => {
  let component: ApresentacaoHomepageComponent;
  let fixture: ComponentFixture<ApresentacaoHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApresentacaoHomepageComponent]
    });
    fixture = TestBed.createComponent(ApresentacaoHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
