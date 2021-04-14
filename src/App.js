import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonapiClient from "ra-jsonapi-client";
import { PostList, PostEdit, PostCreate, PostIcon } from '@/resources/posts.js'

const dataProvider = jsonapiClient('http://localhost:3000/api/v1', {});

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
    </Admin>
  )
};

export default App;
