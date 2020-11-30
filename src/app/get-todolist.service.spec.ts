import { TestBed } from '@angular/core/testing';

import { GetTodolistService } from './get-todolist.service';

describe('GetTodolistService', () => {
  let service: GetTodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
