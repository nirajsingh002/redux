/**
 * Sends crash reports as state is updated and listeners are notified.
 */

const crashReporter = store => next => action => {
    console.info('trigger crashReporter function');
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception', err)
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err;
    }
}

export default crashReporter;