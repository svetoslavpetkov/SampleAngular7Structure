import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOrderTileComponent } from './single-order-tile.component';

describe('SingleOrderTileComponent', () => {
  let component: SingleOrderTileComponent;
  let fixture: ComponentFixture<SingleOrderTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOrderTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOrderTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
