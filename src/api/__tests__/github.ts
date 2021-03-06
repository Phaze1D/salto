import MockAdapter from 'axios-mock-adapter';
import { searchRepos, githubAxios, setToken, getRepo } from '../github';

describe('Github API Config Test', () => {
  const mock = new MockAdapter(githubAxios);

  it('Should match correct config without auth', async () => {
    mock.onGet(/\S/).reply(200, {});
    const res = await searchRepos({q: 'reacts'});
    expect(res.config.headers).toMatchSnapshot();
    expect(res.config.baseURL).toMatchSnapshot();
  });

  it('Should match correct config with auth', async () => {
    setToken('falsetoken923908-4325');
    mock.onGet(/\S/).reply(200, {});
    const res = await getRepo({owner: 'phaze1d', name: 'some'});
    expect(res.config.headers).toMatchSnapshot();
    expect(res.config.baseURL).toMatchSnapshot();
  });

  // TODO: TEST Cancel tokens
});
