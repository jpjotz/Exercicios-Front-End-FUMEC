import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoCard } from './produto-card';

describe('ProdutoCard', () => {
  let component: ProdutoCard;
  let fixture: ComponentFixture<ProdutoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
