import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseService } from '../../../service/course.service';
import { of } from 'rxjs';
import { Tip } from '../../../entity/tip';
import Result from '../../../entity/result';
import { SubTip } from '../../../entity/subTip';

describe('CourseComponent', () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;
    const courseService = jasmine.createSpyObj('CourseService', ['getTip', 'getSubTipByTipId', 'changeTip']);
    const tip = new Tip();
    tip.id = 1;
    tip.name = '后端';
    const tipResult = new Result<Array<Tip>>();
    tipResult.data = [tip];
    const getTipSpy = courseService.getTip.and.returnValue(of(tipResult));
    const subTipResult = new Result<Array<SubTip>>();
    const subTip = new SubTip();
    subTip.id = 1;
    subTip.name = 'Java';
    subTip.tipId = 1;
    subTipResult.data = [subTip];
    const getSubTipSpy = courseService.getSubTipByTipId.and.returnValue(of(subTipResult));


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CourseComponent],
            imports: [HttpClientTestingModule],
            providers: [{provide: CourseService, useValue: courseService}]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should getTip', () => {
        expect(component.tips.length).toEqual(tipResult.data.length);
        expect(component.tips[0].name).toEqual(tip.name);
    });

    it('should getSubTip', () => {
        expect(component.subTips.length).toEqual(subTipResult.data.length);
        expect(component.subTips[0].tipId).toEqual(1);
        expect(component.subTips[0].name).toEqual('Java');
    });

    // it('should change subTip', () => {
    //     const changeSubTipResult = new Result<Array<SubTip>>();
    //     const changeSubTip = new SubTip();
    //     changeSubTip.id = 2;
    //     changeSubTip.name = 'React';
    //     changeSubTipResult.data = [changeSubTip];
    //     const changeTipSpy = courseService.changeTip.and.returnValue(of(changeSubTipResult));
    //     const message = changeTipSpy.calls.all();
    //     console.log('any ', message);
    //     expect(component.subTips.length).toEqual(changeSubTipResult.data.length);
    //     expect(component.subTips[0].id).toEqual(2);
    //     expect(component.subTips[0].name).toEqual('React');
    // });
});
