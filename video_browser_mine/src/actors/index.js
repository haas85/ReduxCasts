import CommentActor from './comments';

// An array of actor functions taking a `state` object and `dispatch` function
var actors = [ CommentActor ]

var acting = false;

export default function(store) {
    store.subscribe(function() {
        // Ensure that any action dispatched by actors do not result in a new
        // actor run, allowing actors to dispatch with impunity.
        if (!acting) {
            acting = true;
            actors.forEach(function(actor) {
                actor(store.getState(), store.dispatch)
            });
            acting = false;
        }
    });
}