import { omit } from 'lodash';
import { AxiosResponse } from 'axios';
import { github } from 'api';
import { SearchReposParams } from 'types';
import { REPLACE_MANY, UPSERT_MANY } from 'store/actions/types';
import {  buildAction } from 'store/actions/helpers';


export const search = (
  params: SearchReposParams,
  replace = false
) => buildAction({
  params,
  apiMethod: github.searchRepos,
  apiName: 'Search',
  apiID: '0',
  transform,
  replace
});

const transform = (res: AxiosResponse, replace = false) => {
  const {data, config} = res;
  const models = data.items.map(repo => ({
    type: 'Repository',
    id: repo.id,
    data: repo
  }));

  models.push({
    type: 'Search',
    id: '0',
    data: {
      ...omit(data, 'items'),
      params: config.params,
      loading: false
    }
  });

  return {
    type: replace ? REPLACE_MANY : UPSERT_MANY,
    payload: {models}
  };
};
