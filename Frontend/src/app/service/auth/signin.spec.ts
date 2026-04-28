import { TestBed } from '@angular/core/testing';

import { Signin } from './signin';

describe('Signin', () => {
  let service: Signin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Signin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
