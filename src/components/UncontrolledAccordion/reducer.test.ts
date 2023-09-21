import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

test('collapsed should be true', ()=> {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //exception
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', ()=> {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //exception
    expect(newState.collapsed).toBe(false)
})

test('should be error', ()=> {
    //data
    const state: StateType = {
        collapsed: true
    }

    expect( () => {
        reducer(state, {type: 'incorrect action'})
    }).toThrowError()
})