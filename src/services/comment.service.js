import HttpService from './HttpService'

export const commentService = {
    query,
    getEmpty,
    getById,
    save,
    remove
}

function getEmpty() {
    return {
        _id: null,
        name: null,
        price: null,
        type: null,
        createdAt: null,
        inStock: null
    }
}


async function query(filter = { term: null}) {
    const { term } = filter
    var queryURL = '?q='
    term ? queryURL += `&term=${term}` : ''
    return HttpService.get(`comment${queryURL}`)
}

async function getById(commentId) {
    return HttpService.get(`comment/${commentId}`)
}

function remove(commentId) {
    return HttpService.delete(`comment/${commentId}`)
}

async function save(comment) {
    if (!comment._id) {
        comment.createdAt = Date.now();
        return HttpService.post('comment', comment)
    }
    return HttpService.put(`comment/${comment._id}`, comment)
}