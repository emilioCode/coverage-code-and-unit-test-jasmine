import { AppComponent } from 'app/app.component';
import { POST_SERVICE_MOCK } from '@mocks';
import { POST_ARRAY } from 'app/mocks/parameters/post.mock';

function setup() {
  const component = new AppComponent(POST_SERVICE_MOCK);
  return { component };
}

describe('AppComponent', () => {
  const { component } = setup();

  it('should be created', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should getPosts works', () => {
    POST_SERVICE_MOCK.get.and.returnValue({
      subscribe: (res: any) => {
        res.next(POST_ARRAY);
        res.error({ message: 'Error' });
      },
    });
    component.getPosts();
    expect(POST_SERVICE_MOCK.get).toHaveBeenCalled();
  });
});
