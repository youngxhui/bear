import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateComponent } from './rate.component';

describe('RateComponent', () => {
    let component: RateComponent;
    let fixture: ComponentFixture<RateComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RateComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RateComponent);
        component = fixture.componentInstance;
        // rateDe = fixture.debugElement.query(By.css('nz-rate'));
        // rateEl = rateDe.nativeElement;
        // component.value = 2;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
