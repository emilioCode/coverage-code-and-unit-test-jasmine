import { HTTP_CLIENT_MOCK, POST_SERVICE_MOCK } from '@mocks';
import { PostService } from '@services';

function setup() {
  const service = new PostService(HTTP_CLIENT_MOCK);
  return { service };
}

describe('PostService', () => {
  const { service } = setup();

  it('should be works', () => {
    expect(service).toBeTruthy();
  });

  it('get function should be works', () => {
    HTTP_CLIENT_MOCK.get.and.returnValue();
    service.get();
    expect(HTTP_CLIENT_MOCK.get).toHaveBeenCalled();
  });
});
