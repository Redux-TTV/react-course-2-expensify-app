import React from 'react';
import authReducer from '../../reducers/auth.js';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123abc'
  };
  //const state = authReducer(state, action);
  //expect(state).toEqual({
  //  uid: '123abc'
  //});
  const state = authReducer({},action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid on logout', () => {
  const action = {type: 'LOGOUT'};
  const state = authReducer({}, action);
  expect(state).toEqual({});
});
