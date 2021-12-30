import { fetchLogin, loginAdapter, loginReducer } from './login.slice';

describe('login reducer', () => {
  it('should handle initial state', () => {
    const expected = loginAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null
    });

    expect(loginReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchLogins', () => {
    let state = loginReducer(
      undefined,
      fetchLogin.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {}
      })
    );

    state = loginReducer(
      state,
      fetchLogin.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } }
      })
    );

    state = loginReducer(
      state,
      fetchLogin.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } }
      })
    );
  });
});
