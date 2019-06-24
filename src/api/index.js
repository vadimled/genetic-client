import ApiMock from './ApiMock';
import ApiReal from './ApiReal';
export default process?.env?.NODE_ENV === 'test' ? ApiMock : ApiReal;
