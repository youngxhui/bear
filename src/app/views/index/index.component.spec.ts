import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IndexService } from 'src/app/service/index.service';
import Banner from 'src/app/entity/banner';
import Result from 'src/app/entity/result';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;
    const indexService = jasmine.createSpyObj('IndexService', ['getBanner']);
    const banner = new Banner();
    banner.id = 1;
    banner.description = 'Hello World';
    banner.path = 'http://hello.com';
    const bannerResult = new Result<Banner>();
    bannerResult.data = banner;
    const getBannerSpy = indexService.getBanner.and.returnValue(of(bannerResult));
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IndexComponent],
            providers: [{provide: IndexService, useValue: indexService}],
        }).compileComponents();

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
