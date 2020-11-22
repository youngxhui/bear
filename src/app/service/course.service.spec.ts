import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Tip } from '../entity/tip';
import Result from '../entity/result';

describe('CourseService', () => {
    let service: CourseService;

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(CourseService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be get tip', () => {
        const tip = new Tip();
        tip.id = 1;
        tip.name = '后端';
        const result = new Result<Array<Tip>>();
        result.data = [tip];
        httpClient.get<Result<Array<Tip>>>('/tip/all').subscribe(
            data => expect(data).toEqual(result));

    });

});
