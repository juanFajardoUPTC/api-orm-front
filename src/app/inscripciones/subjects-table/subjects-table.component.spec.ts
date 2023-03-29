import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriasComponent } from './subjects-table.component';

describe('SubjectsTableComponent', () => {
  let component: TablaMateriasComponent;
  let fixture: ComponentFixture<TablaMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMateriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
