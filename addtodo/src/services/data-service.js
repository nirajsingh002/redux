import fetch from 'cross-fetch';

const dataService = store => next => action => {
    next(action)
    switch (action.type) {
        case 'GET_TODO_DATA':
            fetch('data/todo-data.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    next({
                        type: 'GET_TODO_DATA_RECEIVED',
                        data
                    })
                })
                .catch(err => {
                    next({
                        type: 'GET_TODO_DATA_ERROR',
                        err
                    })
                })
    }
}

export default dataService;