export const HTTP_CLIENT_MOCK = jasmine.createSpyObj('HttpClient', [
  'get',
  'post',
  'put',
  'delete',
]);
