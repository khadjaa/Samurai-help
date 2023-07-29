import {updateLight} from "./07.tasks";

test('updatedLight', () => {
    const startState = 'green'

    const endState = updateLight(startState)

    expect(endState).toEqual('yellow');
})



